/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { generateCarouselConfig, CAROUSEL_CONFIG } from "@/utils/carousel";

export function Hero() {
  const [carouselConfig, setCarouselConfig] = useState<ReturnType<
    typeof generateCarouselConfig
  > | null>(null);

  // Genera la configurazione solo sul client dopo l'hydration
  useEffect(() => {
    setCarouselConfig(generateCarouselConfig());
  }, []);

  // Mostra un placeholder durante l'hydration
  if (!carouselConfig) {
    return (
      <section
        id="home"
        className="relative h-screen w-full overflow-hidden bg-gray-900"
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full w-full items-center justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white drop-shadow-2xl">
            Migliorando l&apos;Italia costruendo
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Infinite Carousel Background */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full overflow-hidden">
          <motion.div
            className="flex h-full"
            animate={{
              x: carouselConfig.keyframes,
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: carouselConfig.totalDuration,
                ease: "easeInOut",
                times: carouselConfig.times,
              },
            }}
            style={{ width: `${carouselConfig.infiniteImages.length * 100}%` }}
          >
            {carouselConfig.infiniteImages.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="relative h-full shrink-0"
                style={{
                  width: `${100 / carouselConfig.infiniteImages.length}%`,
                }}
              >
                <img
                  src={`${CAROUSEL_CONFIG.imagePath}/${image}`}
                  alt={`Imprefond ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
        {/* Black overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Center Title */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-white drop-shadow-2xl">
            Migliorando l&apos;Italia costruendo
          </h2>
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
