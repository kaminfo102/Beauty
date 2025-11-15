'use client';

import { Phone, MapPin, Clock, Mail, Instagram, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.');
    setFormData({ name: '', phone: '', service: '', message: '' });
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
                  <a href="tel:09185227306" className="text-gray-600 hover:text-rose-600 transition-colors" dir="ltr">
                    09185227306
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
                  کردستان شهرستان دیواندره شهرک اندیشه ، روبه روی ساختمان نظام مهندسی ، بالاتر از کمیته امداد ساختمان پزشکان کارن طبقه سوم                  </p>
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
                  <a href="mailto:info@clinicrose.ir" className="text-gray-600 hover:text-rose-600 transition-colors" dir="ltr">
                    info@newlifeclinic.ir
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Instagram className="text-rose-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">اینستاگرام</h4>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-rose-600 transition-colors" dir="ltr">
                    @cnewlife_clinic1
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

          <div>
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">فرم رزرو نوبت</h3>

              <div>
                <label className="block text-gray-700 font-medium mb-2">نام و نام خانوادگی</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                  placeholder="نام خود را وارد کنید"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">شماره تماس</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                  placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">خدمات مورد نظر</label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                >
                  <option value="">انتخاب کنید</option>
                  <option value="laser">لیزر موهای زائد</option>
                  <option value="nutrition">مشاور تغذیه و سلامت</option>
                  <option value="body">دستگاه لاغری و تناسب اندام</option>
                  <option value="injection">تزریق ژل و فیلر</option>
                  <option value="other">سایر</option>
                </select>
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
                className="w-full bg-gradient-to-l from-rose-600 to-pink-600 text-white py-4 rounded-xl font-bold hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                ارسال درخواست
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

