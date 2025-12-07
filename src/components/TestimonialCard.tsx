import React from 'react';

import { Testimonial } from '../types';



interface TestimonialCardProps {

  data: Testimonial;

}



const TestimonialCard: React.FC<TestimonialCardProps> = ({ data }) => {

  return (

    <div className="flex flex-col h-full p-6 bg-white border border-stone-250 rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300">

      {/* Quote Text */}

      <div className="flex-1 mb-8">

        <p className="text-[15px] leading-relaxed text-stone-850 font-normal">

          {data.quote}

        </p>

      </div>



      {/* Profile Section */}

      <div className="flex items-center gap-3">

        <div className="relative w-10 h-10 flex-shrink-0 overflow-hidden rounded-lg bg-white flex items-center justify-center p-1.5">

          <img

            src={data.image || '/google-logo.png'}

            alt={data.name}

            className="w-full h-full object-contain"

            loading="lazy"

          />

        </div>

        <div className="flex flex-col">

          <span className="text-sm font-semibold text-stone-900 leading-tight">

            {data.name}

          </span>

          <span className="text-[13px] text-stone-500 leading-tight mt-0.5">

            {data.company}

          </span>

        </div>

      </div>

    </div>

  );

};



export default TestimonialCard;

