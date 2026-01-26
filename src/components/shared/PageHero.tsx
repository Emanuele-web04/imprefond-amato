/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "motion/react";

interface PageHeroProps {
  title: string;
  image: string;
  imagefit?: "cover" | "contain";
  mobileTitleCentered?: boolean;
}

export function PageHero({
  title,
  image,
  imagefit = "cover",
  mobileTitleCentered = false,
}: PageHeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Single Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className={`w-full h-full ${imagefit === "contain" ? "object-contain" : "object-cover"}`}
        />
        {/* Black overlay for text readability */}
        <div
          className={`absolute inset-0 md:bg-black/40 ${mobileTitleCentered ? "bg-black/30" : ""}`}
        />
      </div>

      {/* Center Title */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className={
            mobileTitleCentered
              ? "text-center"
              : "text-center mb-auto md:mb-0 mt-25 md:mt-0"
          }
        >
          <h1
            className={`text-4xl h-full md:text-5xl lg:text-6xl font-medium tracking-tighter drop-shadow-2xl ${
              mobileTitleCentered ? "text-white" : "text-blue-950 md:text-white"
            }`}
          >
            {title}
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
