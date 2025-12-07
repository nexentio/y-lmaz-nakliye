"use client";

import React from 'react';

import { motion } from 'framer-motion';

// --- Helper for Fleet Visual: A Stylized Truck ---

const SimpleTruck = ({ color, showBrand = false, plate }: { color: string, showBrand?: boolean, plate?: string }) => (

  <div className="relative drop-shadow-md">

    {/* Trailer */}

    <div className="w-28 h-14 bg-gradient-to-br from-slate-50 to-slate-100 rounded border border-slate-300 shadow-inner relative z-10 overflow-hidden">

        {/* Horizontal ridges */}

        <div className="absolute top-3 left-0 w-full h-[1px] bg-slate-200" />

        <div className="absolute top-6 left-0 w-full h-[1px] bg-slate-200" />

        <div className="absolute top-9 left-0 w-full h-[1px] bg-slate-200" />

        

        {showBrand && (

            <div className="absolute inset-0 flex items-center justify-center opacity-10">

                <div className={`w-12 h-12 ${color} rounded-full blur-xl`} />

            </div>

        )}

        

        {/* Rear Door Line */}

        <div className="absolute top-0 left-2 w-[1px] h-full bg-slate-300/50" />

    </div>

    {/* Cabin connector */}

    <div className="absolute bottom-3 -right-2 w-4 h-2 bg-slate-800 rounded-sm z-0" />

    {/* Cabin */}

    <div className={`absolute bottom-0 -right-10 w-12 h-11 ${color} rounded-r-lg rounded-bl-md shadow-lg z-20 overflow-hidden`}>

         {/* Window */}

         <div className="absolute top-1 right-1 w-6 h-5 bg-slate-800/90 rounded-tr-md backdrop-blur-sm border-l border-b border-white/20">

             <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20" />

         </div>

         {/* Headlight */}

         <div className="absolute bottom-1 right-0 w-1 h-2 bg-yellow-100 blur-[1px] shadow-[0_0_5px_rgba(253,224,71,0.8)]" />

         

         {/* Grille */}

         <div className="absolute bottom-1 right-1.5 w-3 h-2 flex flex-col gap-[1px] opacity-30">

             <div className="w-full h-[1px] bg-black" />

             <div className="w-full h-[1px] bg-black" />

         </div>

    </div>

    {/* Wheels */}

    <div className="flex gap-1 absolute -bottom-2.5 left-2 z-30">

        <div className="w-4 h-4 bg-slate-800 rounded-full border-2 border-slate-500 shadow-sm flex items-center justify-center">

            <div className="w-1 h-1 bg-slate-400 rounded-full" />

        </div>

        <div className="w-4 h-4 bg-slate-800 rounded-full border-2 border-slate-500 shadow-sm flex items-center justify-center">

            <div className="w-1 h-1 bg-slate-400 rounded-full" />

        </div>

    </div>

    <div className="absolute -bottom-2.5 -right-6 z-30">

        <div className="w-4 h-4 bg-slate-800 rounded-full border-2 border-slate-500 shadow-sm flex items-center justify-center">

             <div className="w-1 h-1 bg-slate-400 rounded-full" />

        </div>

    </div>

    {/* Plate Tag */}

    {plate && (

        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[6px] px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">

            {plate}

        </div>

    )}

  </div>

);

// --- Visual 2: Modern Fleet (Convoy) ---

export const FleetVisual = () => {

  return (

    <div className="relative w-full h-full bg-slate-50 flex flex-col items-center justify-center overflow-hidden group">

      

      {/* Moving Road Surface / Background */}

      <div className="absolute inset-0 flex flex-col justify-center items-center opacity-30 pointer-events-none">

          {/* Angled Road Container */}

          <div className="w-[140%] h-48 border-y-2 border-dashed border-slate-300 relative rotate-[-6deg] transform origin-center bg-slate-200/30 backdrop-blur-sm">

             

             {/* Moving Lane Markings */}

             <motion.div 

               className="absolute top-1/2 left-0 w-full flex gap-32 -translate-y-1/2"

               animate={{ x: [-128, 0] }}

               transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}

             >

                 {[1,2,3,4,5,6,7].map(i => (

                     <div key={i} className="w-20 h-2 bg-slate-400 rounded-full" />

                 ))}

             </motion.div>

          </div>

      </div>

      {/* The Convoy Container - Rotated to match road */}

      <div className="relative z-10 transform -rotate-[6deg]">

        

        {/* Truck 1 (Back / Ghost) */}

        <motion.div 

            className="absolute -top-20 -left-28 opacity-40 scale-[0.65] blur-[1px]"

            animate={{ x: [0, 8, 0], y: [0, -2, 0] }}

            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}

        >

            <SimpleTruck color="bg-slate-500" plate="YL-03" />

        </motion.div>

        {/* Truck 2 (Middle / Support) */}

        <motion.div 

            className="absolute -top-12 -left-12 opacity-80 scale-[0.8]"

            animate={{ x: [0, 15, 0], y: [0, 4, 0] }}

            transition={{ duration: 4, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}

        >

            <SimpleTruck color="bg-slate-700" plate="YL-02" />

        </motion.div>

        {/* Truck 3 (Front / Hero) */}

        <motion.div 

            className="relative z-20 scale-100"

            animate={{ x: [0, 6, 0], y: [0, -3, 0] }}

            transition={{ duration: 3.5, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}

        >

            <SimpleTruck color="bg-brand-orange" showBrand plate="YL-01" />

            

            {/* Tech / Status UI Overlay */}

            <motion.div 

                initial={{ opacity: 0, y: 10 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ delay: 1 }}

                className="absolute -top-10 -right-4 bg-white/95 backdrop-blur-md pl-2 pr-3 py-1.5 rounded-lg shadow-lg border border-slate-100 flex items-center gap-2"

            >

                <div className="relative flex items-center justify-center w-3 h-3">

                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>

                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>

                </div>

                <div className="flex flex-col">

                    <span className="text-[8px] font-bold text-slate-800 leading-none">FLEET TRACKING</span>

                    <span className="text-[6px] text-slate-500 font-mono mt-0.5">GPS: 41.0082° N</span>

                </div>

            </motion.div>

        </motion.div>

      </div>

      {/* Dynamic Speed Lines (Foreground) */}

      <div className="absolute inset-0 pointer-events-none">

         <motion.div 

            className="absolute top-1/3 left-0 w-32 h-[1px] bg-gradient-to-r from-transparent via-slate-400 to-transparent"

            animate={{ x: [400, -200], opacity: [0, 1, 0] }}

            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}

         />

         <motion.div 

            className="absolute bottom-1/4 right-0 w-48 h-[1px] bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent"

            animate={{ x: [400, -400], opacity: [0, 1, 0] }}

            transition={{ duration: 1.8, delay: 0.7, repeat: Infinity, ease: "linear" }}

         />

      </div>

    </div>

  );

};
