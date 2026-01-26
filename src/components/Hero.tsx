/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img
            src="/hero-home.jpg"
            alt="Imprefond"
            className="w-full h-full md:object-cover object-contain"
          />
          {/* Black overlay for text readability */}
          <div className="absolute inset-0  md:bg-black/40" />
        </div>
      </div>

      {/* Center Title */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-center mb-auto md:mb-0 mt-25 md:mt-0"
        >
          <h1 className="text-4xl h-full md:text-5xl lg:text-6xl font-medium tracking-tighter text-blue-950  md:text-white drop-shadow-2xl">
            Migliorando l&apos;Italia costruendo
          </h1>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/90 text-sm font-medium drop-shadow-lg">
            Scroll
          </span>
          <svg
            className="w-6 h-6 text-white/90 drop-shadow-lg"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
