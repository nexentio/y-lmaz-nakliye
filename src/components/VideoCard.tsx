"use client";

import React from 'react';



const VideoCard: React.FC = () => {

  return (

    <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden bg-black">

      <video

        src="https://framerusercontent.com/assets/ajQnC0cVGtvBPJpqCCRM9zbQy7c.mp4"

        poster="https://framerusercontent.com/images/DypsTNmxrRW7PqSF2Maw0oUSz4.webp"

        autoPlay

        loop

        muted

        playsInline

        className="absolute inset-0 w-full h-full object-cover"

      />

      {/* Optional Overlay gradient if needed for text readability, though design seems clean */}

      <div className="absolute inset-0 bg-black/5 pointer-events-none" />

    </div>

  );

};



export default VideoCard;

