"use client";

import React from 'react';

import { motion } from 'framer-motion';

import { MapPin, Headset, ShieldCheck, Star } from 'lucide-react';

// --- Visual 4: Professional Team (Replaces DocumentsVisual) ---

export const DocumentsVisual = () => {

  return (

    <div className="relative w-full h-full flex items-center justify-center bg-slate-50 overflow-hidden">

      {/* Dynamic Background Pattern */}

      <div className="absolute inset-0 opacity-[0.03]" 

           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      {/* Floating Particles */}

      <motion.div 

         animate={{ y: [-10, -30], opacity: [0, 1, 0] }}

         transition={{ duration: 3, repeat: Infinity, ease: "linear" }}

         className="absolute bottom-10 left-10 w-1 h-1 bg-brand-orange rounded-full"

      />

      <motion.div 

         animate={{ y: [-10, -40], opacity: [0, 1, 0] }}

         transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "linear" }}

         className="absolute bottom-10 right-20 w-1.5 h-1.5 bg-slate-400 rounded-full"

      />

      {/* Team Container */}

      <div className="relative w-48 h-32">

          

          {/* Connector Lines (SVG) */}

          <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-sm overflow-visible">

            {/* Lines connecting center to others */}

             <motion.line 

               x1="50%" y1="70%" x2="20%" y2="30%" 

               stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4"

               initial={{ pathLength: 0, opacity: 0.5 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }}

             />

             <motion.line 

               x1="50%" y1="70%" x2="80%" y2="30%" 

               stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4"

               initial={{ pathLength: 0, opacity: 0.5 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }}

             />

          </svg>

          {/* Member 1: Logistics (Left) */}

          <motion.div 

             className="absolute top-0 left-0"

             initial={{ scale: 0, x: 20, y: 20 }}

             animate={{ scale: 1, x: 0, y: 0 }}

             transition={{ delay: 0.2, type: "spring", stiffness: 200 }}

          >

             <TeamAvatar icon={<MapPin size={18} />} color="bg-slate-700" delay={0} />

             <motion.div 

                className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white border border-slate-100 px-2 py-0.5 rounded shadow-sm whitespace-nowrap"

                initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}

             >

                <div className="h-1 w-8 bg-slate-200 rounded-full overflow-hidden">

                    <motion.div className="h-full bg-green-500 w-full" initial={{ x: '-100%' }} animate={{ x: 0 }} transition={{ delay: 1.2, duration: 0.5 }} />

                </div>

             </motion.div>

          </motion.div>

          {/* Member 2: Support (Right) */}

          <motion.div 

             className="absolute top-0 right-0"

             initial={{ scale: 0, x: -20, y: 20 }}

             animate={{ scale: 1, x: 0, y: 0 }}

             transition={{ delay: 0.4, type: "spring", stiffness: 200 }}

          >

             <TeamAvatar icon={<Headset size={18} />} color="bg-slate-700" delay={1} />

             <motion.div 

                className="absolute -top-2 -right-2 bg-green-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full shadow-md z-20"

                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.4, type: 'spring' }}

             >

                ON

             </motion.div>

          </motion.div>

          {/* Member 3: Leader / Driver (Center Bottom) */}

          <motion.div 

             className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20"

             initial={{ scale: 0, y: -20 }}

             animate={{ scale: 1, y: 0 }}

             transition={{ delay: 0.6, type: "spring", stiffness: 200 }}

          >

             <div className="relative">

                 <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-orange-600 rounded-2xl shadow-lg shadow-orange-500/20 flex items-center justify-center text-white transform rotate-45 border-4 border-white">

                    <div className="transform -rotate-45">

                        <ShieldCheck size={28} />

                    </div>

                 </div>

                 {/* Floating Stars */}

                 <motion.div 

                    className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-0.5"

                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}

                 >

                    {[1,2,3,4,5].map(i => (

                        <Star key={i} size={8} className="text-yellow-400 fill-yellow-400" />

                    ))}

                 </motion.div>

             </div>

          </motion.div>

      </div>

    </div>

  );

};

const TeamAvatar = ({ icon, color, delay }: { icon: any, color: string, delay: number }) => (

    <motion.div 

      animate={{ y: [-3, 3, -3] }}

      transition={{ duration: 3, delay: delay, repeat: Infinity, ease: "easeInOut" }}

      className={`w-12 h-12 ${color} rounded-xl shadow-md flex items-center justify-center text-white border-2 border-white relative z-10`}

    >

        {icon}

    </motion.div>

);
