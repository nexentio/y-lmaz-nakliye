"use client";

import React from 'react';

import { motion } from 'framer-motion';

import { Truck, MapPin } from 'lucide-react';

export const FleetVisual = () => {

  return (

    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-slate-50">

      

      {/* Moving Road Lines */}

      <div className="absolute top-1/2 left-0 w-full h-24 -translate-y-1/2 overflow-hidden">

        <div className="flex gap-12 animate-[slideLeft_2s_linear_infinite] w-[200%] opacity-20">

             {[...Array(10)].map((_, i) => (

               <div key={i} className="w-16 h-1 bg-slate-300 rounded-full" />

             ))}

        </div>

        <style>{`@keyframes slideLeft { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>

      </div>

      {/* Truck Container */}

      <motion.div

        animate={{ y: [-2, 2, -2] }}

        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}

        className="relative z-10"

      >

        {/* Speed lines */}

        <motion.div 

           animate={{ opacity: [0, 1, 0], x: [10, -20] }}

           transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}

           className="absolute top-0 -right-8 w-12 h-[2px] bg-slate-300 rounded-full"

        />

         <motion.div 

           animate={{ opacity: [0, 1, 0], x: [10, -30] }}

           transition={{ duration: 1.1, repeat: Infinity }}

           className="absolute bottom-1 -right-12 w-8 h-[2px] bg-slate-300 rounded-full"

        />

        {/* Vector Truck */}

        <div className="w-32 h-20 relative">

             <Truck className="w-full h-full text-slate-800 drop-shadow-xl" strokeWidth={1.5} />

             {/* Branding on truck */}

             <div className="absolute top-[35%] left-[25%] w-3 h-3 bg-brand-orange rounded-sm" />

             <div className="absolute top-[40%] left-[38%] w-8 h-1 bg-slate-600 rounded-full opacity-50" />

        </div>

      </motion.div>

      {/* Map Marker Passing By */}

      <motion.div

        initial={{ x: 200, opacity: 0 }}

        animate={{ x: -200, opacity: [0, 1, 0] }}

        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}

        className="absolute bottom-8 z-0"

      >

        <MapPin className="text-slate-300 w-8 h-8" />

      </motion.div>

    </div>

  );

};

