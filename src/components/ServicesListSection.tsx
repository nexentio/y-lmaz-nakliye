import React from 'react';



import { StickySidebar } from './StickySidebar';

import { ServiceCard } from './ServicesDetailCard';

import { services } from '../constants';

export const ServicesListSection: React.FC = () => {

  return (

    <div className="min-h-screen bg-[#1a0500] text-white selection:bg-[#f94006] selection:text-white">

      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">

          

          {/* Left Column: Sticky Sidebar */}

          <aside className="relative">

            <StickySidebar />

          </aside>

          {/* Right Column: Scrollable Services List */}

          <main className="flex flex-col pb-24">

            {services.map((service) => (

              <ServiceCard key={service.id} data={service} />

            ))}

          </main>

          

        </div>

      </div>

    </div>

  );

};

