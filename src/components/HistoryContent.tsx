import React from 'react';



import { HistoryEvent } from '../types';

interface HistoryContentProps {

  data: HistoryEvent;

}

export const HistoryContent: React.FC<HistoryContentProps> = ({ data }) => {

  return (

    <div className="flex flex-col w-full animate-fade-in group">

      <div className="mb-8 md:mb-12 transition-all duration-700 delay-100 ease-out transform translate-y-0 group-hover:-translate-y-1">

        <h3 className="text-3xl md:text-[40px] font-medium text-brand-black leading-[1.15] mb-6 whitespace-pre-line tracking-tight">

          {data.title}

        </h3>

        <p className="text-base md:text-lg text-brand-black leading-relaxed max-w-xl font-normal">

          {data.description}

        </p>

      </div>

      

      <div className="relative w-full overflow-hidden rounded-lg aspect-[1/1] md:aspect-[1.4/1] bg-brand-gray/20">

        {/* Overlays from design */}

        <div className="absolute inset-0 bg-brand-orange/10 mix-blend-multiply z-10 pointer-events-none" />

        <div className="absolute inset-0 bg-[#3a302c]/20 z-10 pointer-events-none" />

        

        {/* Frame/Border effect from design (Optional but present in HTML structure) */}

        <div className="absolute inset-0 border-[0px] border-brand-orange/0 z-20 pointer-events-none rounded-lg" />

        <img 

          src={data.image} 

          alt={data.title}

          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"

          loading="lazy"

        />

      </div>

    </div>

  );

};

