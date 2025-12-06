import React from 'react';

import { Industry } from '../types';

interface IndustryCardHomeProps {

  industry: Industry;

}

export const IndustryCardHome: React.FC<IndustryCardHomeProps> = ({ industry }) => {

  return (

    <div className="group relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[3/2] overflow-hidden rounded-lg bg-gray-900">

      {/* Image */}

      <img 

        src={industry.imageUrl} 

        alt={industry.alt ? `Yılmaz Nakliyat ${industry.alt}` : `Yılmaz Nakliyat ${industry.title} - Profesyonel Taşımacılık`} 

        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"

        loading="lazy"

      />

      

      {/* Overlay Gradient */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

      

      {/* Content */}

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">

        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2">

          {industry.title}

        </h3>

      </div>

    </div>

  );

};

export default IndustryCardHome;

