"use client";

import React, { useState, useRef } from 'react';

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

import { HistoryItem } from '../types';

const historyData: HistoryItem[] = [

  {

    year: 2010,

    title: "One Truck. One Dream.",

    description: "LogiNord was founded in a small Rotterdam warehouse with just one vehicle and a clear mission: to offer reliable transport for local businesses with the kind of service larger firms couldn't match.",

    image: "https://framerusercontent.com/images/3DZlCUTBGHadzvzLs3EvBWZH4.jpg"

  },

  {

    year: 2013,

    title: "Expanding Horizons.",

    description: "By 2013, our fleet had grown to ten trucks. We expanded our operations beyond Rotterdam, covering the entire Benelux region and establishing our first dedicated logistics hub.",

    image: "https://picsum.photos/id/106/2400/2400" 

  },

  {

    year: 2017,

    title: "Digital Revolution.",

    description: "We integrated state-of-the-art tracking systems and automated warehousing, reducing delivery times by 40% and setting a new standard for transparency in the logistics sector.",

    image: "https://picsum.photos/id/192/2400/2400"

  },

  {

    year: 2021,

    title: "Going Green.",

    description: "Commitment to sustainability led to the acquisition of our first electric fleet. LogiNord pledged to reduce carbon emissions by 50% within the next five years.",

    image: "https://picsum.photos/id/112/2400/2400"

  },

  {

    year: 2025,

    title: "Global Reach.",

    description: "With a network spanning across Europe, LogiNord is now a key player in international logistics, connecting local businesses to global markets with the same reliability we started with.",

    image: "https://picsum.photos/id/188/2400/2400"

  }

];

const HistorySectionNew: React.FC = () => {

  const [activeYear, setActiveYear] = useState<number>(2010);

  const containerRef = useRef<HTMLDivElement>(null);

  

  // Track scroll progress within the container

  const { scrollYProgress } = useScroll({

    target: containerRef,

    offset: ["start start", "end end"]

  });

  // Update active year based on scroll position

  useMotionValueEvent(scrollYProgress, "change", (latest) => {

    // Divide scroll into segments based on number of items

    const segmentLength = 1 / historyData.length;

    const index = Math.min(

      Math.floor(latest / segmentLength),

      historyData.length - 1

    );

    

    // Only update if changed to prevent unnecessary re-renders

    const newYear = historyData[index].year;

    if (newYear !== activeYear) {

      setActiveYear(newYear);

    }

  });

  const activeContent = historyData.find(item => item.year === activeYear) || historyData[0];

  return (

    // Outer container defines the scrollable height (e.g., 500vh for scroll distance)

    <div ref={containerRef} className="relative h-[500vh]">

      

      {/* Sticky container holds the view in place while scrolling */}

      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden px-4 md:px-12">

        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

          

          {/* Left Column: Title & Timeline */}

          <div className="lg:col-span-5 flex flex-col pt-4 relative z-10">

            <h2 className="text-[56px] leading-tight font-medium text-[#1C1817] mb-24 tracking-tight">

              Our History

            </h2>

            <div className="relative flex flex-col items-end w-full pr-8">

              {historyData.map((item) => {

                const isActive = activeYear === item.year;

                

                return (

                  <div 

                    key={item.year} 

                    className="relative flex items-center justify-end w-full h-[50px] mb-2 transition-colors duration-300"

                  >

                    

                    {/* The "YEAR" Indicator Line - Only visible for active item */}

                    {isActive && (

                      <motion.div 

                        layoutId="activeIndicator"

                        className="absolute right-[120px] md:right-[160px] flex items-center"

                        initial={{ opacity: 0, x: -20 }}

                        animate={{ opacity: 1, x: 0 }}

                        transition={{ duration: 0.4, ease: "easeOut" }}

                      >

                        <div className="flex items-center gap-4">

                            <div className="flex items-center gap-2">

                              <div className="w-3 h-3 rounded-full border-[3px] border-[#F94006] bg-transparent box-border" />

                              <span className="text-[11px] font-bold uppercase tracking-widest text-[#1C1817]">Year</span>

                            </div>

                            {/* The Horizontal Line */}

                            <div className="h-[2px] bg-[#F94006] w-[80px] md:w-[140px] rounded-full opacity-60" />

                        </div>

                      </motion.div>

                    )}

                    {/* Year Number */}

                    <div 

                      className={`transition-all duration-500 ease-in-out origin-right text-right

                        ${isActive 

                          ? 'text-[52px] font-medium text-[#1C1817] opacity-100' 

                          : 'text-[42px] font-medium text-[#1C1817] opacity-20 scale-90'

                        }`}

                      style={{ lineHeight: 1 }}

                    >

                      {item.year}

                    </div>

                  </div>

                );

              })}

            </div>

          </div>

          {/* Right Column: Content */}

          <div className="lg:col-span-7 flex flex-col pt-12 lg:pt-[160px]">

            <AnimatePresence mode='wait'>

              <motion.div

                key={activeYear}

                initial={{ opacity: 0, y: 30 }}

                animate={{ opacity: 1, y: 0 }}

                exit={{ opacity: 0, y: -30 }}

                transition={{ duration: 0.5, ease: "easeOut" }}

              >

                {/* Text Content */}

                <div className="mb-12 max-w-xl">

                  <h3 className="text-[40px] leading-[1.1] font-medium text-[#1C1817] mb-6 tracking-tight">

                    {activeContent.title.split('. ').map((part, i) => (

                        <span key={i} className="block">{part}{i === 0 ? '.' : ''}</span>

                    ))}

                  </h3>

                  <p className="text-xl leading-relaxed text-[#1C1817] font-normal opacity-90">

                    {activeContent.description}

                  </p>

                </div>

                {/* Image */}

                <div className="w-[85%] mt-16 relative aspect-[16/10] overflow-hidden rounded-lg bg-gray-200 shadow-xl">

                  <img 

                    src={activeContent.image} 

                    alt={`LogiNord history ${activeYear}`}

                    className="w-full h-full object-cover grayscale sepia-[.15]"

                  />

                  {/* Overlay LOGO text on the building wall - purely decorative to match the specific image provided */}

                  {activeYear === 2010 && (

                    <div className="absolute top-[10%] right-[10%] opacity-70 pointer-events-none mix-blend-multiply">

                        <span className="font-sans font-bold text-[#5c4d46] text-4xl tracking-tighter">LogiNord</span>

                        <span className="align-top text-xs ml-1">↗</span>

                    </div>

                  )}

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

        </div>

      </div>

    </div>

  );

};

export default HistorySectionNew;
