import React from 'react';



import { PROCESS_STEPS } from '../constants';

export const ProcessSection: React.FC = () => {

  return (

    <section className="w-full py-20 px-4 md:px-8 overflow-hidden bg-white">

      <div className="max-w-7xl mx-auto">

        {/* Header Section */}

        <div className="text-center mb-16 md:mb-24">

          <p className="text-xs md:text-[11px] font-semibold tracking-widest text-dark uppercase mb-4">

            How It Works

          </p>

          <h2 className="text-4xl md:text-[56px] font-medium tracking-tight text-dark">

            The Process

          </h2>

        </div>

        {/* Timeline Container */}

        <div className="relative w-full max-w-5xl mx-auto">

          {/* Central Dashed Line - Hidden on small mobile, visible on md+ */}

          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 border-l border-dashed border-gray-300 transform md:-translate-x-[0.5px]"></div>

          <div className="space-y-12 md:space-y-24">

            {PROCESS_STEPS.map((step, index) => {

              const isEven = (index + 1) % 2 === 0;

              // Even items (2, 4) go to Left side on desktop

              // Odd items (1, 3, 5) go to Right side on desktop

              

              return (

                <div 

                  key={step.id} 

                  className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${

                    isEven ? 'md:flex-row-reverse' : ''

                  }`}

                >

                  

                  {/* Empty Spacer Column for Desktop grid layout */}

                  <div className="hidden md:block md:w-1/2" />

                  {/* Marker (Circle) - Positioned absolutely center on desktop */}

                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10 bg-white py-2 md:py-4">

                     {/* The dot itself doesn't need to be here if we integrate it into the content, 

                         but strictly following the visual, the gap is clean. 

                         However, looking closely at the design, the marker (ring + number) 

                         is actually part of the content block, aligned close to the center. 

                         Let's handle that in the content block below. */}

                  </div>

                  {/* Content Block */}

                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${

                    isEven 

                      ? 'md:pr-12 md:text-right' 

                      : 'md:pl-12 md:text-left'

                  }`}>

                    <div className={`flex flex-col gap-2 ${

                      isEven ? 'md:items-end' : 'md:items-start'

                    }`}>

                      

                      {/* Tag: Icon + Number */}

                      <div className={`flex items-center gap-3 mb-2 ${

                        isEven ? 'flex-row-reverse' : 'flex-row'

                      }`}>

                         {/* The Orange Ring */}

                        <div className="w-3.5 h-3.5 rounded-full border-[3px] border-orange bg-white shrink-0"></div>

                        

                        {/* The Number */}

                        <span className="text-sm font-medium text-dark tracking-wide">

                          {step.number}

                        </span>

                      </div>

                      {/* Title */}

                      <h3 className="text-2xl md:text-[32px] font-medium text-dark leading-tight">

                        {step.title}

                      </h3>

                      {/* Description */}

                      <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-sm">

                        {step.description}

                      </p>

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </section>

  );

};

