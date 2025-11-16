'use client';

import { Sparkles, Salad, Dumbbell, Syringe } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'لیزر موهای زائد',
    description: 'با استفاده از جدیدترین دستگاه‌های لیزر دایود، موهای زائد را برای همیشه از بین ببرید. ایمن، بدون درد و با نتایج دائمی.',
    image: '/images/service-laser.jpg',
    features: ['لیزر دایود پیشرفته', 'بدون درد', 'نتیجه دائمی', 'مناسب تمام پوست‌ها']
  },
  {
    icon: Salad,
    title: 'مشاور تغذیه و سلامت',
    description: 'برنامه غذایی تخصصی و شخصی‌سازی شده توسط متخصصان تغذیه برای رسیدن به وزن ایده‌آل و سلامت بهتر.',
    image: '/images/service-nutrition.jpg',
    features: ['رژیم شخصی‌سازی', 'مشاوره تخصصی', 'پیگیری مستمر', 'نتایج تضمینی']
  },
  {
    icon: Dumbbell,
    title: 'دستگاه لاغری و تناسب اندام',
    description: 'دستگاه‌های پیشرفته کرایولیپولیز و RF برای لاغری موضعی، سفت کردن پوست و شکل دهی اندام.',
    image: '/images/service-body.jpg',
    features: ['کرایولیپولیز', 'RF سفت کننده', 'کاویتیشن', 'فشرده‌سازی بدن']
  },
  {
    icon: Syringe,
    title: 'تزریق ژل و فیلر',
    description: 'جوان‌سازی صورت با تزریقات تخصصی توسط پزشکان مجرب. از بین بردن چین و چروک و حجم دهی طبیعی.',
    image: '/images/service-injection.jpg',
    features: ['فیلر صورت', 'ژل لب', 'بوتاکس', 'میکرونیدلینگ']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            خدمات <span className="bg-gradient-to-l from-rose-600 to-pink-600 bg-clip-text text-transparent">تخصصی ما</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            با بهره‌گیری از پیشرفته‌ترین تجهیزات و متخصصان مجرب، بهترین خدمات زیبایی را ارائه می‌دهیم
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200 hidden items-center justify-center">
                  <service.icon className="text-rose-400 opacity-50" size={80} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full z-10">
                  <service.icon className="text-rose-600" size={28} />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>

                <div className="grid grid-cols-2 gap-2 pt-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-rose-600 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <button
                onClick={() => document.getElementById('reservation_form')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full mt-4 bg-gradient-to-l from-rose-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  رزرو نوبت
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

