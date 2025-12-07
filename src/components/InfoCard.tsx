"use client";

import React, { useState, useEffect } from 'react';



import { LocationData } from '../types';

interface InfoCardProps {

  location: LocationData;

}

export const InfoCard: React.FC<InfoCardProps> = ({ location }) => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const checkMobile = () => {

      setIsMobile(window.innerWidth < 640);

    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);

  }, []);

  return (

    <div 

      className="absolute z-20 w-[260px] sm:w-[280px] md:w-[320px] bg-white rounded-xl shadow-[0_0_25px_-5px_rgba(0,0,0,0.15)] p-2.5 sm:p-3 animate-in fade-in slide-in-from-bottom-2 duration-500"

      style={{

        top: 'calc(100% + 12px)', // Position below the pin with some gap

        left: '50%',

        transform: isMobile ? 'translateX(-50%)' : 'translateX(-15%)', // Center on mobile, offset on desktop

      }}

    >

      {/* Pointer triangle (optional, design doesn't show it explicitly but helps UX) */}

      {/* <div className="absolute -top-2 left-[15%] w-4 h-4 bg-white transform rotate-45" /> */}

      <div className="flex flex-col gap-2 sm:gap-3">

        {/* Image */}

        <div className="w-full h-24 sm:h-28 md:h-32 rounded-lg overflow-hidden relative bg-stone-100">

           {location.image ? (

             <img 

               src={location.image} 

               alt={location.title}

               className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"

             />

           ) : (

             <div className="w-full h-full flex items-center justify-center text-stone-300">

               No Image

             </div>

           )}

        </div>

        {/* Text Content */}

        <div className="flex flex-col gap-0.5 sm:gap-1">

          <h3 className="text-sm sm:text-[15px] font-semibold text-stone-900 leading-tight">

            {location.city}, {location.country}

          </h3>

          <h4 className="text-xs sm:text-[13px] text-stone-500 font-normal mb-1 sm:mb-2">

            {location.title}

          </h4>

          <p className="text-[11px] sm:text-[12px] md:text-[13px] text-stone-600 leading-relaxed font-light">

            {location.description}

          </p>

        </div>

      </div>

    </div>

  );

};

