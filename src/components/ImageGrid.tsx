import React from 'react';

import { INDUSTRY_IMAGES } from '../constants';

const ImageGrid: React.FC = () => {

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 md:px-8 max-w-[1600px] mx-auto w-full">

      {INDUSTRY_IMAGES.map((image) => (

        <div 

          key={image.id} 

          className="group relative overflow-hidden rounded-xl w-full aspect-[2/3] md:aspect-[3/4] lg:aspect-[2/3] bg-gray-100"

        >

          {/* Image */}

          <img

            src={image.src}

            alt={image.alt}

            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"

            loading="lazy"

          />

          

          {/* Subtle overlay gradient often seen in high-end design */}

          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />

        </div>

      ))}

    </div>

  );

};

export default ImageGrid;

