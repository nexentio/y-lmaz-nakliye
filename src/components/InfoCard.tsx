import React from 'react';



import { LocationData } from '../types';

interface InfoCardProps {

  location: LocationData;

}

export const InfoCard: React.FC<InfoCardProps> = ({ location }) => {

  return (

    <div 

      className="absolute z-20 w-[280px] md:w-[320px] bg-white rounded-xl shadow-[0_0_25px_-5px_rgba(0,0,0,0.15)] p-3 animate-in fade-in slide-in-from-bottom-2 duration-500"

      style={{

        top: 'calc(100% + 16px)', // Position below the pin with some gap

        left: '50%',

        transform: 'translateX(-15%)', // Slight offset to match design where card is not perfectly centered

      }}

    >

      {/* Pointer triangle (optional, design doesn't show it explicitly but helps UX) */}

      {/* <div className="absolute -top-2 left-[15%] w-4 h-4 bg-white transform rotate-45" /> */}

      <div className="flex flex-col gap-3">

        {/* Image */}

        <div className="w-full h-32 rounded-lg overflow-hidden relative bg-stone-100">

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

        <div className="flex flex-col gap-1">

          <h3 className="text-[15px] font-semibold text-stone-900 leading-tight">

            {location.city}, {location.country}

          </h3>

          <h4 className="text-[13px] text-stone-500 font-normal mb-2">

            {location.title}

          </h4>

          <p className="text-[13px] text-stone-600 leading-relaxed font-light">

            {location.description}

          </p>

        </div>

      </div>

    </div>

  );

};

