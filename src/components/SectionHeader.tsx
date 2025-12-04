import React from 'react';

import { TEXT_CONTENT } from '../constants';

const SectionHeader: React.FC = () => {

  return (

    <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4 mb-12 lg:mb-16">

      {/* Badge / Tag Area */}

      <div className="flex items-center gap-2 mb-6 opacity-90">

        <div className="w-3 h-3 rounded-full border-[3px] border-[#F94006]"></div>

        <span className="text-xs font-bold tracking-widest text-gray-500 bg-gray-100/50 px-1 uppercase">

          {TEXT_CONTENT.tag}

        </span>

      </div>

      {/* Main Title */}

      <h1 className="text-4xl md:text-5xl lg:text-7xl text-[#1C1817] leading-tight mb-6">

        <span className="font-sans font-normal tracking-tight">{TEXT_CONTENT.titlePrefix} </span>

        {/* The design uses a serif font specifically for "Industry." */}

        <span className="font-serif font-normal">{TEXT_CONTENT.titleSuffix}</span>

      </h1>

      {/* Subtitle / Description */}

      <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl font-light">

        {TEXT_CONTENT.description}

      </p>

    </div>

  );

};

export default SectionHeader;

export { SectionHeader };
