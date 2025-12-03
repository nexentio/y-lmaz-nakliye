"use client";

import React, { useState } from 'react';



import { DottedMap } from './DottedMap';

import { LocationPin } from './LocationPin';

import { InfoCard } from './InfoCard';

import { LOCATIONS } from '../constants';

export default function LocationsSection() {

  const [activeLocationId, setActiveLocationId] = useState<string>('rotterdam-hub');

  const handlePinClick = (id: string) => {

    setActiveLocationId(id);

  };

  return (

    <div className="relative w-full min-h-screen bg-customGray overflow-hidden font-sans flex flex-col items-center justify-center">

      

      {/* Background Warehouse Image with Overlay */}

      <div className="absolute inset-0 z-0 pointer-events-none">

        <img 

          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 

          alt="Warehouse Background" 

          className="w-full h-full object-cover opacity-[0.08] mix-blend-multiply filter grayscale contrast-125"

        />

        <div className="absolute inset-0 bg-stone-200/30" />

      </div>

      {/* Main Content Container */}

      <div className="relative z-10 w-full max-w-7xl px-4 md:px-8 py-12 md:py-24 flex flex-col items-center">

        

        {/* Header Section */}

        <div className="flex flex-col items-center text-center mb-16 space-y-4">

          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-stone-800 uppercase">

            Global reach, local strength.

          </span>

          <h1 className="text-4xl md:text-6xl font-medium text-stone-900 tracking-tight">

            Our Locations

          </h1>

          <p className="text-base md:text-lg text-stone-600 font-light max-w-md mx-auto">

            We Operate from Strategic Hubs:

          </p>

        </div>

        {/* Map Container */}

        <div className="relative w-full max-w-5xl aspect-[2/1] md:aspect-[2.2/1]">

          {/* The Dotted Map Graphic */}

          <div className="absolute inset-0 text-stone-800/80">

            <DottedMap />

          </div>

          {/* Interactive Pins & Cards */}

          {LOCATIONS.map((location) => {

            const isActive = activeLocationId === location.id;

            return (

              <div

                key={location.id}

                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out"

                style={{

                  top: `${location.coordinates.top}%`,

                  left: `${location.coordinates.left}%`,

                  zIndex: isActive ? 30 : 20,

                }}

              >

                <div className="relative">

                  <LocationPin 

                    active={isActive} 

                    onClick={() => handlePinClick(location.id)} 

                  />

                  

                  {/* Show Card if Active */}

                  {isActive && (

                    <InfoCard location={location} />

                  )}

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </div>

  );

}

