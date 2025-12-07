"use client";

import React from 'react';

import { motion } from 'framer-motion';

import { FileCheck } from 'lucide-react';

export const DocumentsVisual = () => {

  const cards = [

    { title: 'Cert', color: 'bg-white', y: 0, scale: 1, z: 30 },

    { title: 'Safety', color: 'bg-slate-50', y: -8, scale: 0.95, z: 20 },

    { title: 'HACCP', color: 'bg-slate-100', y: -16, scale: 0.9, z: 10 },

  ];

  return (

    <div className="relative w-full h-full flex items-center justify-center bg-slate-50/50">

        {/* Animated Stack */}

        <div className="relative mt-4">

            {cards.map((card, i) => (

                <motion.div

                    key={i}

                    className={`absolute left-1/2 -translate-x-1/2 w-24 h-32 ${card.color} border border-slate-200 rounded-lg shadow-sm flex flex-col items-center p-3`}

                    style={{ zIndex: card.z, top: card.y }}

                    animate={{ 

                        y: [card.y, card.y - 10, card.y],

                    }}

                    transition={{ 

                        duration: 3, 

                        delay: i * 0.5, 

                        repeat: Infinity, 

                        ease: "easeInOut" 

                    }}

                >

                    {/* Fake text lines */}

                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mb-2">

                         <FileCheck className="w-4 h-4 text-brand-orange" />

                    </div>

                    <div className="w-full h-1 bg-slate-200 rounded mb-1" />

                    <div className="w-3/4 h-1 bg-slate-200 rounded mb-3" />

                    

                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{card.title}</span>

                    

                    {/* Animated Checkmark for top card */}

                    {i === 0 && (

                        <motion.div 

                            className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"

                            animate={{ scale: [1, 1.2, 1] }}

                            transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}

                        >

                            <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="4">

                                <polyline points="20 6 9 17 4 12" />

                            </svg>

                        </motion.div>

                    )}

                </motion.div>

            ))}

        </div>

        

        {/* Glow effect at bottom */}

        <div className="absolute bottom-8 w-24 h-4 bg-black/10 blur-md rounded-full" />

    </div>

  );

};

