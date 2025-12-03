"use client";

import React from 'react';



import { SectionButton } from './ui/SectionButton';

import { MultilingualVisual } from './visuals/MultilingualVisual';

import { TruckVisual } from './visuals/TruckVisual';

import { DeliveryVisual } from './visuals/DeliveryVisual';

import { FolderVisual } from './visuals/FolderVisual';

interface FeatureCardProps {

  title: string;

  visual: React.ReactNode;

}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, visual }) => {

  return (

    <div className="bg-brand-gray rounded-[32px] p-6 flex flex-col items-center justify-between aspect-square w-full h-full overflow-hidden transition-transform duration-300 hover:scale-[1.02]">

      <div className="flex-1 w-full relative">

        {visual}

      </div>

      <p className="text-center text-brand-dark font-medium text-sm lg:text-base mt-4 px-2">

        {title}

      </p>

    </div>

  );

};

export default function WhyUsSection() {

  return (

    <section className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

      

      {/* Left Content Column */}

      <div className="lg:col-span-5 flex flex-col gap-8 text-left">

        <div>

          <span className="text-sm font-semibold text-brand-dark tracking-wide uppercase mb-2 block">

            Why Loginord

          </span>

          <h2 className="text-4xl lg:text-5xl font-semibold text-brand-dark mb-6 leading-[1.15]">

            Why Leading Businesses Rely on Us

          </h2>

          <p className="text-lg text-gray-600 leading-relaxed max-w-md">

            We combine smart operations with real-world reliability to move what matters — faster, safer, and smarter.

          </p>

        </div>

        

        <div className="pt-2">

          <SectionButton />

        </div>

      </div>

      {/* Right Grid Column */}

      <div className="lg:col-span-7 w-full">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">

            <FeatureCard 

                visual={<MultilingualVisual />}

                title="Multilingual support across Europe and the US"

            />

            <FeatureCard 

                visual={<TruckVisual />}

                title="Real-Time Shipment Visibility"

            />

            <FeatureCard 

                visual={<DeliveryVisual />}

                title="Fast Delivery across 20+ Countries"

            />

            <FeatureCard 

                visual={<FolderVisual />}

                title="Certified and Compliant Fleet"

            />

        </div>

      </div>

    </section>

  );

}

