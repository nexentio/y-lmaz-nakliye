"use client";

import React from 'react';

import { motion } from 'framer-motion';

import { Globe } from 'lucide-react';

export const GlobalServiceVisual = () => {

  const satellites = [

    { color: 'bg-yellow-400', delay: 0, label: 'DE' },

    { color: 'bg-red-500', delay: 1, label: 'TR' },

    { color: 'bg-blue-600', delay: 2, label: 'FR' },

    { color: 'bg-green-600', delay: 3, label: 'IT' },

  ];

  return (

    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">

      {/* Background Grid */}

      <div className="absolute inset-0 opacity-[0.05]" 

           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      {/* Central Globe Pulse */}

      <div className="relative z-10">

        <motion.div

          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}

          transition={{ duration: 3, repeat: Infinity }}

          className="absolute inset-0 bg-brand-orange rounded-full blur-xl"

        />

        <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border border-slate-100 relative z-20">

          <Globe className="w-8 h-8 text-brand-orange" />

        </div>

      </div>

      {/* Orbit Rings */}

      <div className="absolute w-48 h-48 border border-dashed border-slate-300 rounded-full opacity-60 animate-[spin_60s_linear_infinite]" />

      <div className="absolute w-32 h-32 border border-slate-200 rounded-full opacity-80" />

      {/* Satellites */}

      <motion.div 

        className="absolute w-48 h-48"

        animate={{ rotate: 360 }}

        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}

      >

        {satellites.map((sat, i) => (

          <motion.div

            key={i}

            className="absolute top-0 left-1/2 -ml-3 -mt-3"

            style={{ transformOrigin: '50% 100px', transform: `rotate(${i * 90}deg)` }}

          >

             {/* Counter rotate to keep text upright */}

            <motion.div 

               animate={{ rotate: -360 }}

               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}

               className={`w-8 h-8 rounded-full ${sat.color} text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-md z-30`}

            >

              {sat.label}

            </motion.div>

          </motion.div>

        ))}

      </motion.div>

    </div>

  );

};

