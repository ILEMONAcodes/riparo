'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LOGO WITH DYNAMIC CONTRAST & GLASS BADGE WHEN TRANSPARENT */}
          <a
            href="#"
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 ${
              !scrolled
                ? 'bg-white/10 backdrop-blur-md border border-white/20 shadow-sm'
                : ''
            }`}
          >
            <img
              src="/logo.png"
              alt="Riparo Real Estate"
              className={`h-8 sm:h-9 w-auto object-contain transition-all duration-300 ${
                !scrolled ? 'brightness-0 invert drop-shadow' : 'brightness-100'
              }`}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/riparo-logo.png';
              }}
            />
          </a>

          {/* DESKTOP NAVIGATION LINKS */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold transition-colors duration-300">
            <a
              href="#"
              className={`${
                scrolled
                  ? 'text-[#1F0B05] hover:text-[#FDBE19]'
                  : 'text-white hover:text-[#FDBE19] drop-shadow-sm'
              } transition-colors`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`${
                scrolled
                  ? 'text-[#1F0B05] hover:text-[#FDBE19]'
                  : 'text-white hover:text-[#FDBE19] drop-shadow-sm'
              } transition-colors`}
            >
              About
            </a>
            <a
              href="#developments"
              className={`${
                scrolled
                  ? 'text-[#1F0B05] hover:text-[#FDBE19]'
                  : 'text-white hover:text-[#FDBE19] drop-shadow-sm'
              } transition-colors`}
            >
              Developments
            </a>
            <a
              href="#contact"
              className={`${
                scrolled
                  ? 'text-[#1F0B05] hover:text-[#FDBE19]'
                  : 'text-white hover:text-[#FDBE19] drop-shadow-sm'
              } transition-colors`}
            >
              Contact
            </a>
          </div>

          {/* CALL TO ACTION BUTTON */}
          <div className="hidden md:flex items-center">
            <a
              href="#inspection"
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md active:scale-95 ${
                scrolled
                  ? 'bg-[#1F0B05] text-white hover:bg-[#FDBE19] hover:text-[#1F0B05]'
                  : 'bg-[#FDBE19] text-[#1F0B05] hover:bg-white hover:text-[#1F0B05]'
              }`}
            >
              <span>Book Inspection</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-[#1F0B05]' : 'text-white'
            }`}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-6 rounded-3xl bg-white shadow-2xl border border-gray-100 text-[#1F0B05] flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold py-2 border-b border-gray-100"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold py-2 border-b border-gray-100"
            >
              About
            </a>
            <a
              href="#developments"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold py-2 border-b border-gray-100"
            >
              Developments
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold py-2 border-b border-gray-100"
            >
              Contact
            </a>
            <a
              href="#inspection"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-3 rounded-xl bg-[#FDBE19] text-[#1F0B05] font-bold text-sm uppercase tracking-wider"
            >
              Book Inspection
            </a>
          </div>
        )}
      </div>
    </header>
  );
}