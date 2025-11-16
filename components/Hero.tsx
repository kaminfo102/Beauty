'use client';

import { ChevronLeft } from 'lucide-react';

export default function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-white"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-rose-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-right space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                زیبایی را با ما
                <span className="block bg-gradient-to-l from-rose-600 to-pink-600 bg-clip-text text-transparent">
                  تجربه کنید
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                با جدیدترین تکنولوژی‌ها و متخصصان مجرب، زیبایی طبیعی خود را بازیابی کنید
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToServices}
                className="group bg-gradient-to-l from-rose-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                مشاهده خدمات
                <ChevronLeft size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-rose-600 px-8 py-4 rounded-full font-semibold border-2 border-rose-600 hover:bg-rose-50 hover:scale-105 transition-all duration-300"
              >
                رزرو نوبت
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {/* <div className="text-center">
                <div className="text-4xl font-bold text-rose-600">۱۵+</div>
                <div className="text-gray-600 text-sm mt-1">سال تجربه</div>
              </div> */}
              <div className="text-center border-x border-gray-200">
                <div className="text-4xl font-bold text-rose-600">۵۰۰۰+</div>
                <div className="text-gray-600 text-sm mt-1">مشتری راضی</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-rose-600">۱۰۰%</div>
                <div className="text-gray-600 text-sm mt-1">رضایت مندی</div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-400 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/images/hero-main.jpg"
                  alt="کلینیک زیبایی"
                  className="w-full h-[500px] object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="w-full h-[500px] bg-gradient-to-br from-rose-200 via-pink-200 to-rose-300 flex items-center justify-center hidden">
                  <div className="text-center text-white/80">
                    <div className="text-6xl mb-4">✨</div>
                    <div className="text-xl font-semibold">کلینیک زیبایی رز</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

