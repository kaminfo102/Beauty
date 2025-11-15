'use client';

import { Menu, Phone, X, Home, Sparkles, Users, Images, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'خانه', icon: Home },
    { id: 'services', label: 'خدمات', icon: Sparkles },
    { id: 'about', label: 'درباره ما', icon: Users },
    { id: 'gallery', label: 'گالری', icon: Images },
    { id: 'contact', label: 'تماس با ما', icon: MessageCircle },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-100 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between h-24 overflow-visible">
          {/* Left Navigation Items */}
          <div className="flex items-center gap-6 flex-1">
            {navItems.slice(0, 5).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-rose-600 transition-colors font-medium text-sm relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Center Logo - Overlapping Design */}
          <div className="flex-shrink-0 relative z-50" style={{ marginTop: '50px' }}>
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <div className="w-36 h-36 relative">
                <Image
                  src="/images/logo_2.png"
                  alt="کلینیک زیبایی نیولایت"
                  fill
                  className="object-contain"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-rose-100 to-pink-100 rounded-full hidden items-center justify-center">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-rose-600 block">نیولایف</span>
                    <span className="text-xs text-rose-500 mt-1">کلینیک زیبایی</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Navigation Items */}
          <div className="flex items-center gap-6 flex-1 justify-end">
            {navItems.slice(5).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-rose-600 transition-colors font-medium text-sm relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 transition-all group-hover:w-full"></span>
              </button>
            ))}
            <a
              href="tel:09185227306"
              className="flex items-center gap-2 text-rose-600 hover:text-rose-700 transition-colors font-medium text-sm"
            >
              <Phone size={18} />
              <span>09185227306</span>
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between h-20 relative overflow-visible">
          {/* Mobile Phone - Left */}
          <div className="flex items-center gap-2 flex-1">
            <a
              href="tel:09185227306"
              className="flex items-center gap-2 text-rose-600 hover:text-rose-700 transition-colors font-medium text-xs sm:text-sm"
            >
              <Phone size={16} />
              <span className="hidden sm:inline">09185227306</span>
            </a>
          </div>

          {/* Mobile Logo - Center with same style as desktop */}
          <div className="flex-shrink-0 relative z-50" style={{ marginTop: '50px' }}>
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 sm:w-24 sm:h-24 relative">
                <Image
                  src="/images/logo_2.png"
                  alt="کلینیک زیبایی نیولایف"
                  fill
                  className="object-contain"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-rose-100 to-pink-100 rounded-full hidden items-center justify-center">
                  <div className="text-center">
                    <span className="text-xl sm:text-2xl font-bold text-rose-600 block">نیولایف</span>
                    <span className="text-xs text-rose-500 mt-0.5">کلینیک زیبایی</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu - Right */}
          <div className="flex items-center justify-end flex-1">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-rose-600 transition-colors"
              aria-label="منو"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown - Beautiful Design */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <div className="md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-white via-rose-50/30 to-pink-50/30 shadow-2xl z-50 transform transition-transform duration-300 ease-out border-l border-rose-100">
              {/* Menu Header */}
              <div className="bg-gradient-to-l from-rose-600 to-pink-600 p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl"></div>
                </div>
                <div className="relative flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-1">منوی اصلی</h3>
                    <p className="text-rose-100 text-sm">کلینیک زیبایی نیولایف</p>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                    aria-label="بستن منو"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Menu Items */}
              <div className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-120px)]">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="group w-full flex items-center gap-4 p-4 rounded-2xl bg-white/80 hover:bg-gradient-to-l hover:from-rose-50 hover:to-pink-50 transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-[1.02] border border-transparent hover:border-rose-200 relative overflow-hidden"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {/* Background Gradient on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-l from-rose-100/50 to-pink-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Icon Container */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center group-hover:from-rose-500 group-hover:to-pink-500 transition-all duration-300 shadow-sm group-hover:shadow-md">
                          <Icon 
                            size={22} 
                            className="text-rose-600 group-hover:text-white transition-colors duration-300" 
                          />
                        </div>
                      </div>
                      
                      {/* Label */}
                      <div className="relative z-10 flex-1 text-right">
                        <span className="text-gray-700 group-hover:text-rose-600 font-semibold text-base transition-colors duration-300 block">
                          {item.label}
                        </span>
                      </div>
                      
                      {/* Arrow Indicator */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-rose-100 group-hover:bg-rose-500 flex items-center justify-center transition-all duration-300">
                          <svg 
                            className="w-4 h-4 text-rose-600 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Menu Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white to-transparent border-t border-rose-100">
                <a
                  href="tel:09185227306"
                  className="flex items-center justify-center gap-3 w-full p-4 rounded-2xl bg-gradient-to-l from-rose-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <span>تماس با ما: 09185227306</span>
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

