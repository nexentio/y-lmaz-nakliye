"use client";

import React from 'react';



import { motion } from 'framer-motion';

import { MapPin, Warehouse } from 'lucide-react';

export const TruckVisual = () => {

  return (

    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">

      

      {/* Background Elements */}

      <div className="absolute top-8 left-12 text-gray-300">

        <Warehouse size={24} />

      </div>

      <div className="absolute top-6 right-12 text-brand-orange">

        <MapPin size={24} fill="currentColor" className="text-brand-orange/20" />

      </div>

      {/* Road */}

      <div className="w-3/4 h-[1px] border-b border-dashed border-gray-400 mt-12 relative">

        

        {/* Truck Container */}

        <motion.div

          className="absolute -top-6"

          animate={{ x: [-60, 140] }}

          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}

        >

          {/* Truck Body */}

          <div className="relative">

            <div className="w-10 h-6 bg-brand-orange rounded-sm relative z-10">

                {/* Windshield */}

                <div className="absolute top-1 right-0 w-3 h-3 bg-white/30 rounded-tl-sm"></div>

            </div>

            <div className="absolute top-2 -right-3 w-4 h-4 bg-brand-orange rounded-sm z-0"></div>

            

            {/* Wheels */}

            <motion.div 

                className="absolute -bottom-2 left-1 w-3 h-3 bg-gray-800 rounded-full border border-gray-600"

                animate={{ rotate: 360 }}

                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}

            />

             <motion.div 

                className="absolute -bottom-2 right-1 w-3 h-3 bg-gray-800 rounded-full border border-gray-600"

                animate={{ rotate: 360 }}

                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}

            />

            <motion.div 

                className="absolute -bottom-2 -right-2 w-3 h-3 bg-gray-800 rounded-full border border-gray-600"

                animate={{ rotate: 360 }}

                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}

            />

          </div>

        </motion.div>

      </div>

    </div>

  );

};

