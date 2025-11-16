'use client';

import { Phone, MapPin, Clock, Mail, Instagram, Send, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { info } from '@/lib/info';
import emailjs from '@emailjs/browser';
import SuccessModal from './SuccessModal';

// نام خدمات برای نمایش در ایمیل
const serviceNames: { [key: string]: string } = {
  laser: 'لیزر موهای زائد',
  nutrition: 'مشاور تغذیه و سلامت',
  body: 'دستگاه لاغری و تناسب اندام',
  injection: 'تزریق ژل و فیلر',
  other: 'سایر'
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // تابع اعتبارسنجی شماره تماس
  const validatePhone = (phone: string): string => {
    // حذف فاصله‌ها و کاراکترهای غیر عددی
    const cleanedPhone = phone.replace(/\D/g, '');
    
    if (!cleanedPhone) {
      return 'شماره تماس الزامی است';
    }
    
    if (cleanedPhone.length !== 11) {
      return 'شماره تماس باید 11 رقم باشد';
    }
    
    if (!cleanedPhone.startsWith('09')) {
      return 'شماره تماس باید با 09 شروع شود';
    }
    
    return '';
  };

  // تابع اعتبارسنجی نام
  const validateName = (name: string): string => {
    const trimmedName = name.trim();
    if (!trimmedName) {
      return 'نام و نام خانوادگی الزامی است';
    }
    if (trimmedName.length < 2) {
      return 'نام باید حداقل 2 کاراکتر باشد';
    }
    if (trimmedName.length > 50) {
      return 'نام نباید بیشتر از 50 کاراکتر باشد';
    }
    return '';
  };

  // تابع اعتبارسنجی کلی فرم
  const validateForm = (): boolean => {
    const newErrors = {
      name: validateName(formData.name),
      phone: validatePhone(formData.phone),
      service: formData.service ? '' : 'لطفاً یک خدمت را انتخاب کنید'
    };
    
    setErrors(newErrors);
    return !newErrors.name && !newErrors.phone && !newErrors.service;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // فقط اعداد را قبول می‌کند
    const numericValue = value.replace(/\D/g, '');
    // حداکثر 11 رقم
    const limitedValue = numericValue.slice(0, 11);
    
    setFormData(prev => ({...prev, phone: limitedValue}));
    
    // اعتبارسنجی در حین تایپ
    if (limitedValue) {
      const error = validatePhone(limitedValue);
      setErrors(prev => ({...prev, phone: error}));
    } else {
      setErrors(prev => ({...prev, phone: ''}));
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({...prev, name: value}));
    
    // اعتبارسنجی در حین تایپ
    if (value.trim()) {
      const error = validateName(value);
      setErrors(prev => ({...prev, name: error}));
    } else {
      setErrors(prev => ({...prev, name: ''}));
    }
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({...prev, service: e.target.value}));
    setErrors(prev => ({...prev, service: ''}));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // اعتبارسنجی قبل از ارسال
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);

    try {
      // تنظیمات EmailJS - این مقادیر باید در فایل .env.local قرار گیرند
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_iz37qzj';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_w4k0vj4';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'i_MbyrihoQne64KRG';

      // آماده‌سازی داده‌های ایمیل
      const templateParams = {
        from_name: formData.name,
        from_phone: formData.phone,
        service: serviceNames[formData.service] || formData.service,
        message: formData.message || 'بدون پیام',
        to_email: info.email,
        clinic_name: info.name,
      };

      // ارسال ایمیل
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      // نمایش مودال موفقیت
      setShowSuccessModal(true);
      // پاک کردن فرم
      setFormData({ name: '', phone: '', service: '', message: '' });
    } catch (error) {
      console.error('خطا در ارسال ایمیل:', error);
      alert('متأسفانه خطایی در ارسال درخواست رخ داد. لطفاً دوباره تلاش کنید یا با ما تماس بگیرید.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            تماس با <span className="bg-gradient-to-l from-rose-600 to-pink-600 bg-clip-text text-transparent">ما</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            برای دریافت مشاوره رایگان و رزرو نوبت با ما در تماس باشید
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">اطلاعات تماس</h3>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Phone className="text-rose-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">تلفن</h4>
                  <a href={info.phone} className="text-gray-600 hover:text-rose-600 transition-colors" dir="ltr">
                    {info.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="text-rose-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">آدرس</h4>
                  <p className="text-gray-600">
                    {info.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Clock className="text-rose-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">ساعات کاری</h4>
                  <p className="text-gray-600">شنبه تا پنجشنبه: ۹ صبح تا ۸ شب</p>
                  <p className="text-gray-600">جمعه: تعطیل</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail className="text-rose-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">ایمیل</h4>
                  <a href={`mailto:${info.email}`} className="text-gray-600 hover:text-rose-600 transition-colors" dir="ltr">
                        {info.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Instagram className="text-rose-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">اینستاگرام</h4>
                  <a href={info.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-rose-600 transition-colors" dir="ltr">
                    {info.instagram}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d960.5914472339858!2d47.02348109770234!3d35.921726101128066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ff8690043394495%3A0x7bac3e13989679a7!2z2qnZhNuM2YbbjNqpINmE24zYstixINiMINiy24zYqNin24zbjCDYjCDYqti62LDbjNmHINmIINmE2KfYutix24wg2YbbjNmI2YTYp9uM2YE!5e0!3m2!1sen!2s!4v1763213596266!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="موقعیت کلینیک"
              ></iframe>
            </div>
          </div>

          <div id="reservation_form">
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">فرم رزرو نوبت</h3>

              <div>
                <label className="block text-gray-700 font-medium mb-2">نام و نام خانوادگی</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleNameChange}
                  className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${
                    errors.name 
                      ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                      : 'border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                  }`}
                  placeholder="نام خود را وارد کنید"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <span>⚠</span>
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">شماره تماس</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${
                    errors.phone 
                      ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                      : 'border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                  }`}
                  placeholder="09123456789"
                  dir="ltr"
                  maxLength={11}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <span>⚠</span>
                    {errors.phone}
                  </p>
                )}
                {!errors.phone && formData.phone && formData.phone.length === 11 && (
                  <p className="mt-1 text-sm text-green-600 flex items-center gap-1">
                    <span>✓</span>
                    شماره تماس معتبر است
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">خدمات مورد نظر</label>
                <select
                  required
                  value={formData.service}
                  onChange={handleServiceChange}
                  className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${
                    errors.service 
                      ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                      : 'border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                  }`}
                >
                  <option value="">انتخاب کنید</option>
                  <option value="laser">لیزر موهای زائد</option>
                  <option value="nutrition">مشاور تغذیه و سلامت</option>
                  <option value="body">دستگاه لاغری و تناسب اندام</option>
                  <option value="injection">تزریق ژل و فیلر</option>
                  <option value="other">سایر</option>
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <span>⚠</span>
                    {errors.service}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">پیام (اختیاری)</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all resize-none"
                  placeholder="توضیحات بیشتر..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-l from-rose-600 to-pink-600 text-white py-4 rounded-xl font-bold hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    در حال ارسال...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    ارسال درخواست
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
      />
    </section>
  );
}

