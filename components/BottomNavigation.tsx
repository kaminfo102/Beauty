'use client';

import { Home, Sparkles, Users, Images, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { id: 'home', label: 'خانه', icon: Home },
  { id: 'services', label: 'خدمات', icon: Sparkles },
  { id: 'about', label: 'درباره', icon: Users },
  { id: 'gallery', label: 'گالری', icon: Images },
  { id: 'contact', label: 'تماس', icon: MessageCircle },
];

export default function BottomNavigation() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Background with blur */}
      <div className="absolute inset-0 bg-white/95 backdrop-blur-xl border-t border-rose-100 shadow-2xl"></div>
      
      {/* Navigation Items */}
      <div className="relative flex items-center justify-around px-2 py-2 safe-area-bottom">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-2xl transition-all duration-300 relative group min-w-[60px]"
            >
              {/* Active Indicator Background */}
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl opacity-50"></div>
              )}
              
              {/* Icon Container */}
              <div className={`relative z-10 transition-all duration-300 ${
                isActive 
                  ? 'transform scale-110' 
                  : 'group-active:scale-95'
              }`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-br from-rose-500 to-pink-500 shadow-lg shadow-rose-500/30'
                    : 'bg-rose-50 group-hover:bg-rose-100'
                }`}>
                  <Icon 
                    size={20} 
                    className={`transition-all duration-300 ${
                      isActive 
                        ? 'text-white scale-110' 
                        : 'text-rose-600 group-hover:text-rose-700'
                    }`}
                  />
                </div>
              </div>
              
              {/* Label */}
              <span className={`text-xs font-medium transition-all duration-300 relative z-10 ${
                isActive 
                  ? 'text-rose-600 font-semibold scale-105' 
                  : 'text-gray-600 group-hover:text-rose-600'
              }`}>
                {item.label}
              </span>
              
              {/* Active Dot Indicator */}
              {isActive && (
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-rose-500 rounded-full"></div>
              )}
            </button>
          );
        })}
      </div>
      
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent"></div>
    </nav>
  );
}

