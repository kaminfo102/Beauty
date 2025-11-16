'use client';

import { Heart, Instagram, Phone, Mail } from 'lucide-react';
import { info } from '@/lib/info';

export default function Footer() {
  const currentYear = new Date().toLocaleDateString('fa-IR', { year: 'numeric' });

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-l from-rose-400 to-pink-400 bg-clip-text text-transparent">
                {info.name}
            </h3>
            <p className="text-gray-400 leading-relaxed">
               همراه شما در مسیر زیبایی و سلامتی
            </p>
            <div className="flex gap-3">
              <a
                href={info.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-rose-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={info.phone}
                className="w-10 h-10 bg-white/10 hover:bg-rose-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Phone size={20} />
              </a>
              <a
                href={info.email}
                className="w-10 h-10 bg-white/10 hover:bg-rose-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">خدمات</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-rose-400 transition-colors">لیزر موهای زائد</a></li>
              <li><a href="#services" className="hover:text-rose-400 transition-colors">مشاور تغذیه</a></li>
              <li><a href="#services" className="hover:text-rose-400 transition-colors">دستگاه لاغری</a></li>
              <li><a href="#services" className="hover:text-rose-400 transition-colors">تزریق ژل و فیلر</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">دسترسی سریع</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-rose-400 transition-colors">خانه</a></li>
              <li><a href="#about" className="hover:text-rose-400 transition-colors">درباره ما</a></li>
              <li><a href="#gallery" className="hover:text-rose-400 transition-colors">گالری</a></li>
              <li><a href="#contact" className="hover:text-rose-400 transition-colors">تماس با ما</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">اطلاعات تماس</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <a href={info.phone} className="hover:text-rose-400 transition-colors" dir="ltr">
                  {info.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <a href={info.email} className="hover:text-rose-400 transition-colors" dir="ltr">
                  {info.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            ساخته شده با <Heart size={16} className="text-rose-500 fill-rose-500" /> در سال {currentYear}
          </p>
          <p className="mt-2 text-sm">
            تمامی حقوق این وبسایت متعلق به کلینیک زیبایی نیولایف می‌باشد
          </p>
        </div>
      </div>
    </footer>
  );
}

