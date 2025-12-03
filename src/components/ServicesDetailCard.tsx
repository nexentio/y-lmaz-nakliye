import React from 'react';



import { ServiceData } from '../types';

interface ServiceCardProps {

  data: ServiceData;

}

export const ServiceCard: React.FC<ServiceCardProps> = ({ data }) => {

  return (

    <div className="flex flex-col gap-8 py-12 lg:py-24 border-t border-white/10 first:border-t-0">

      {/* Header: ID and Title */}

      <div className="flex flex-col gap-4">

        <div className="flex items-center gap-3">

            {/* The orange decorative ring/dot */}

            <div className="w-3 h-3 rounded-full border-2 border-[#f94006]"></div>

            <span className="text-white font-medium text-sm tracking-widest">{data.id}</span>

        </div>

        <h2 className="text-3xl lg:text-4xl font-semibold text-white">

            {data.title}

        </h2>

      </div>

      {/* Image */}

      <div className="w-full aspect-[4/3] overflow-hidden rounded-lg relative bg-gray-900">

        {/* Orange accent line/background peeking through (simulated via border or pseudo element if needed, but clean image is safer) */}

        <img 

            src={data.image} 

            alt={data.title}

            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out opacity-90 hover:opacity-100"

            loading="lazy"

        />

      </div>

      {/* Description & Features */}

      <div className="flex flex-col gap-8">

        <p className="text-lg text-gray-300 leading-relaxed">

            {data.description}

        </p>

        <div className="space-y-6">

            {data.features.map((feature, idx) => (

                <div key={idx} className="flex flex-col gap-1">

                    <span className="text-white font-bold text-base">

                        {feature.title}

                    </span>

                    <span className="text-gray-400 text-base leading-relaxed">

                        {feature.description}

                    </span>

                </div>

            ))}

        </div>

      </div>

    </div>

  );

};

