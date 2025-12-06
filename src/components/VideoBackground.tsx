"use client";

import React, { useRef, useEffect, useState } from 'react';



export default function VideoBackground() {

  const videoRef = useRef<HTMLVideoElement>(null);

  const [fadeOverlayOpacity, setFadeOverlayOpacity] = useState(0);

  const fadeDuration = 0.5; // Fade süresi (saniye) - 0.5 saniyede smooth fade

  const animationFrameRef = useRef<number | null>(null);

  const fadeStartTimestampRef = useRef<number | null>(null);

  const fadeDirectionRef = useRef<'in' | 'out' | null>(null);

  const isAnimatingRef = useRef<boolean>(false);

  const lastFadeTriggerRef = useRef<number | null>(null);



  useEffect(() => {

    const video = videoRef.current;

    if (!video) return;



    // Slow motion için playbackRate'i 0.65 yapıyoruz

    video.playbackRate = 0.65;

    video.defaultPlaybackRate = 0.65;



    const animateFade = (timestamp: number) => {

      if (!fadeStartTimestampRef.current) {

        fadeStartTimestampRef.current = timestamp;

      }



      const elapsed = (timestamp - fadeStartTimestampRef.current) / 1000; // Saniyeye çevir

      const progress = Math.min(elapsed / fadeDuration, 1); // 0-1 arası



      if (fadeDirectionRef.current === 'in') {

        // Fade in: 0'dan 1'e

        setFadeOverlayOpacity(progress);

      } else if (fadeDirectionRef.current === 'out') {

        // Fade out: 1'den 0'a

        setFadeOverlayOpacity(1 - progress);

      }



      if (progress < 1) {

        // Animasyon devam ediyor

        animationFrameRef.current = requestAnimationFrame(animateFade);

      } else {

        // Animasyon tamamlandı

        animationFrameRef.current = null;

        fadeStartTimestampRef.current = null;

        isAnimatingRef.current = false;

      }

    };



    const handleTimeUpdate = () => {

      if (!video.duration) return;



      const currentTime = video.currentTime;

      const duration = video.duration;

      const fadeStartTime = duration - fadeDuration;



      // Video sonuna yaklaşıyor, fade in başlat (sadece bir kez)

      if (currentTime >= fadeStartTime && currentTime < duration) {

        // Animasyon zaten devam ediyorsa veya aynı fade zaten başlatıldıysa, tekrar başlatma

        if (!isAnimatingRef.current && fadeDirectionRef.current !== 'in') {

          fadeDirectionRef.current = 'in';

          fadeStartTimestampRef.current = null;

          isAnimatingRef.current = true;

          lastFadeTriggerRef.current = currentTime;

          animationFrameRef.current = requestAnimationFrame(animateFade);

        }

      } 

      // Video başında, fade out başlat (sadece bir kez)

      else if (currentTime < fadeDuration && currentTime >= 0) {

        // Animasyon zaten devam ediyorsa veya aynı fade zaten başlatıldıysa, tekrar başlatma

        if (!isAnimatingRef.current && fadeDirectionRef.current !== 'out') {

          fadeDirectionRef.current = 'out';

          fadeStartTimestampRef.current = null;

          isAnimatingRef.current = true;

          lastFadeTriggerRef.current = currentTime;

          animationFrameRef.current = requestAnimationFrame(animateFade);

        }

      } 

      // Normal oynatma bölgesi

      else {

        // Animasyon devam ediyorsa durdur

        if (animationFrameRef.current) {

          cancelAnimationFrame(animationFrameRef.current);

          animationFrameRef.current = null;

        }

        isAnimatingRef.current = false;

        fadeDirectionRef.current = null;

        fadeStartTimestampRef.current = null;

        lastFadeTriggerRef.current = null;

        setFadeOverlayOpacity(0);

      }

    };



    const handleSeeking = () => {

      // Seek yapıldığında animasyonu sıfırla

      if (animationFrameRef.current) {

        cancelAnimationFrame(animationFrameRef.current);

        animationFrameRef.current = null;

      }

      isAnimatingRef.current = false;

      fadeStartTimestampRef.current = null;

      fadeDirectionRef.current = null;

      lastFadeTriggerRef.current = null;

      handleTimeUpdate();

    };



    video.addEventListener('timeupdate', handleTimeUpdate);

    video.addEventListener('seeking', handleSeeking);



    return () => {

      video.removeEventListener('timeupdate', handleTimeUpdate);

      video.removeEventListener('seeking', handleSeeking);

      if (animationFrameRef.current) {

        cancelAnimationFrame(animationFrameRef.current);

      }

    };

  }, []);



  return (

    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden" style={{ willChange: 'transform' }}>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-[#1C1817]/40 z-10"></div>

      

      {/* Gradient Overlay for bottom text readability */}

      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1817]/90 via-transparent to-[#1C1817]/30 z-10"></div>

      {/* Video */}

      <video

        ref={videoRef}

        autoPlay

        loop

        muted

        playsInline

        preload="auto"

        className="w-full h-full object-cover scale-105"

        style={{ 

          transform: 'translateZ(0) scale(1.05)',

          willChange: 'transform',

          backfaceVisibility: 'hidden',

          WebkitBackfaceVisibility: 'hidden'

        }}

      >

        <source src="/hero-video.mp4" type="video/mp4" />

        Your browser does not support the video tag.

      </video>

      {/* Siyah Fade Overlay - Döngü geçişi için */}

      <div 

        className="absolute inset-0 bg-black z-20"

        style={{ 

          opacity: fadeOverlayOpacity,

          willChange: 'opacity',

          transform: 'translateZ(0)',

          backfaceVisibility: 'hidden',

          WebkitBackfaceVisibility: 'hidden',

          transition: 'none' // requestAnimationFrame ile kontrol ediyoruz, CSS transition'a gerek yok

        }}

      ></div>

    </div>

  );

}

