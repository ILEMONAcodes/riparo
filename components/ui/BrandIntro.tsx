'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BrandIntro({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onComplete();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1F0B05]"
          exit={{ opacity: 0 }}
        >
          {/* Animated Circles */}
          <div className="relative w-40 h-40">
            {/* Big Gold Circle */}
            <motion.div
              animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-[#FDBE19]"
            />
            {/* White Small Circle */}
            <motion.div
              animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              className="absolute top-0 left-4 w-12 h-12 rounded-full bg-[#FDFBF7]"
            />
            {/* Accent Brown Circle */}
            <motion.div
              animate={{ x: [0, 10, 0], y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-16 h-16 rounded-full bg-[#7D4F2E]"
            />
          </div>

          {/* Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-12 text-white font-serif text-3xl tracking-widest"
          >
            Welcome Home
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}