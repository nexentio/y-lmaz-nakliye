import React from 'react';

import Footer from '../../components/Footer';

import SectionHeader from '../../components/SectionHeader';

import ImageGrid from '../../components/ImageGrid';

import IndustriesSectionHeader from '../../components/IndustriesSectionHeader';

import IndustryCard from '../../components/IndustryCard';

import IndustriesTestimonialsSection from '../../components/IndustriesTestimonialsSection';

import { INDUSTRIES_DATA } from '../../constants';

export default function IndustriesPage() {

  return (

    <div className="min-h-screen w-full flex flex-col bg-white">

      {/* Main Content */}

      <main className="min-h-screen w-full bg-white flex flex-col pt-32 md:pt-40">

        <section className="w-full py-20 md:py-32">

          <SectionHeader />

          <ImageGrid />

        </section>

        {/* Industries Detailed Section */}

        <section className="w-full bg-[#1a0502] text-white py-20 md:py-32 px-4 md:px-8 lg:px-12 flex justify-center">

          <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-min">

            

            {/* Cell 1: Header Text (Top Left) */}

            <div className="md:pr-8 mb-8 md:mb-0">

              <IndustriesSectionHeader />

            </div>

            {/* Cell 2: Food & Beverage (Top Right) */}

            <div>

               <IndustryCard data={INDUSTRIES_DATA[0]} />

            </div>

            {/* Row 2, Cell 1: Pharma (Left) */}

            <div>

               <IndustryCard data={INDUSTRIES_DATA[1]} />

            </div>

            {/* Row 2, Cell 2: Industrial (Right) */}

            <div>

               <IndustryCard data={INDUSTRIES_DATA[2]} />

            </div>

             {/* Row 3, Cell 1: Electronics (Left) */}

            <div>

               <IndustryCard data={INDUSTRIES_DATA[3]} />

            </div>

             {/* Row 3, Cell 2: Retail (Right) */}

            <div>

               <IndustryCard data={INDUSTRIES_DATA[4]} />

            </div>

          </div>

        </section>

        {/* Testimonials Section */}

        <IndustriesTestimonialsSection />

      </main>

      {/* Footer */}

      <Footer />

    </div>

  );

}

