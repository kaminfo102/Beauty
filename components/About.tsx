'use client';

import { Award, Users, Heart, Shield } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'متخصصان مجرب',
    //description: 'تیم پزشکی با بیش از ۱۵ سال تجربه'
    description: ''
  },
  {
    icon: Users,
    title: 'هزاران مشتری راضی',
    description: ' '
  },
  {
    icon: Heart,
    title: 'خدمات با کیفیت',
    description: 'استفاده از بهترین تجهیزات پزشکی'
  },
  {
    icon: Shield,
    title: 'ایمنی و بهداشت',
    description: 'رعایت کامل استانداردهای بهداشتی'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              چرا <span className="bg-gradient-to-l from-rose-600 to-pink-600 bg-clip-text text-transparent">کلینیک نیولایف</span>؟
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
            کلینیک نیولایف در دیواندره از آبان سال 1402  در زمینه زیبایی ،شروع به فعالیت کرده است.که کارهای مختلف از جمله فیلر وبوتاکس و مزو و PRP ولیفت نخ ، لیزر و هایفوولاغری و مامایی فعالیت دارد.

دستگاه های مورد استفاده در کلینیک نیولایف شامل : 

دستگاه لیزر سوپرانوتیتانیوم 2000 وات 

دستگاه ARF

دستگاه ARF فرکشنال

دستگاه هایفو صورت و واژن 

دستگاه کویتیشن 

دستگاه الکترولیز

فیشال تخصصی با دستگاه             </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              هدف ما کمک به شما برای دستیابی به زیبایی طبیعی و افزایش اعتماد به نفس است. در کلینیک زیبایی نیولایف، شما تنها یک مشتری نیستید، بلکه عضوی از خانواده بزرگ ما هستید.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              {features.map((feature, index) => (
                <div key={index} className="space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl flex items-center justify-center">
                    <feature.icon className="text-rose-600" size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                  <img
                    src="/images/about-clinic.jpg"
                    alt="کلینیک"
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-64 bg-gradient-to-br from-rose-200 via-pink-200 to-rose-300 hidden items-center justify-center">
                    <div className="text-5xl">🏥</div>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                  <img
                    src="/images/about-equipment.jpg"
                    alt="تجهیزات"
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-48 bg-gradient-to-br from-pink-200 via-rose-200 to-pink-300 hidden items-center justify-center">
                    <div className="text-4xl">⚕️</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                  <img
                    src="/images/about-staff.jpg"
                    alt="متخصصان"
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-48 bg-gradient-to-br from-rose-300 via-pink-200 to-rose-200 hidden items-center justify-center">
                    <div className="text-4xl">👩‍⚕️</div>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                  <img
                    src="/images/about-services.jpg"
                    alt="خدمات"
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-64 bg-gradient-to-br from-pink-300 via-rose-200 to-pink-200 hidden items-center justify-center">
                    <div className="text-5xl">💆</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

