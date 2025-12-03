"use client";

import React from 'react';



import { motion } from 'framer-motion';

import { Package } from 'lucide-react';

export const DeliveryVisual = () => {

  return (

    <div className="relative w-full h-full flex items-center justify-center">

      {/* Central Package */}

      <motion.div 

        className="relative z-20 bg-[#E8C29D] w-12 h-12 flex items-center justify-center rounded shadow-sm border border-[#D4A982]"

        animate={{ y: [0, -4, 0] }}

        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}

      >

        <Package className="text-[#8B5E3C]" size={24} />

        {/* Sticker */}

        <div className="absolute top-2 left-2 w-3 h-3 bg-blue-500 rounded-full opacity-80" />

      </motion.div>

      

      {/* Orbiting Elements (EU/US flags simulated) */}

      <motion.div 

        className="absolute w-32 h-32 rounded-full border border-dashed border-brand-orange/30"

        animate={{ rotate: 360 }}

        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}

      >

         <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center overflow-hidden">

            <span className="text-[6px] text-white font-bold">EU</span>

         </div>

         <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-red-600 border-2 border-white flex items-center justify-center overflow-hidden">

            <span className="text-[6px] text-white font-bold">US</span>

         </div>

      </motion.div>

      {/* Shadow */}

      <div className="absolute top-1/2 mt-8 w-10 h-2 bg-black/5 rounded-full blur-sm" />

    </div>

  );

};

