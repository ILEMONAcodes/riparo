'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Play, Video, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  initials: string;
  rating: number;
  content: string;
  propertyRef?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Hussaini Khadijat',
    role: 'CEO, Tech Innovations',
    initials: 'HK',
    rating: 5,
    content:
      'Riparo’s payment plans for Eco-Ibadan were completely transparent and accommodating. They made acquiring prime real estate in Oyo State effortless and secure.',
    propertyRef: 'Eco-Ibadan',
  },
  {
    id: '2',
    name: 'Erinayo',
    role: 'Lead Designer, Dynamics Agency',
    initials: 'E',
    rating: 5,
    content:
      'If you’re looking for verified land assets with zero legal hassle, Riparo is the go-to brand. Their team guided us through every step at Emirati’s Court.',
    propertyRef: "Emirati's Court",
  },
  {
    id: '3',
    name: 'Ashiyanbola',
    role: 'Founder, Mobile Dynamics',
    initials: 'A',
    rating: 5,
    content:
      'Investing in UNICITI near KWASU was the best decision for high student housing yields. Riparo exhibits absolute excellence and reliability in Nigerian real estate.',
    propertyRef: 'UNICITI',
  },
  {
    id: '4',
    name: 'Dr. Adebayo O.',
    role: 'Real Estate Investor',
    initials: 'AO',
    rating: 5,
    content:
      'The land appreciation speed in their strategic corridors is unmatched. Riparo stands out for their high standards and prompt allocation.',
    propertyRef: 'Riparo Portfolio',
  },
];

const INSTAGRAM_REEL_URL =
  'https://www.instagram.com/reel/DZsea-5tdGX/?igsh=MTh4dmpiNjRsOWZpaw==';

// Typed with 'as any' to eliminate Framer Motion dynamic variant TS errors
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: custom,
    },
  }),
} as any;

export default function TestimonialsSection() {
  return (
<section className="relative z-10 bg-white -mt-1 pt-4 sm:pt-6 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER WITH SCROLL ANIMATIONS */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} custom={0}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5EBE1] text-[#7D4F2E] text-xs font-bold uppercase tracking-wider mb-4">
              <Quote className="w-3.5 h-3.5 text-[#7D4F2E]" />
              <span>Testimonials</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={fadeInUp}
            custom={0.1}
            className="text-3xl sm:text-5xl font-black text-[#1F0B05] tracking-tight leading-tight mb-4"
          >
            Trusted by Luxury Owners: <br className="hidden sm:block" />
            their <span className="text-[#FDBE19]">Love</span> for Riparo!
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            custom={0.2}
            className="text-sm sm:text-base text-[#1F0B05]/70 font-medium leading-relaxed"
          >
            Take our word for it — our clients love our properties and services as
            much as we do. Here are a few of their wonderful thoughts about us.
          </motion.p>
        </motion.div>

        {/* FEATURED INSTAGRAM VIDEO CARD IN ARCH FRAME */}
        <motion.div
          className="flex justify-center mb-16 sm:mb-20"
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <div className="relative group max-w-md w-full">
            {/* Arch / Half Circle Framed Outer Wrapper */}
            <div className="relative w-full h-[420px] sm:h-[500px] rounded-t-full rounded-b-3xl overflow-hidden border-4 border-[#7D4F2E]/20 shadow-2xl bg-[#1F0B05]">
              {/* Autoplay Preview Video Background */}
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              >
                <source src="/preview.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

              {/* Direct Link to Instagram Reel */}
              <a
                href={INSTAGRAM_REEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center cursor-pointer group"
              >
                {/* Glowing Play Button Pulse */}
                <div className="relative mb-6">
                  <div className="absolute -inset-4 rounded-full bg-[#FDBE19]/30 animate-ping" />
                  <div className="relative w-20 h-20 rounded-full bg-[#FDBE19] text-[#1F0B05] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </div>

                {/* Badge & Caption */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-2 border border-white/30">
                  <Video className="w-4 h-4 text-[#FDBE19]" />
                  <span>Watch Reel on Instagram</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Hear directly from our clients
                </h3>
                <p className="text-xs text-white/80 font-medium mt-1">
                  Tap to play full video review
                </p>
              </a>
            </div>
          </div>
        </motion.div>

        {/* SLIDING / MOVING TESTIMONIAL CARDS WITH ENTRANCE FADE */}
        <motion.div
          className="relative w-full overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className="flex gap-6 w-max cursor-grab active:cursor-grabbing"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              ease: 'linear',
              duration: 30,
              repeat: Infinity,
            }}
          >
            {/* Duplicated array for seamless loop */}
            {[...testimonials, ...testimonials].map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="w-[300px] sm:w-[380px] bg-white p-6 sm:p-8 rounded-3xl border border-[#1F0B05]/10 shadow-sm flex flex-col justify-between shrink-0 hover:shadow-md transition-shadow"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#FDBE19] text-[#FDBE19]"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-xs sm:text-sm text-[#1F0B05]/80 leading-relaxed font-medium mb-6">
                    &ldquo;{item.content}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-[#F5EBE1] text-[#7D4F2E] font-bold text-xs shrink-0 border border-[#7D4F2E]/20 flex items-center justify-center">
                    {item.initials}
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-[#1F0B05]">
                      {item.name}
                    </h4>
                    <p className="text-[11px] font-semibold text-[#7D4F2E]">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}