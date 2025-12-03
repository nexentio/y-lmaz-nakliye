import React from 'react';

import { TESTIMONIALS } from '../constants';

import TestimonialCard from './TestimonialCard';

import VideoCard from './VideoCard';



const TestimonialsSection: React.FC = () => {

  return (

    <section 

      className="w-full py-20 px-4 sm:px-6 lg:px-8"

      style={{

        background: 'linear-gradient(180deg, rgb(242, 242, 242) 0%, rgb(231, 229, 228) 100%)'

      }}

    >

      <div className="max-w-[1200px] mx-auto">

        

        {/* Header Content */}

        <div className="flex flex-col items-center justify-center text-center mb-12 space-y-4">

          <h2 className="text-3xl md:text-4xl font-bold text-stone-850 tracking-tight">

            What Our Clients Say

          </h2>

          <p className="text-stone-850 max-w-2xl text-[17px] leading-relaxed">

            Delivering best experience. We ensure safe and efficient delivery for our clients every step of the way.

          </p>

        </div>



        {/* Content Layout */}

        <div className="flex flex-col lg:flex-row gap-6">

          

          {/* Left Column - Video (Takes roughly 1/3 to 40% width on large screens) */}

          <div className="w-full lg:w-[420px] lg:flex-shrink-0 h-[400px] lg:h-auto">

            <VideoCard />

          </div>



          {/* Right Column - Grid of Testimonials */}

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">

            {TESTIMONIALS.map((testimonial) => (

              <div key={testimonial.id} className="h-full">

                <TestimonialCard data={testimonial} />

              </div>

            ))}

          </div>



        </div>

      </div>

    </section>

  );

};



export default TestimonialsSection;

