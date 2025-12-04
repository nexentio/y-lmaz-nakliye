import React from 'react';



import { ArrowRight } from 'lucide-react';

import { Industry } from '../types';

import { IndustryCardHome } from './IndustryCardHome';

import { TickerBackground } from './TickerBackground';

// Data from the design

const industries: Industry[] = [

  {

    id: '1',

    title: 'Food & Beverage',

    imageUrl: 'https://framerusercontent.com/images/fTY3jHNvYEyooysxiifTM2xSTfg.jpg',

    alt: 'Apples in a factory conveyor belt'

  },

  {

    id: '2',

    title: 'Pharmaceutical & Medical',

    imageUrl: 'https://framerusercontent.com/images/KPtRTAWZPh8dOr5hNCF5msdU4X4.jpg',

    alt: 'Shelves full of pharmaceutical products'

  },

  {

    id: '3',

    title: 'Industrial & Manufacturing',

    imageUrl: 'https://framerusercontent.com/images/5UpEscfduHJTgjeKasOjUYDYps.webp',

    alt: 'Rubber Components'

  },

  {

    id: '4',

    title: 'Electronics & Technology',

    imageUrl: 'https://framerusercontent.com/images/Ky1iXcBJYmYHQm4voS6nnQEKrqI.jpg',

    alt: 'Electronic products on a table'

  },

  {

    id: '5',

    title: 'Retail & E-Commerce',

    imageUrl: 'https://framerusercontent.com/images/1hNotqCvrefWQBNcp6xuTP3XLdk.jpg',

    alt: 'View inside a Shopping Center'

  }

];

export const IndustrySection: React.FC = () => {

  return (

    <section className="relative w-full min-h-screen bg-brand-dark">

      {/* Background Effect */}

      <TickerBackground />

      {/* Main Container */}

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 w-full">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 pt-20 lg:pt-0">

          

          {/* Left Column - Sticky Content */}

          <div className="lg:w-5/12 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center py-10 lg:py-0">

            <div className="space-y-10 max-w-lg relative">

              <div className="space-y-6">

                <h2 className="text-5xl md:text-6xl lg:text-[64px] font-bold leading-[1.1] tracking-tight text-white">

                  Built for Critical Industries.

                </h2>

                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium max-w-md">

                  We support companies in Food, Pharma, Retail, and Manufacturing with Tailored Logistics.

                </p>

              </div>

              {/* Action Button */}

              <div>

                <a 

                  href="#" 

                  className="inline-flex items-center gap-4 pl-6 pr-2 py-2 rounded-full border border-brand-orange bg-gradient-to-b from-brand-orange/0 to-brand-orange-dark/0 backdrop-blur-sm text-white transition-all duration-300 hover:bg-brand-orange/10 group"

                >

                  <span className="font-semibold tracking-wide text-sm">Know Our Industries</span>

                  <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#f94006] to-[#af2c04] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-brand-orange/20">

                    <ArrowRight className="w-5 h-5 text-white" strokeWidth={2.5} />

                  </div>

                </a>

              </div>

            </div>

          </div>

          {/* Right Column - Scrolling Cards */}

          <div className="lg:w-7/12 py-10 lg:py-32 space-y-8 md:space-y-12">

            {industries.map((industry) => (

              <IndustryCardHome key={industry.id} industry={industry} />

            ))}

            

            {/* Bottom spacer for scroll comfort */}

            <div className="h-20 lg:h-32"></div>

          </div>

          

        </div>

      </div>

    </section>

  );

};

