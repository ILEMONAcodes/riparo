'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

interface Property {
  id: string;
  name: string;
  tagline: string;
  location: string;
  state: string;
  category: string;
  description: string;
  titleStatus: string;
  price: string;
  imageUrl: string;
  hoverColor: string;
  hoverTextColor: string;
}

const properties: Property[] = [
  {
    id: 'eco-ibadan',
    name: 'Eco-Ibadan',
    tagline: 'First Eco-friendly estate in Ibadan',
    location: 'Ido, Ibadan',
    state: 'Oyo State',
    category: 'New Launch',
    description:
      'Redefining sustainable living in Oyo State with solar-integrated power, smart waste management, and vast greenery in a high-growth corridor.',
    titleStatus: 'Registered Survey, C of O (in view)',
    price: 'Contact for Pricing',
    imageUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    hoverColor: 'bg-[#7D4F2E]',
    hoverTextColor: 'text-white',
  },
  {
    id: 'uniciti',
    name: 'UNICITI',
    tagline: 'First Smart Estate in Malete',
    location: 'Malete (KWASU)',
    state: 'Kwara State',
    category: 'Smart Estate',
    description:
      'Purpose-built smart infrastructure catering to high rental yields, student housing, and strategic land appreciation near KWASU campus.',
    titleStatus: 'Verified Survey Title',
    price: '₦1,000,000 / 150 SQM',
    imageUrl:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    hoverColor: 'bg-[#FDBE19]',
    hoverTextColor: 'text-[#1F0B05]',
  },
  {
    id: 'emiratis-court',
    name: "Emirati's Court",
    tagline: 'Corridors of Growth & Prestige',
    location: 'Oke-Oyi, Ilorin',
    state: 'Kwara State',
    category: 'High ROI Corridor',
    description:
      'A prestigious gated development designed for long-term wealth security, offering prime residential and commercial plots.',
    titleStatus: 'Approved Survey & C of O Processed',
    price: '₦900,000 / 150 SQM',
    imageUrl:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    hoverColor: 'bg-[#1F0B05]',
    hoverTextColor: 'text-white',
  },
];

export default function DevelopmentsSection() {
  return (
    <section
      id="developments"
      className="relative z-10 bg-white pt-24 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 -mt-20 border-none outline-none overflow-hidden"
    >
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#FDBE19]/15 via-[#F5EBE1]/40 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-8">
          {/* HEADLINE - SLIDES IN FROM LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1F0B05] tracking-tight leading-[1.08]">
              Discover Your Next Investment
            </h2>
          </motion.div>

          {/* SUBTITLE - SLIDES IN FROM RIGHT */}
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-sm sm:text-base text-[#1F0B05]/70 max-w-md font-normal leading-relaxed md:pb-2"
          >
            Explore verified land titles and high-growth real estate assets
            engineered for long-term security and exceptional yield.
          </motion.p>
        </div>

        {/* PROPERTY CARDS */}
        <div className="grid grid-cols-1 gap-10 sm:gap-14">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link
                href={`/developments/${property.id}`}
                className="group relative block w-full min-h-[440px] sm:min-h-[500px] rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-black/5"
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image
                    src={property.imageUrl}
                    alt={property.name}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Default Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:opacity-0 transition-opacity duration-500" />

                  {/* Color Overlay on Hover */}
                  <div
                    className={`absolute inset-0 ${property.hoverColor} opacity-0 group-hover:opacity-95 transition-opacity duration-500`}
                  />
                </div>

                {/* CARD CONTENT */}
                <div className="relative z-10 h-full min-h-[440px] sm:min-h-[500px] p-6 sm:p-10 flex flex-col justify-between text-white">
                  {/* CARD TOP BADGES */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold tracking-wider uppercase border border-white/30">
                      {property.category}
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white/90 text-xs font-medium border border-white/10">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      {property.titleStatus}
                    </span>
                  </div>

                  {/* CARD BOTTOM DETAILS */}
                  <div className="pt-12 sm:pt-0">
                    <div className="flex items-center gap-2 text-white/80 text-xs sm:text-sm font-medium mb-2 group-hover:text-white/90">
                      <MapPin className="w-4 h-4 text-[#FDBE19]" />
                      <span>
                        {property.location}, {property.state}
                      </span>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                      <div>
                        <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-2 group-hover:translate-x-1 transition-transform duration-300">
                          {property.name}
                        </h3>
                        <p className="text-xs sm:text-base text-white/80 max-w-xl line-clamp-2 font-normal leading-relaxed">
                          {property.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between lg:justify-end gap-4 sm:gap-6 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/20">
                        <div className="text-left lg:text-right">
                          <span className="text-[10px] sm:text-xs uppercase text-white/70 tracking-wider font-semibold block">
                            Investment
                          </span>
                          <span className="text-base sm:text-xl font-bold text-[#FDBE19]">
                            {property.price}
                          </span>
                        </div>

                        <span className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-white text-[#1F0B05] font-bold text-xs uppercase tracking-wider group-hover:bg-[#FDBE19] transition-colors duration-300 shadow-lg shrink-0">
                          <span>View Project</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}