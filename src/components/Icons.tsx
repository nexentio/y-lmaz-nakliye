import React from 'react';



interface IconProps {

  className?: string;

}

// Recreating the specific arrow from the image:

// It looks like a vertical bar followed by a right arrow, or a specific stylized arrow.

// Based on the image "framer-b2bu52", it is an orange arrow.

// Looking closely at the crop, it's a "Step Arrow" or "Start Arrow".

export const ArrowIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => {

  return (

    <svg 

      viewBox="0 0 24 24" 

      fill="none" 

      xmlns="http://www.w3.org/2000/svg" 

      className={className}

      stroke="currentColor"

      strokeWidth="2"

      strokeLinecap="round"

      strokeLinejoin="round"

    >

      {/* Vertical line at start */}

      <path d="M3 5v14" strokeWidth="2.5" />

      {/* Arrow shaft */}

      <path d="M7 12h14" strokeWidth="2.5" />

      {/* Arrow head */}

      <path d="M15 6l6 6-6 6" strokeWidth="2.5" />

    </svg>

  );

};

// Fleet Section Icons

export const GPSIcon = () => (

  <svg viewBox="0 0 100 100" className="w-24 h-24 text-[#f94006]" fill="none" stroke="currentColor" strokeWidth="2">

    <path d="M50 85 C50 85 20 55 20 35 C20 18.43 33.43 5 50 5 C66.57 5 80 18.43 80 35 C80 55 50 85 50 85Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>

    <circle cx="50" cy="35" r="10" fill="currentColor" />

    <path d="M20 15 Q 10 25 20 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.5" fill="none" />

    <path d="M80 15 Q 90 25 80 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.5" fill="none" />

  </svg>

);

export const DashboardIcon = () => (

  <svg viewBox="0 0 120 100" className="w-32 h-24" fill="none">

    {/* Tablet Frame */}

    <rect x="10" y="10" width="100" height="80" rx="5" fill="#1c1817" />

    <rect x="15" y="15" width="90" height="70" rx="2" fill="white" />

    

    {/* Charts */}

    <circle cx="40" cy="50" r="15" stroke="#f94006" strokeWidth="4" fill="none" strokeDasharray="60 100" />

    <circle cx="80" cy="50" r="15" stroke="#1c1817" strokeWidth="4" fill="none" strokeDasharray="40 100" transform="rotate(-90 80 50)" />

    

    <rect x="25" y="75" width="20" height="4" rx="2" fill="#e5e7eb" />

    <rect x="55" y="75" width="40" height="4" rx="2" fill="#e5e7eb" />

  </svg>

);

export const MaintenanceIcon = () => (

  <svg viewBox="0 0 100 100" className="w-24 h-24 text-[#f94006]" fill="none" stroke="currentColor">

     {/* Car Outline */}

     <path d="M15 50 L20 30 L30 25 L70 25 L80 30 L85 50" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

     <path d="M15 50 V70 H85 V50" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

     <circle cx="30" cy="70" r="8" strokeWidth="4" />

     <circle cx="70" cy="70" r="8" strokeWidth="4" />

     

     {/* Hood Open */}

     <path d="M20 30 L30 10 H70 L80 30" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

     <path d="M45 40 L55 35" strokeWidth="4" strokeLinecap="round" /> 

  </svg>

);

export const RoadsideIcon = () => (

  <svg viewBox="0 0 100 100" className="w-24 h-24 text-[#f94006]" fill="none">

    {/* Phone */}

    <rect x="35" y="20" width="30" height="60" rx="4" stroke="currentColor" strokeWidth="4" />

    <path d="M45 70 H55" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />

    {/* Alert Bubble */}

    <circle cx="75" cy="30" r="12" fill="#f94006" />

    <path d="M75 24 V32 M75 36 V36" stroke="white" strokeWidth="3" strokeLinecap="round" />

  </svg>

);

export const RouteIcon = () => (

  <svg viewBox="0 0 100 100" className="w-24 h-24 text-[#f94006]" fill="none">

    {/* Path */}

    <path d="M20 80 C 20 80, 40 40, 50 50 S 80 20, 80 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" />

    <circle cx="20" cy="80" r="6" fill="currentColor" />

    <circle cx="80" cy="20" r="6" fill="#1c1817" />

  </svg>

);

export const EuroIcon = () => (

  <svg viewBox="0 0 100 100" className="w-32 h-24" fill="none">

    {/* Tree Trunk */}

    <path d="M50 80 L50 60" stroke="#1c1817" strokeWidth="4" strokeLinecap="round" />

    {/* Leaves */}

    <path d="M50 60 C30 60 20 40 35 30 C30 20 45 10 50 15 C55 10 70 20 65 30 C80 40 70 60 50 60Z" fill="#dcfce7" stroke="#1c1817" strokeWidth="3" />

    {/* Falling leaf */}

    <path d="M60 40 Q 65 45 70 42" stroke="#f94006" strokeWidth="2" fill="none" />

  </svg>

);

export const ArrowRight = () => (

  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">

    <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

  </svg>

);

