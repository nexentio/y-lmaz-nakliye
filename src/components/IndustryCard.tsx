import React from 'react';



import { Industry } from '../types';

interface IndustryCardProps {

  industry: Industry;

}

export const IndustryCard: React.FC<IndustryCardProps> = ({ industry }) => {

  return (

    <div className="group w-full rounded-lg bg-brand-card p-6 md:p-8 transition-transform duration-300 hover:scale-[1.01]">

      <div className="aspect-[3/2] w-full overflow-hidden rounded-lg bg-brand-orange/10 mb-6 relative">

        <div className="absolute inset-0 bg-brand-orange/20 mix-blend-overlay z-10 transition-opacity duration-300 group-hover:opacity-0"></div>

        <img 

            src={industry.imageUrl} 

            alt={industry.alt}

            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"

            loading="lazy"

        />

      </div>

      <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">

        {industry.title}

      </h3>

    </div>

  );

};

