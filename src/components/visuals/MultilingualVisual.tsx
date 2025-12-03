"use client";

import React from 'react';



import { motion } from 'framer-motion';

import { MessageCircle } from 'lucide-react';

const flags = [

  { color: '#FFD700', label: 'DE' }, // Germany (simplified)

  { color: '#AE1C28', label: 'NL' }, // Netherlands

  { color: '#008C45', label: 'IT' }, // Italy

  { color: '#00247D', label: 'UK' }, // UK

  { color: '#002395', label: 'FR' }, // France

  { color: '#AA151B', label: 'ES' }, // Spain

];

export const MultilingualVisual = () => {

  return (

    <div className="relative w-full h-full flex items-center justify-center">

      {/* Center Icon */}

      <div className="absolute z-10 bg-white p-3 rounded-full shadow-sm">

        <MessageCircle className="w-6 h-6 text-brand-orange fill-brand-orange/20" />

      </div>

      {/* Orbit Container */}

      <motion.div

        className="relative w-40 h-40"

        animate={{ rotate: 360 }}

        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}

      >

        {flags.map((flag, index) => {

          const angle = (index / flags.length) * 360;

          const radius = 80; // Distance from center

          // Calculate position purely for initial layout, though rotation handles the movement

          const x = Math.cos((angle * Math.PI) / 180) * radius;

          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (

            <div

              key={index}

              className="absolute top-1/2 left-1/2 w-8 h-8 -ml-4 -mt-4"

              style={{

                transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,

              }}

            >

              <motion.div 

                className="w-full h-full rounded-full border-2 border-white shadow-sm flex items-center justify-center text-[10px] font-bold text-white overflow-hidden"

                style={{ backgroundColor: flag.color }}

                animate={{ rotate: -360 }} // Counter-rotate to keep upright

                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}

              >

                {flag.label}

              </motion.div>

            </div>

          );

        })}

        

        {/* Dashed Orbital Path */}

        <div className="absolute inset-0 rounded-full border border-dashed border-gray-300 scale-125" />

      </motion.div>

    </div>

  );

};

