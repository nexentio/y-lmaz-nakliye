import React from 'react';



import { SECTION_TAG, SECTION_TITLE, FEATURES } from '../constants';

export const FeaturesSection: React.FC = () => {

  return (

    <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-[#F5F5F5]">

      {/* Background Image - Grayscaled to remove blue tints as requested */}

      <div className="absolute inset-0 z-0">

        <div className="absolute inset-0 bg-[#F5F5F5] opacity-90 lg:opacity-60 z-10 mix-blend-overlay pointer-events-none" />

        <img

          src="https://framerusercontent.com/images/RWfhGa3bv1AiOKKGCnBsOVGJcDE.webp?width=2400&height=3600"

          alt="Logistics background"

          className="w-full h-full object-cover grayscale opacity-40 lg:opacity-60"

        />

        {/* Gradient mask to fade image into background color on the right/bottom */}

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F5F5F5]/60 to-[#F5F5F5] z-10" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F5F5F5] z-10" />

      </div>

      {/* Content Container */}

      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          

          {/* Left Column: Header */}

          <div className="flex flex-col space-y-5 lg:sticky lg:top-32 h-fit">

            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#1C1817] leading-none">

              {SECTION_TAG}

            </p>

            <h2 className="text-[42px] leading-[1.1] md:text-[52px] md:leading-[1.1] font-normal text-[#1C1817] tracking-[-0.02em]">

              {SECTION_TITLE}

            </h2>

          </div>

          {/* Right Column: Features List */}

          {/* Added top margin to stagger the list relative to the title as per design */}

          <div className="flex flex-col space-y-12 lg:space-y-[68px] lg:mt-32">

            {FEATURES.map((feature) => (

              <div key={feature.id} className="group flex gap-6 md:gap-9 items-start">

                {/* Icon */}

                <div className="flex-shrink-0 w-8 h-8 mt-1">

                  <img 

                    src={feature.icon} 

                    alt="" 

                    className="w-full h-full object-contain"

                  />

                </div>

                

                {/* Text Content */}

                <div className="flex flex-col space-y-2">

                  <h3 className="text-lg font-medium text-[#1C1817]">

                    {feature.title}

                  </h3>

                  <p className="text-[15px] leading-[1.6] text-[#1C1817] opacity-80 max-w-[380px]">

                    {feature.description}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

};

