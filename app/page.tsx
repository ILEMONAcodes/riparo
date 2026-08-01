'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/navigation/Navbar';
import DevelopmentsSection from '@/components/sections/DevelopmentsSection';
import TestimonialsSection from '@/components/TestimonialsSection';

import { Search, MapPin, ChevronDown } from 'lucide-react';

// --- Animated Typewriter Text Component ---
function TypewriterText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (index < text.length) {
          setDisplayText((prev) => prev + text.charAt(index));
          setIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 3500);
        }
      } else {
        if (index > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
        }
      }
    };

    const speed = isDeleting ? 30 : 60;
    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [index, isDeleting, text]);

  return (
    <span className="relative">
      {displayText}
      <span className="animate-pulse text-[#FDBE19] ml-0.5 opacity-80">|</span>
    </span>
  );
}

export default function Home() {
  return (
    <main className="relative bg-[#1F0B05] text-white overflow-x-hidden min-h-screen">
      {/* NAVBAR */}
      <Navbar />

      {/* ------------------------------------------------------------- */}
      {/* HERO SECTION WITH CURVED BOTTOM CORNERS                       */}
      {/* ------------------------------------------------------------- */}
      <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden rounded-b-[2.5rem] md:rounded-b-[4.5rem] shadow-2xl bg-[#1F0B05] z-20">
        
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 filter brightness-75 contrast-110"
          >
            <source src="/riparo.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-[#1F0B05]/85 via-[#1F0B05]/65 to-[#1F0B05]/95" />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center flex flex-col items-center justify-center my-auto pt-24 pb-16">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#FDBE19]/30 text-[#FDBE19] text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FDBE19] animate-pulse" />
            REAL ESTATE | INVESTMENT | CONSTRUCTION
          </div>

          {/* Main Heading with Typewriter */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-snug mb-5 min-h-[60px] sm:min-h-[90px] flex items-center justify-center">
            <TypewriterText text="Inspired by You, defined by Excellence." />
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-xl font-normal leading-relaxed mb-10">
            From serviced estate developments in high-growth corridors to land banking and youth wealth empowerment — we deliver verified land titles and high-yield property investments.
          </p>

          {/* FLOATING SEARCH BAR */}
          <div className="w-full max-w-lg bg-white/10 backdrop-blur-xl border border-white/20 p-2 sm:p-2.5 rounded-xl sm:rounded-full shadow-2xl flex flex-col sm:flex-row items-center gap-2.5 mb-12">
            <div className="relative flex-1 w-full flex items-center px-4 py-2 sm:py-0">
              <MapPin className="w-4 h-4 text-[#FDBE19] mr-2.5 shrink-0" />
              <input
                type="text"
                placeholder="Search location (Ilorin, Ibadan)..."
                className="w-full bg-transparent text-white placeholder-white/60 focus:outline-none text-xs sm:text-sm font-medium"
              />
            </div>
            <button className="w-full sm:w-auto px-6 py-3 rounded-lg sm:rounded-full bg-[#FDBE19] text-[#1F0B05] font-bold text-[11px] sm:text-xs uppercase tracking-wider hover:bg-white transition-all flex items-center justify-center gap-2 shrink-0 shadow-lg active:scale-95">
              <Search className="w-4 h-4" />
              <span>Explore Plots</span>
            </button>
          </div>
        </div>

        {/* SCROLL DOWN INDICATOR */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-white/70 pointer-events-none">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] opacity-80">Scroll Down</span>
          <div className="w-6 h-6 flex items-center justify-center animate-bounce-slow rounded-full bg-white/5 border border-white/10">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

      </section>

      {/* ------------------------------------------------------------- */}
      {/* DEVELOPMENTS SECTION                                          */}
      {/* ------------------------------------------------------------- */}
      <DevelopmentsSection />

      {/* ------------------------------------------------------------- */}
      {/* TESTIMONIALS SECTION WITH REEL VIDEO                          */}
      {/* ------------------------------------------------------------- */}
      <TestimonialsSection />

    </main>
  );
}