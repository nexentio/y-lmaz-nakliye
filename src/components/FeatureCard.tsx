"use client";

import React from 'react';

import { motion } from 'framer-motion';

interface FeatureCardProps {

  title: string;

  visual: React.ReactNode;

  delay?: number;

}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, visual, delay = 0 }) => {

  return (

    <motion.div

      initial={{ opacity: 0, y: 20 }}

      whileInView={{ opacity: 1, y: 0 }}

      viewport={{ once: true }}

      transition={{ duration: 0.5, delay }}

      className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 h-64 flex flex-col"

    >

      {/* Visual Container - takes up top portion */}

      <div className="flex-1 relative bg-slate-50 overflow-hidden group-hover:bg-orange-50/30 transition-colors duration-500">

        {visual}

      </div>

      {/* Text Container - Bottom */}

      <div className="p-5 relative z-10 bg-white border-t border-slate-50">

        <h3 className="text-sm font-bold text-slate-800 group-hover:text-brand-orange transition-colors duration-300">

          {title}

        </h3>

        <div className="w-0 group-hover:w-full h-0.5 bg-brand-orange mt-2 transition-all duration-500 ease-out" />

      </div>

    </motion.div>

  );

};

