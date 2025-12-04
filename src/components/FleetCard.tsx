import React from 'react';

interface CardProps {

  type: 'icon' | 'image' | 'video';

  title: string;

  description: string;

  imageSrc?: string;

  icon?: React.ReactNode;

  bgColor?: string; // For the icon background

  className?: string;

}

const FleetCard: React.FC<CardProps> = ({ type, title, description, imageSrc, icon, bgColor = 'bg-[#ffe4e6]', className = '' }) => {

  return (

    <div className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full ${className}`}>

      {/* Media Container */}

      <div className={`relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden ${type === 'icon' ? bgColor : ''}`}>

        

        {type === 'image' && imageSrc && (

          <img 

            src={imageSrc} 

            alt={title} 

            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"

          />

        )}

        {type === 'video' && imageSrc && (

            <div className="w-full h-full relative">

                 <img 

                    src={imageSrc} 

                    alt={title} 

                    className="w-full h-full object-cover"

                />

                 {/* Simulate video overlay/badge if needed, for now using image as placeholder for video */}

                 <div className="absolute inset-0 bg-black/10"></div>

            </div>

        )}

        {type === 'icon' && (

          <div className="w-full h-full flex items-center justify-center p-8">

            <div className="transform hover:scale-110 transition-transform duration-300">

                {icon}

            </div>

          </div>

        )}

      </div>

      {/* Content */}

      <div className="p-6 text-center flex-grow flex flex-col justify-center">

        <h3 className="text-lg font-bold text-[#1c1817] mb-2">{title}</h3>

        <p className="text-sm text-gray-600 leading-relaxed px-2">{description}</p>

      </div>

    </div>

  );

};

export default FleetCard;

