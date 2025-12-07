import React from 'react';

import { Testimonial } from '../types';

interface TestimonialCardProps {

  data: Testimonial;

}

export const IndustriesTestimonialCard: React.FC<TestimonialCardProps> = ({ data }) => {

  return (

    <div className="bg-white p-6 md:p-8 rounded-lg border border-[#E7E5E4] flex flex-col justify-between h-full transition-shadow duration-300 hover:shadow-sm">

      <div className="mb-6">

        <p className="text-[#1C1817] text-[17px] md:text-[18px] leading-relaxed font-normal">

          {data.quote}

        </p>

      </div>

      

      <div className="flex items-center gap-4">

        <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-white flex items-center justify-center p-2">

          <img 

            src={data.avatarUrl || data.image || '/google-logo.png'} 

            alt={data.name} 

            className="w-full h-full object-contain"

            loading="lazy"

          />

        </div>

        <div className="flex flex-col">

          <span className="text-[#1C1817] font-semibold text-[15px] leading-tight">

            {data.name}

          </span>

          <span className="text-[#1C1817] text-[14px] leading-tight opacity-80 mt-1">

            {data.company}

          </span>

        </div>

      </div>

    </div>

  );

};

export default IndustriesTestimonialCard;

