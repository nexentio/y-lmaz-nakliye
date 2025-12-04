import React from 'react';

import { IndustriesTestimonialCard } from './IndustriesTestimonialCard';

import { Testimonial } from '../types';

const testimonials: Testimonial[] = [

  {

    id: '1',

    quote: "\"Loginord helped us streamline our entire distribution network in Western Europe. Always on time, always reliable.\"",

    name: "Frank Anderson",

    company: "European Food Co.",

    avatarUrl: "https://picsum.photos/id/64/200/200"

  },

  {

    id: '2',

    quote: "\"Loginord became a true partner in our cold-chain operations across the US. Their real-time visibility tools make all the difference.\"",

    name: "Carla Jennings",

    company: "FreshHarvest Foods",

    avatarUrl: "https://picsum.photos/id/338/200/200"

  },

  {

    id: '3',

    quote: "\"What impressed us most was their flexibility during seasonal peaks. Loginord scaled up quickly without compromising quality.\"",

    name: "Thierry Morel",

    company: "AgriNova Americas",

    avatarUrl: "https://picsum.photos/id/237/200/200"

  },

  {

    id: '4',

    quote: "\"From the first shipment, it was clear they understood the complexity of electronics transport. Everything has been smooth and secure.\"",

    name: "Derek Tanaka",

    company: "Nextronix Components",

    avatarUrl: "https://picsum.photos/id/91/200/200"

  }

];

export const IndustriesTestimonialsSection: React.FC = () => {

  return (

    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-[#F2F2F2] to-[#E7E5E4]">

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">

        

        {/* Header Section */}

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 gap-6">

          <h2 className="text-[#1C1817] text-4xl md:text-5xl font-medium tracking-tight max-w-sm">

            What Our Clients Say

          </h2>

          <div className="max-w-md">

            <p className="text-[#1C1817] text-lg md:text-[19px] leading-snug">

              Delivering best experience. We ensure safe and efficient delivery for our clients every step of the way.

            </p>

          </div>

        </div>

        {/* Content Grid */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[700px]">

          

          {/* Left Large Media Card (Video Placeholder) */}

          <div className="lg:col-span-1 h-[400px] lg:h-full w-full rounded-lg overflow-hidden relative group">

             {/* Using an image to simulate the video poster from the design */}

            <img 

              src="https://picsum.photos/id/206/800/1200" 

              alt="Logistics transport road" 

              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"

            />

            <div className="absolute inset-0 bg-black/10"></div>

          </div>

          {/* Right Testimonial Grid */}

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 h-full">

             {testimonials.map((testimonial) => (

                <IndustriesTestimonialCard key={testimonial.id} data={testimonial} />

             ))}

          </div>

        </div>

      </div>

    </section>

  );

};

export default IndustriesTestimonialsSection;

