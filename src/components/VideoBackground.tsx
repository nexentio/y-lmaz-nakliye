"use client";

import React from 'react';



export default function VideoBackground() {

  return (

    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-[#1C1817]/40 z-10"></div>

      

      {/* Gradient Overlay for bottom text readability */}

      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1817]/90 via-transparent to-[#1C1817]/30 z-10"></div>

      {/* Video */}

      {/* Using the exact video source from the user request */}

      <video

        autoPlay

        loop

        muted

        playsInline

        className="w-full h-full object-cover scale-105"

        poster="https://framerusercontent.com/images/YS8lEtRBWRD8b6HqR7UwqBKcVAc.jpg"

      >

        <source src="https://framerusercontent.com/assets/nlLeQdznBuxmmLqUPUa7AdxE4l4.mp4" type="video/mp4" />

        Your browser does not support the video tag.

      </video>

    </div>

  );

}

