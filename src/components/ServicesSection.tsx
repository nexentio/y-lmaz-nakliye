import React from 'react';



import ServiceCard from './ServiceCard';

import { ServiceItem } from '../types';

// Data extracted from the provided HTML/Design

const services: ServiceItem[] = [

  {

    id: '1',

    number: '01',

    title: 'National & International Freight',

    imageUrl: 'https://framerusercontent.com/images/iBliZ6U0n2mOK6nHB0zA61chf4.webp',

    alt: 'View of containers in motion at a large logistics hub located in a port.'

  },

  {

    id: '2',

    number: '02',

    title: 'Regional Distribution',

    imageUrl: 'https://framerusercontent.com/images/Hr6t8ScCAwHOJkSXSmsF2S264A.jpg',

    alt: 'Stacked shipping containers.'

  },

  {

    id: '3',

    number: '03',

    title: 'Warehousing & Fulfillment',

    imageUrl: 'https://framerusercontent.com/images/XbiC6HqXQazD6tC0lwwd6VHSp8.webp',

    alt: 'Large logistics warehouse with a worker walking in the center.'

  },

  {

    id: '4',

    number: '04',

    title: 'Refrigerated Transport',

    imageUrl: 'https://framerusercontent.com/images/ZBaUPtNu1XK33fXrjh3e6RFX9u0.webp',

    alt: 'Set of refrigerated trailers for transport.'

  },

  {

    id: '5',

    number: '05',

    title: '3PL Subcontracting',

    imageUrl: 'https://framerusercontent.com/images/7LCSOKNtTwk0qTCBifDWJdJE.webp',

    alt: 'Drone view of a transportation truck depot.'

  }

];

export const ServicesSection: React.FC = () => {

  return (

    <main className="min-h-screen w-full bg-white text-[#1C1817] selection:bg-[#F94006] selection:text-white">

      

      {/* 

        Main Layout Wrapper 

        Using max-w-[1440px] to mimic typical Framer desktop breakpoints 

      */}

      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24 lg:px-20 lg:py-32">

        

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-12 xl:gap-x-24">

          

          {/* Left Column: Sticky Title & Description */}

          <div className="lg:col-span-5 relative">

            <div className="lg:sticky lg:top-32 flex flex-col gap-6 lg:gap-8 max-w-lg">

              <h2 className="text-4xl md:text-5xl lg:text-[64px] leading-[1.05] md:leading-[1.1] lg:leading-[0.95] tracking-tight font-medium">

                Logistics that <br className="hidden lg:block" />

                fit your needs.

              </h2>

              <p className="text-lg md:text-xl text-[#1C1817] leading-relaxed opacity-90 font-normal max-w-sm">

                From temperature-controlled transport to regional distribution — we've got it covered.

              </p>

            </div>

          </div>

          {/* Right Column: Scrollable Service List */}

          <div className="lg:col-span-7 flex flex-col gap-24 lg:gap-32 pb-20">

            {services.map((service) => (

              <ServiceCard key={service.id} item={service} />

            ))}

            

            {/* Empty spacer at bottom if needed for scroll feel, mirroring framer padding */}

            <div className="h-0 lg:h-12" />

          </div>

        </div>

      </div>

    </main>

  );

};

