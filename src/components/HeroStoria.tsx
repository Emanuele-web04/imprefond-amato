/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "motion/react";
import { CAROUSEL_IMAGES, CAROUSEL_CONFIG } from "@/utils/carousel";

export function HeroStoria() {
  // Usa una singola immagine invece del carousel

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Single Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={`/imprefond_images/old-story2.webp`}
          alt="Imprefond Storia"
          className="w-full h-full object-cover"
        />
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-white drop-shadow-2xl">
            Storia
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
