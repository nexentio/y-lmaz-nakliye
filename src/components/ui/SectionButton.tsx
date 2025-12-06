"use client";

import React from 'react';



import { ArrowRight } from 'lucide-react';

import { motion } from 'framer-motion';

export const SectionButton = () => {

  return (

    <motion.button 

      className="group flex items-center gap-3"

      whileHover="hover"

      initial="initial"

    >

      <div className="px-6 py-3 rounded-full border border-brand-orange/20 text-brand-dark bg-white/50 backdrop-blur-sm transition-colors duration-300 group-hover:bg-brand-orange/5">

        <span className="text-sm font-semibold tracking-wide">Hakkımızda Daha Fazla</span>

      </div>

      <div className="w-10 h-10 rounded-full border border-brand-orange/20 flex items-center justify-center bg-white/50 backdrop-blur-sm relative overflow-hidden">

        <div className="absolute inset-0 bg-brand-orange/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />

        <ArrowRight className="w-4 h-4 text-brand-orange relative z-10" />

      </div>

    </motion.button>

  );

};

