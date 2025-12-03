"use client";

import React, { useState, useEffect, useRef } from 'react';



import { HISTORY_DATA } from '../constants';

import { TimelineYear } from './TimelineYear';

import { HistoryContent } from './HistoryContent';

export default function HistorySection() {

  const [activeYear, setActiveYear] = useState<string>(HISTORY_DATA[0].year);

  const observerRef = useRef<IntersectionObserver | null>(null);

  // Initialize Intersection Observer to track scroll position

  useEffect(() => {

    const options = {

      root: null,

      rootMargin: '-45% 0px -45% 0px', // Trigger when the element is in the middle of the screen

      threshold: 0

    };

    observerRef.current = new IntersectionObserver((entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          const year = entry.target.getAttribute('data-year');

          if (year) {

            setActiveYear(year);

          }

        }

      });

    }, options);

    // Observe all history sections

    HISTORY_DATA.forEach((item) => {

      const element = document.getElementById(`year-${item.year}`);

      if (element && observerRef.current) {

        observerRef.current.observe(element);

      }

    });

    return () => {

      if (observerRef.current) {

        observerRef.current.disconnect();

      }

    };

  }, []);

  const scrollToYear = (year: string) => {

    const element = document.getElementById(`year-${year}`);

    if (element) {

      element.scrollIntoView({ behavior: 'smooth', block: 'center' });

    }

  };

  const activeIndex = HISTORY_DATA.findIndex(d => d.year === activeYear);

  return (

    <main className="min-h-screen w-full bg-brand-bg relative">

      <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 py-12 md:py-24">

        

        {/* Page Title */}

        <h1 className="text-4xl md:text-[64px] font-medium text-brand-black mb-16 md:mb-32 tracking-tight leading-tight">

          Our History

        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          

          {/* Left Column: Sticky Navigation */}

          <div className="lg:col-span-4 relative hidden lg:block">

            <div className="sticky top-1/3 transform -translate-y-12">

              <div className="flex flex-row items-start">

                

                {/* Visual Indicator Line (Matches Design) */}

                <div className="flex flex-1 items-center mr-12 translate-y-[14px]">

                  {/* Orange Circle Mark */}

                  <div className="relative w-[18px] h-[18px] border-[4px] border-brand-orange rounded-full flex-shrink-0" />

                  

                  {/* YEAR Text */}

                  <span className="mx-4 text-[13px] font-bold uppercase tracking-widest text-brand-black/80">

                    Year

                  </span>

                  

                  {/* Connecting Line */}

                  <div className="h-[2px] bg-[#706866] flex-grow rounded-full w-full opacity-60" />

                </div>

                {/* Year List */}

                <div className="flex flex-col w-auto min-w-[100px]">

                  {HISTORY_DATA.map((item, index) => {

                    const isSelected = item.year === activeYear;

                    const distance = Math.abs(activeIndex - index);

                    

                    // Specific opacity logic based on provided HTML design values

                    // 1.0 -> 0.2 -> 0.15 -> 0.1 -> 0.05

                    let opacity = 0.05;

                    if (distance === 0) opacity = 1;

                    else if (distance === 1) opacity = 0.2;

                    else if (distance === 2) opacity = 0.15;

                    else if (distance === 3) opacity = 0.1;

                    

                    return (

                      <TimelineYear

                        key={item.year}

                        year={item.year}

                        isActive={isSelected}

                        opacity={opacity}

                        onClick={() => scrollToYear(item.year)}

                      />

                    );

                  })}

                </div>

              </div>

            </div>

          </div>

          {/* Mobile Navigation Sticky Header */}

          <div className="lg:hidden sticky top-0 z-50 bg-brand-bg/90 backdrop-blur-md py-4 border-b border-brand-gray/10 -mx-6 px-6 mb-8">

            <div className="flex items-center overflow-x-auto gap-6 no-scrollbar">

              {HISTORY_DATA.map((item) => (

                <button 

                  key={item.year}

                  onClick={() => scrollToYear(item.year)}

                  className={`text-xl font-medium transition-colors whitespace-nowrap ${

                    activeYear === item.year ? 'text-brand-orange' : 'text-brand-black/40'

                  }`}

                >

                  {item.year}

                </button>

              ))}

            </div>

          </div>

          {/* Right Column: Scrollable Content */}

          <div className="lg:col-span-8 flex flex-col gap-24 lg:gap-0">

            {HISTORY_DATA.map((item, index) => (

              <div 

                key={item.year} 

                id={`year-${item.year}`} 

                data-year={item.year}

                className="min-h-[60vh] lg:min-h-[80vh] flex flex-col justify-center scroll-mt-32"

              >

                <HistoryContent data={item} />

              </div>

            ))}

            

            {/* Extra space at bottom to allow last item to scroll to center */}

            <div className="h-[20vh] hidden lg:block" />

          </div>

        </div>

      </div>

    </main>

  );

}

