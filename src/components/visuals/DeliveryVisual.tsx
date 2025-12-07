"use client";

import React from 'react';

import { motion } from 'framer-motion';

import { PackageCheck } from 'lucide-react';

export const DeliveryVisual = () => {

  return (

    <div className="relative w-full h-full flex items-center justify-center bg-white">

      {/* Radar Scan Effect */}

      <div className="absolute inset-0 flex items-center justify-center">

         <motion.div 

            animate={{ scale: [1, 2.5], opacity: [0.3, 0] }}

            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}

            className="w-20 h-20 border border-brand-orange rounded-full"

         />

         <motion.div 

            animate={{ scale: [1, 2], opacity: [0.3, 0] }}

            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}

            className="w-20 h-20 border border-brand-orange rounded-full absolute"

         />

      </div>

      {/* Main Package */}

      <motion.div

        className="relative z-20 w-16 h-16 bg-gradient-to-br from-orange-400 to-brand-orange rounded-xl shadow-lg flex items-center justify-center text-white"

        animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}

        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}

      >

        <PackageCheck className="w-8 h-8" />

        

        {/* Success Badge */}

        <motion.div 

            initial={{ scale: 0 }}

            animate={{ scale: [0, 1.2, 1] }}

            transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatDelay: 2 }}

            className="absolute -top-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center"

        >

            <div className="w-2 h-2 bg-white rounded-full" />

        </motion.div>

      </motion.div>

      {/* Path Dots */}

      <svg className="absolute w-full h-full pointer-events-none opacity-30" viewBox="0 0 200 200">

        <path d="M 20,100 Q 100,20 180,100" fill="none" stroke="#FB923C" strokeWidth="2" strokeDasharray="4 4" />

      </svg>

    </div>

  );

};

