"use client";

import React from 'react';

import { motion } from 'framer-motion';

import { Globe, MapPin, Navigation } from 'lucide-react';

// --- Visual 1: Multilingual / Global Service (Revised: Reliable Nationwide Service - Populated Orbits) ---

export const GlobalServiceVisual = () => {

  return (

    <div className="relative w-full h-full flex items-center justify-center bg-slate-50 overflow-hidden">

      

      {/* Background Dots */}

      <div className="absolute inset-0 opacity-30" 

           style={{ 

             backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', 

             backgroundSize: '24px 24px' 

           }} 

      />

      {/* Outer Ring System */}

      <div className="absolute inset-0 flex items-center justify-center">

         {/* The Track */}

         <div className="w-64 h-64 border border-dashed border-slate-300/70 rounded-full absolute" />

         

         {/* Rotating Container */}

         <motion.div 

            className="w-64 h-64 absolute"

            animate={{ rotate: 360 }}

            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}

         >

             {/* Satellite 1: Location Pin (Istanbul) */}

             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">

                 <motion.div 

                    animate={{ rotate: -360 }} 

                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}

                    className="flex flex-col items-center"

                 >

                     <div className="w-8 h-8 bg-white border border-slate-100 rounded-full shadow-md flex items-center justify-center text-blue-500 relative z-10">

                        <MapPin size={14} fill="currentColor" className="opacity-20 absolute" />

                        <MapPin size={14} className="relative z-10" />

                     </div>

                     <div className="mt-1 bg-slate-800 text-white text-[8px] font-bold px-2 py-0.5 rounded shadow-sm opacity-90">İSTANBUL</div>

                 </motion.div>

             </div>

             {/* Satellite 2: Truck Icon (Ankara direction) */}

             <div className="absolute bottom-8 right-4">

                 <motion.div 

                    animate={{ rotate: -360 }} 

                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}

                    className="w-9 h-9 bg-brand-orange text-white rounded-full shadow-lg flex items-center justify-center border-2 border-white"

                 >

                     <Navigation size={16} />

                 </motion.div>

             </div>

             {/* Satellite 3: Generic Dot */}

             <div className="absolute top-1/2 -left-1.5 w-3 h-3 bg-slate-400 rounded-full border-2 border-slate-50 shadow-sm" />

         </motion.div>

      </div>

      {/* Inner Ring System */}

      <div className="absolute inset-0 flex items-center justify-center">

         {/* The Track */}

         <div className="w-40 h-40 border border-slate-200 rounded-full absolute" />

         

         {/* Rotating Container (Reverse) */}

         <motion.div 

            className="w-40 h-40 absolute"

            animate={{ rotate: -360 }}

            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}

         >

             {/* Badge: 81 Cities */}

             <div className="absolute top-1/2 -right-5 -translate-y-1/2">

                 <motion.div 

                    animate={{ rotate: 360 }} 

                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}

                    className="bg-white px-2 py-1 rounded-full border border-slate-100 shadow-sm flex items-center gap-1.5"

                 >

                     <span className="relative flex h-2 w-2">

                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>

                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>

                     </span>

                     <span className="text-[9px] font-bold text-slate-700 whitespace-nowrap">81 İL</span>

                 </motion.div>

             </div>

             

             {/* Small Dots */}

             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-slate-300 rounded-full" />

             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-slate-300 rounded-full" />

         </motion.div>

      </div>

      {/* Central Hub */}

      <div className="relative z-10">

         {/* Pulsing Rings */}

         <motion.div 

            className="absolute inset-0 rounded-full bg-brand-orange/10" 

            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}

            transition={{ duration: 2, repeat: Infinity }}

         />

         

         <div className="w-20 h-20 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center border border-slate-50 relative overflow-hidden group">

             <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-white" />

             

             <Globe className="relative z-10 w-9 h-9 text-slate-700 group-hover:text-brand-orange transition-colors duration-500" strokeWidth={1.5} />

             

             {/* Scanning Line overlay on globe */}

             <motion.div 

               className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-orange/20 to-transparent h-[150%]"

               animate={{ top: ['-150%', '150%'] }}

               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}

             />

         </div>

         

         {/* Active Status Badge */}

         <div className="absolute -bottom-2 -right-2 bg-white px-2 py-0.5 rounded-full shadow border border-slate-100 flex items-center gap-1">

             <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />

             <span className="text-[8px] font-bold text-slate-500">ONLINE</span>

         </div>

      </div>

    </div>

  );

};
