'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

export default function SplashPreloader({ onComplete }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onComplete) onComplete();
    }, 3200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const text = 'Welcome Home';

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.6,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.4, 
        ease: 'easeOut' 
      },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white text-[#1F0B05] overflow-hidden"
        >
          {/* WATERMARK BACKGROUND LOGO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute pointer-events-none w-[500px] h-[500px] sm:w-[700px] sm:h-[700px]"
          >
            <Image
              src="/logo.png"
              alt="Riparo Background Watermark"
              fill
              priority
              className="object-contain"
            />
          </motion.div>

          <div className="relative z-10 flex flex-col items-center justify-center gap-8">
            
            {/* MAIN LOGO - LARGER */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-40 h-40 sm:w-52 sm:h-52"
            >
              <Image
                src="/logo.png"
                alt="Riparo Real Estate Logo"
                fill
                priority
                className="object-contain"
              />
            </motion.div>

            {/* MAJESTIC TYPED TEXT */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center overflow-hidden"
            >
              {text.split('').map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="font-serif text-2xl sm:text-3xl tracking-[0.25em] text-[#1F0B05] font-light uppercase"
                  style={{
                    marginRight: char === ' ' ? '0.45em' : '0em',
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}