'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';
import { 
  FaInstagram, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn 
} from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <footer className="bg-[#1F0B05] text-white pt-16 pb-10 border-t border-[#7D4F2E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP SECTION: 4-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* COLUMN 1: BRAND OVERVIEW WITH INVERTED WHITE LOGO */}
          <div className="space-y-4">
            <Link href="/" className="relative w-36 h-12 block">
              <Image
                src="/logo.png"
                alt="riparo"
                fill
                priority
                className="object-contain object-left brightness-0 invert"
              />
            </Link>

            <p className="text-xs text-white/70 leading-relaxed font-normal pr-4">
              Your trusted partner for verified, high-yield land and luxury real estate investments across Nigeria.
            </p>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium text-white/70">
              <li><a href="#" className="hover:text-[#FDBE19] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#FDBE19] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#FDBE19] transition-colors">Featured Estates</a></li>
              <li><a href="#" className="hover:text-[#FDBE19] transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-[#FDBE19] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* COLUMN 3: CONTACT INFO */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider">
              Contact Info
            </h4>
            <ul className="space-y-3 text-xs font-medium text-white/80">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FDBE19] shrink-0" />
                <span>+234 906 000 1552</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FDBE19] shrink-0" />
                <span>info@riparo.ng</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#FDBE19] shrink-0" />
                <span>Ilorin, Kwara State, Nigeria</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: STAY UPDATED / NEWSLETTER */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider">
              Stay Updated
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Subscribe to our newsletter for the latest properties, prime plots, and updates.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 pt-1">
              <input
                type="email"
                placeholder="Your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/40 text-xs focus:outline-none focus:border-[#FDBE19] transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#FDBE19] text-[#1F0B05] font-bold text-xs hover:bg-yellow-400 transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* BOTTOM SECTION: COPYRIGHT & SOCIAL ICONS */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>&copy; {new Date().getFullYear()} riparo Real Estate. All rights reserved.</p>

          {/* SOCIAL LINKS (FontAwesome via react-icons/fa) */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/riparo_ng/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#FDBE19] transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-[#FDBE19] transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-3.5 h-3.5" />
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-[#FDBE19] transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="w-3.5 h-3.5" />
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-[#FDBE19] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}