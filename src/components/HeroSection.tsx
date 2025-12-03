"use client";

import React from 'react';



/**

 * HeroSection Component

 * 

 * Replicates the provided design with:

 * - Specific typography styles (tight tracking, large headings)

 * - Exact color matching based on the provided snippet (#1c1817 text, #f94006 accent)

 * - Responsive layout (stacking on mobile, spread on desktop)

 * - Video integration

 */

export const HeroSection: React.FC = () => {

  return (

    <section className="w-full px-5 pt-12 pb-24 md:px-10 lg:px-12 md:pt-24 md:pb-40 max-w-[1400px] mx-auto">

      

      {/* Top Header Row */}

      <div className="flex flex-col md:flex-row md:items-end justify-between w-full mb-10 md:mb-14 gap-6">

        

        {/* Main Headline */}

        <h1 

          className="text-[2.75rem] md:text-6xl lg:text-[5rem] xl:text-[5.5rem] leading-[1.05] md:leading-[0.95] tracking-tight font-medium"

          style={{ color: 'rgb(28, 24, 23)' }}

        >

          Driven by Purpose.

        </h1>

        {/* 'About Us' Tag */}

        <div className="flex items-center gap-3 md:mb-4">

          <div 

            className="w-[14px] h-[14px] rounded-full border-[3px]"

            style={{ borderColor: 'rgb(249, 64, 6)' }}

            aria-hidden="true"

          />

          <span 

            className="text-[11px] font-bold uppercase tracking-[0.15em]"

            style={{ color: 'rgb(28, 24, 23)' }}

          >

            About Us

          </span>

        </div>

      </div>

      {/* Hero Media (Video) */}

      <div className="w-full relative overflow-hidden rounded-xl mb-12 md:mb-16 bg-gray-100">

        {/* 

           Using an aspect ratio container to prevent layout shift.

           The original design is quite wide. 

        */}

        <div className="relative w-full pt-[40%] md:pt-[32%]">

          <video

            src="https://framerusercontent.com/assets/H3u2CEnGOEeHabr3QiOEYbZnkHA.mp4"

            autoPlay

            loop

            muted

            playsInline

            className="absolute top-0 left-0 w-full h-full object-cover"

          />

        </div>

      </div>

      {/* Bottom Content Row */}

      <div className="flex flex-col w-full">

        {/* Secondary Headline */}

        <h2 

          className="text-[2.75rem] md:text-6xl lg:text-[5rem] xl:text-[5.5rem] leading-[1.05] md:leading-[0.95] tracking-tight font-medium mb-6 md:mb-8"

          style={{ color: 'rgb(28, 24, 23)' }}

        >

          Built on Trust.

        </h2>

        {/* Subtext Paragraph */}

        <div className="max-w-3xl mt-2">

          <p 

            className="text-lg md:text-2xl leading-relaxed md:leading-snug font-normal"

            style={{ color: 'rgb(28, 24, 23)' }}

          >

            From last-mile delivery to international freight, Loginord offers flexible and scalable logistics solutions designed for your operational success.

          </p>

        </div>

      </div>

      

    </section>

  );

};

