import React from 'react';



const ArrowIcon = () => (

  <svg 

    viewBox="0 0 160 160" 

    className="w-full h-full text-brand-orange opacity-20"

    style={{ transform: 'rotate(90deg)' }}

  >

    <path 

      d="M 20 70 L 20 10 C 20 4.474 15.524 0 10 0 C 4.474 0 0 4.474 0 10 L 0 150 C 0 155.524 4.474 160 10 160 C 15.524 160 20 155.524 20 150 L 20 90 L 135.85 90 L 82.926 142.924 C 79.026 146.824 79.026 153.15 82.926 157.076 C 84.8 158.955 87.346 160.007 90 160 C 92.654 160.008 95.201 158.955 97.076 157.076 L 150 104.15 C 156.45 97.7 160 89.126 160 80 C 160 70.874 156.45 62.3 150 55.85 L 97.076 2.926 C 93.176 -0.974 86.826 -0.974 82.924 2.926 C 79.024 6.826 79.024 13.176 82.924 17.076 L 135.851 70 Z" 

      fill="currentColor"

    />

  </svg>

);

export const TickerBackground: React.FC = () => {

  // Create an array of items to loop

  const items = Array.from({ length: 20 });

  return (

    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">

        {/* Background Image Layer */}

        <div className="absolute inset-0 z-0">

             <img 

                src="/arkaplan-depo-lojistik-ticker.jpg" 

                alt="Background Warehouse" 

                className="w-full h-full object-cover opacity-20 mix-blend-overlay"

            />

            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/80 to-brand-dark/95"></div>

        </div>

        {/* Ticker Layer - Positioned to the left */}

        <div className="absolute left-2 md:left-8 top-0 bottom-0 w-[60px] md:w-[100px] overflow-hidden h-full flex flex-col items-center opacity-30">

            <div className="w-full flex flex-col gap-0 animate-ticker">

                {/* We double the list for seamless loop */}

                {[...items, ...items].map((_, i) => (

                    <div key={i} className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] flex-shrink-0 p-3 md:p-4">

                        <ArrowIcon />

                    </div>

                ))}

            </div>

        </div>

    </div>

  );

};

