'use client';

import React from 'react';

export const PhoneButton: React.FC = () => {
  return (
    <a
      href="tel:+905457175150"
      className="fixed bottom-32 right-6 z-50 group"
      aria-label="Bizi Arayın"
    >
      {/* Main Button */}
      <div className="relative">
        {/* Pulse Animation Background */}
        <div className="absolute inset-0 bg-[#F94006] rounded-full animate-ping opacity-75"></div>
        
        {/* Button */}
        <div className="relative bg-[#F94006] hover:bg-[#E03800] rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group-hover:rotate-12">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-[#1C1817] text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
            Bizi Arayın: 0545 717 5150
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#1C1817]"></div>
          </div>
        </div>
      </div>
    </a>
  );
};

