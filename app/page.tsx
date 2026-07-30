'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navigation/Navbar';
import BrandIntro from '@/components/ui/BrandIntro';
import DevelopmentsSection from '@/components/sections/DevelopmentsSection';
import TestimonialsSection from '@/components/TestimonialsSection';

import { Search, MapPin } from 'lucide-react';

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <main className="relative bg-[#1F0B05] text-[#1F0B05] overflow-x-hidden">
      
      {/* PRELOADER INTRO */}
      {!introDone && <BrandIntro onComplete={() => setIntroDone(true)} />}

      {/* NAVBAR */}
      <Navbar />

      {/* ------------------------------------------------------------- */}
      {/* HERO SECTION WITH VIDEO BACKGROUND                            */}
      {/* ------------------------------------------------------------- */}
      <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden rounded-b-[2.5rem] md:rounded-b-[4.5rem] shadow-2xl bg-[#1F0B05] pt-28 z-20 pb-12">
        
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 filter brightness-90"
          >
            <source src="/riparo.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-b from-[#1F0B05]/80 via-[#1F0B05]/50 to-[#1F0B05]/90" />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center flex flex-col items-center justify-center my-auto">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#FDBE19]/40 text-[#FDBE19] text-xs font-semibold tracking-wider uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FDBE19] animate-pulse" />
            Building Systems Rooted in Excellence
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl">
            Wealth Created Through{' '}
            <span className="text-[#FDBE19] underline decoration-[#FDBE19]/40 underline-offset-8">
              Visionary
            </span>{' '}
            Real Estate.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl font-normal leading-relaxed mb-10">
            From serviced estate developments in high-growth corridors to land banking and youth wealth empowerment — we deliver verified land titles and high-yield property investments.
          </p>

          {/* FLOATING SEARCH BAR */}
          <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-2 sm:p-3 rounded-2xl md:rounded-full shadow-2xl flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full flex items-center px-4 py-2 sm:py-0">
              <MapPin className="w-5 h-5 text-[#FDBE19] mr-3 shrink-0" />
              <input
                type="text"
                placeholder="Search location (Ilorin, Ibadan)..."
                className="w-full bg-transparent text-white placeholder-white/60 focus:outline-none text-sm font-medium"
              />
            </div>
            <button className="w-full sm:w-auto px-7 py-3.5 rounded-xl sm:rounded-full bg-[#FDBE19] text-[#1F0B05] font-bold text-xs uppercase tracking-wider hover:bg-white transition-all flex items-center justify-center gap-2 shrink-0 shadow-lg active:scale-95">
              <Search className="w-4 h-4" />
              <span>Explore Plots</span>
            </button>
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

      {/* ------------------------------------------------------------- */}
      {/* FOOTER SECTION                                                */}
      {/* ------------------------------------------------------------- */}
     

    </main>
  );
}