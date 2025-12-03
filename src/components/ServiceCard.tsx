import React from 'react';



import { ServiceItem } from '../types';

interface ServiceCardProps {

  item: ServiceItem;

}

const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {

  return (

    <div className="flex flex-col gap-6 w-full group">

      {/* Header Section: Number and Title */}

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 border-t border-transparent pt-4">

        <div className="flex items-center gap-3">

           {/* The orange circle indicator */}

          <div className="w-2.5 h-2.5 rounded-full border-2 border-[#F94006] bg-transparent shrink-0"></div>

          <span className="text-sm font-medium tracking-wide text-[#1C1817]">{item.number}</span>

        </div>

        

        <h3 className="text-2xl sm:text-3xl font-medium text-[#1C1817]">

          {item.title}

        </h3>

      </div>

      {/* Image Section */}

      <div className="relative w-full overflow-hidden rounded-lg bg-gray-100 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[3/2]">

        <img

          src={item.imageUrl}

          alt={item.alt}

          loading="lazy"

          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"

        />

        {/* Orange Overlay Frame/Effect mimic from Framer if desired, strictly mimicking the clean image look here */}

        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-lg pointer-events-none" />

      </div>

    </div>

  );

};

export default ServiceCard;

