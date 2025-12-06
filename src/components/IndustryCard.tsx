import React from 'react';

import { IndustryData, Industry } from '../types';

interface IndustryCardProps {

  data?: IndustryData;

  industry?: Industry;

}

const IndustryCard: React.FC<IndustryCardProps> = ({ data, industry }) => {

  // Support both IndustryData (from industries page) and Industry (from home page)

  const cardData = data || (industry ? {

    title: industry.title,

    description: '',

    imageUrl: industry.imageUrl,

    features: []

  } : null);

  if (!cardData) return null;

  return (

    <div className="bg-white rounded-lg p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-300">

      {/* Header */}

      <div className="flex items-start gap-3 mb-2">

        <div className="mt-1.5 min-w-[12px] w-3 h-3 rounded-full border-[3px] border-[#F94006]" aria-hidden="true" />

        <h3 className="text-xl font-semibold text-[#1C1817] leading-tight">

          {cardData.title}

        </h3>

      </div>

      

      {/* Description - only show if exists */}

      {cardData.description && (

        <p className="text-[#1C1817] mb-6 text-base leading-relaxed text-gray-700">

          {cardData.description}

        </p>

      )}

      {/* Image */}

      <div className="w-full aspect-[3/2] mb-6 overflow-hidden rounded-lg bg-gray-100">

        <img 

          src={cardData.imageUrl} 

          alt={`Yılmaz Nakliyat ${cardData.title} - Profesyonel Taşımacılık Hizmetleri`} 

          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"

          loading="lazy"

        />

      </div>

      {/* Feature List - only show if features exist */}

      {cardData.features && cardData.features.length > 0 && (

        <ul className="space-y-3 mt-auto">

          {cardData.features.map((feature, index) => (

          <li key={index} className="flex items-start gap-3 text-sm font-medium text-[#1C1817]">

            <span className="text-[#1C1817] font-bold mt-[-4px] text-lg leading-none select-none">•</span>

            <span className="leading-snug">{feature}</span>

          </li>

        ))}

        </ul>

      )}

    </div>

  );

};

export default IndustryCard;

export { IndustryCard };
