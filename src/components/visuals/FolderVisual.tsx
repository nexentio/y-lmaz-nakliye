"use client";

import React from 'react';



import { motion } from 'framer-motion';

const Paper = ({ delay, yOffset, title }: { delay: number; yOffset: number, title?: string }) => (

  <motion.div

    className="absolute left-1/2 -translate-x-1/2 w-24 h-28 bg-white border border-gray-200 rounded shadow-sm flex flex-col items-center p-2 pt-3"

    initial={{ y: 20, opacity: 0 }}

    animate={{ y: yOffset, opacity: 1 }}

    transition={{ duration: 0.5, delay: delay }}

    style={{ zIndex: 10 }}

  >

    {/* Lines representing text */}

    <div className="w-full h-1 bg-gray-200 rounded mb-1.5" />

    <div className="w-3/4 h-1 bg-gray-200 rounded mb-1.5" />

    <div className="w-full h-1 bg-gray-200 rounded mb-3" />

    

    {title && <span className="text-[6px] font-bold text-gray-800 uppercase tracking-tighter mb-1">{title}</span>}

    

    {/* Badge */}

    <div className="mt-auto w-6 h-6 rounded bg-brand-peach flex items-center justify-center">

       <div className="w-3 h-3 border-2 border-brand-orange rounded-full" />

    </div>

  </motion.div>

);

export const FolderVisual = () => {

  return (

    <div className="relative w-full h-full flex items-end justify-center pb-8">

      

      {/* Back of Folder */}

      <div className="absolute bottom-8 w-32 h-24 bg-[#E7E5E4] rounded-md shadow-md transform -rotate-2 origin-bottom-left" style={{ zIndex: 5 }}></div>

      <div className="absolute bottom-8 w-32 h-24 bg-[#F1EFEF] rounded-md transform rotate-1 origin-bottom-right" style={{ zIndex: 6 }}></div>

      {/* Papers popping out */}

      <div className="relative w-32 h-32" style={{ zIndex: 8 }}>

        <Paper delay={0} yOffset={10} />

        <Paper delay={0.8} yOffset={-10} title="HACCP" />

        <Paper delay={1.6} yOffset={-30} title="SAFETY" />

      </div>

      {/* Front of Folder */}

      <div 

        className="absolute bottom-8 w-32 h-20 bg-gradient-to-b from-[#FDB39B] to-[#FB8C6A] rounded-md shadow-lg flex items-center justify-center"

        style={{ zIndex: 20 }}

      >

      </div>

    </div>

  );

};

