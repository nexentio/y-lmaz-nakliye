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

