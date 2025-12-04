"use client";

import React from 'react';
import Navbar from './Navbar';

export default function NavbarWrapper() {
  return (
    <>
      {/* Spacer for fixed navbar */}
      <div className="w-full h-20"></div>
      {/* Navbar - Fixed at top for all pages */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
    </>
  );
}

