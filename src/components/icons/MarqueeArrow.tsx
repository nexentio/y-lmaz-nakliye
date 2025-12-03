import React from 'react';



export const MarqueeArrow: React.FC<{ className?: string }> = ({ className }) => (

  <svg 

    viewBox="0 0 134 119" 

    fill="rgba(255,255,255,0.1)" 

    xmlns="http://www.w3.org/2000/svg"

    className={className}

  >

    <path d="M 13.336 53.127 L 13.229 0 L 0 0.024 L 0.22 119 L 13.448 118.976 L 13.351 66.137 L 107.509 66.137 L 61.08 109.783 L 70.866 118.981 L 134 59.631 L 70.865 0.282 L 61.081 9.48 L 107.509 53.127 Z" />

  </svg>

);

