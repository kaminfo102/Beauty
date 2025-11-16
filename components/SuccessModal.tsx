'use client';

import { CheckCircle, X } from 'lucide-react';
import { useEffect } from 'react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
          aria-label="بستن"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Animated Check Icon */}
          <div className="relative">
            {/* Outer Circle Animation */}
            <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-75"></div>
            <div className="absolute inset-0 bg-green-200 rounded-full animate-pulse"></div>
            
            {/* Icon Container */}
            <div className="relative w-28 h-28 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg transform scale-0 animate-scale-in">
              <CheckCircle 
                size={64} 
                className="text-white"
                strokeWidth={3}
                fill="currentColor"
              />
            </div>
          </div>

          {/* Success Message */}
          <div className="text-center space-y-3">
            <h3 className="text-2xl font-bold text-gray-900">
              درخواست شما با موفقیت ثبت شد
            </h3>
            <p className="text-gray-600 text-lg">
              به زودی با شما تماس خواهیم گرفت
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="mt-4 w-full bg-gradient-to-l from-rose-600 to-pink-600 text-white py-3 rounded-xl font-bold hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            بستن
          </button>
        </div>
      </div>
    </div>
  );
}
