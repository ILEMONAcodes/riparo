'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  height?: number;
  variant?: 'dark' | 'light';
}

export default function Logo({ className = '', height = 36, variant = 'light' }: LogoProps) {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src="/logo.png"
        alt="Riparo Logo"
        style={{ height: `${height}px` }}
        className={`w-auto object-contain transition-opacity duration-300 ${
          variant === 'light' ? 'brightness-0 invert' : ''
        }`}
      />
    </div>
  );
}