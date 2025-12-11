import React from 'react';

import { ArrowIcon } from './ArrowIcon';

export const StatsSection: React.FC = () => {

  return (

    <section className="w-full relative overflow-hidden py-20 lg:py-32 bg-white">

      

      {/* Animated Marquee Background */}

      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full opacity-100 pointer-events-none select-none z-0">

        <div className="flex whitespace-nowrap animate-marquee w-fit">

          {[...Array(2)].map((_, groupIndex) => (

            <div key={groupIndex} className="flex shrink-0">

              {[...Array(12)].map((_, i) => (

                <div key={i} className="flex shrink-0 items-center justify-center w-[200px] sm:w-[300px]">

                  <ArrowIcon className="w-32 h-32 sm:w-48 sm:h-48 text-[#1C1817] opacity-[0.04]" />

                </div>

              ))}

            </div>

          ))}

        </div>

      </div>



      {/* Content Container */}

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start">

          

          {/* Left Column: Heading */}

          <div className="flex flex-col items-start gap-6 max-w-lg">

             {/* Tag */}

             <div className="flex items-center gap-2.5">

               <div className="w-[10px] h-[10px] rounded-full border-[3px] border-accent" aria-hidden="true" />

               <span className="text-[11px] font-bold tracking-[0.08em] text-[#1C1817] uppercase leading-none">

                 Rakamlarla

               </span>

             </div>

             

             {/* Heading */}

             <h2 className="text-3xl sm:text-4xl md:text-5xl leading-[1.1] font-medium tracking-[-0.02em] text-[#1C1817]">

               Türkiye genelinde hizmet veren güvenilir araç filomuz.

             </h2>

          </div>



          {/* Right Column: Stats Grid */}

          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:gap-x-12 sm:gap-y-16 pl-0 lg:pl-12">

             {/* Stat 1 */}

             <div className="flex flex-col gap-2">

               <span className="font-semibold text-5xl sm:text-[64px] text-[#1C1817] leading-none tracking-tight">

                 15+

               </span>

               <p className="text-base sm:text-lg text-[#1C1817] opacity-90 leading-tight">

                 Toplam Araç.

               </p>

             </div>



             {/* Stat 2 */}

             <div className="flex flex-col gap-2">

               <span className="font-semibold text-5xl sm:text-[64px] text-[#1C1817] leading-none tracking-tight">

                 2+

               </span>

               <p className="text-base sm:text-lg text-[#1C1817] opacity-90 leading-tight">

                 Ağır Yük Kamyonetleri.

               </p>

             </div>



             {/* Stat 3 */}

             <div className="flex flex-col gap-2">

               <span className="font-semibold text-5xl sm:text-[64px] text-[#1C1817] leading-none tracking-tight">

                 5+

               </span>

               <p className="text-base sm:text-lg text-[#1C1817] opacity-90 leading-tight">

                 Ford Transit ve Şehir İçi Araçlar.

               </p>

             </div>



             {/* Stat 4 */}

             <div className="flex flex-col gap-2">

               <span className="font-semibold text-5xl sm:text-[64px] text-[#1C1817] leading-none tracking-tight">

                 3+

               </span>

               <p className="text-base sm:text-lg text-[#1C1817] opacity-90 leading-tight">

                 2+1 ve 3+1 Ev Taşıma Araçları.

               </p>

             </div>

          </div>



        </div>

      </div>



    </section>

  );

};

