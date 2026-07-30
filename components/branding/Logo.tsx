'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  height?: number;
}

export default function Logo({ className = '', height = 40 }: LogoProps) {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Riparo Real Estate & Construction"
        width={180}
        height={height}
        priority
        className="w-auto object-contain"
        style={{ height: `${height}px` }}
      />
    </div>
  );
}