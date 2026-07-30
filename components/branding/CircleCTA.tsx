'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CircleCTAProps {
  label: string;
  sublabel?: string;
  onClick?: () => void;
  variant?: 'yellow' | 'brown' | 'outline';
  className?: string;
}

export default function CircleCTA({
  label,
  sublabel,
  onClick,
  variant = 'yellow',
  className = '',
}: CircleCTAProps) {
  const baseStyles =
    'group relative inline-flex items-center gap-4 rounded-full p-2 pr-7 transition-all duration-300 ease-out cursor-pointer hover:scale-105 shadow-sm';

  const variants = {
    // Logo Yellow Fill with Deep Brown Text
    yellow:
      'bg-[#FDBE19] text-[#1F0B05] hover:bg-[#E0A312] hover:shadow-[0_6px_25px_rgba(253,190,25,0.45)]',
    
    // Logo Deep Brown Fill with White Text
    brown:
      'bg-[#1F0B05] text-white hover:bg-[#3D1A10] hover:shadow-[0_6px_25px_rgba(31,11,5,0.3)]',
    
    // Bordered Outline Variant
    outline:
      'bg-white text-[#1F0B05] border-2 border-[#1F0B05]/15 hover:border-[#FDBE19] hover:bg-[#FDBE19]/10',
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {/* Circle Icon Container */}
      <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[#1F0B05] text-[#FDBE19] group-hover:bg-[#FDBE19] group-hover:text-[#1F0B05] transition-colors duration-300">
        <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />

        {/* Top-Right Yellow Dot Accent */}
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#FDBE19] border-2 border-white group-hover:bg-[#1F0B05] transition-colors" />

        {/* Top-Left Brown Dot Accent */}
        <span className="absolute -top-1 -left-1 w-2.5 h-2.5 rounded-full bg-[#3D1A10] border border-white" />
      </div>

      <div className="text-left">
        <span className="block font-bold text-xs tracking-wider uppercase">{label}</span>
        {sublabel && <span className="block text-[10px] opacity-80">{sublabel}</span>}
      </div>
    </button>
  );
}