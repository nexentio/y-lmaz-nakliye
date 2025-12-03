import React from 'react';



import { BackgroundPattern } from './BackgroundPattern';

export const QuickFacts: React.FC = () => {

  return (

    <section className="relative w-full bg-white overflow-hidden py-32 lg:py-40">

      {/* Background Layer */}

      <BackgroundPattern />

      {/* Content Container */}

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-12">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start lg:items-center">

          

          {/* Left Column: Heading */}

          <div className="flex-1 max-w-xl">

            {/* Pill Badge */}

            <div className="inline-flex items-center justify-center px-8 py-2 mb-8 border-[4px] border-[#F94006] rounded-full">

              <span className="text-[#1C1817] text-lg font-semibold tracking-wide">

                Quick Facts

              </span>

            </div>

            

            {/* Title */}

            <h2 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-medium text-[#1C1817]">

              Trusted by dozens of Companies across Industries.

            </h2>

          </div>

          {/* Right Column: Stats Grid */}

          <div className="flex-1 w-full">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8">

              

              {/* Stat 1 */}

              <div className="flex flex-col">

                <div className="flex items-baseline text-[#1C1817]">

                  <span className="text-6xl lg:text-7xl font-semibold">98.6</span>

                  <span className="text-6xl lg:text-7xl font-semibold">%</span>

                </div>

                <p className="text-[#1C1817] text-lg mt-2 font-medium">

                  On-Time Delivery Rate.

                </p>

              </div>

              {/* Stat 2 */}

              <div className="flex flex-col">

                 <div className="flex items-baseline text-[#1C1817]">

                  <span className="text-6xl lg:text-7xl font-semibold">24</span>

                  <span className="text-6xl lg:text-7xl font-semibold">/7</span>

                </div>

                <p className="text-[#1C1817] text-lg mt-2 font-medium">

                  GPS Tracking Coverage.

                </p>

              </div>

              {/* Stat 3 */}

              <div className="flex flex-col">

                 <div className="flex items-baseline text-[#1C1817]">

                  <span className="text-6xl lg:text-7xl font-semibold">+</span>

                  <span className="text-6xl lg:text-7xl font-semibold">20</span>

                </div>

                <p className="text-[#1C1817] text-lg mt-2 font-medium">

                  Countries covered daily.

                </p>

              </div>

              {/* Stat 4 */}

              <div className="flex flex-col">

                 <div className="flex items-baseline text-[#1C1817]">

                  <span className="text-6xl lg:text-7xl font-semibold">+</span>

                  <span className="text-6xl lg:text-7xl font-semibold">2.5</span>

                  <span className="text-6xl lg:text-7xl font-semibold">K</span>

                </div>

                <p className="text-[#1C1817] text-lg mt-2 font-medium">

                  Monthly Orders Fullfilled.

                </p>

              </div>

            </div>

          </div>

          

        </div>

      </div>

    </section>

  );

};

