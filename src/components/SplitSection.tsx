/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";
import { CTAButton } from "./CTAButton";

interface SplitSectionProps {
  image: string;
  imagePosition?: "left" | "right";
  title: string;
  content: React.ReactNode;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

export function SplitSection({
  image,
  imagePosition = "left",
  title,
  content,
  ctaText,
  ctaLink,
  className = "",
}: SplitSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const imageSide = imagePosition === "left" ? "left" : "right";
  const textSide = imagePosition === "left" ? "right" : "left";

  return (
    <section
      ref={ref}
      className={`relative flex font-space-grotesk flex-col md:flex-row min-h-screen w-full ${className}`}
    >
      {/* Immagine */}
      <motion.div
        initial={{ opacity: 0, x: imageSide === "left" ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`relative w-full md:w-1/2 h-64 md:h-screen ${
          imageSide === "left" ? "order-1 md:order-1" : "order-1 md:order-2"
        }`}
      >
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </motion.div>

      {/* Contenuto Testuale */}
      <motion.div
        initial={{ opacity: 0, x: textSide === "left" ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className={`relative w-full md:w-1/2 min-h-screen flex items-center justify-center bg-white ${
          textSide === "left" ? "order-2 md:order-1" : "order-2 md:order-2"
        }`}
      >
        <div className="max-w-2xl px-6 md:px-12 py-12 md:py-16 flex flex-col items-start">
          <h2 className="text-title mb-6">{title}</h2>
          <div className="text-description mb-8">{content}</div>

          {/* CTA */}
          {ctaText && ctaLink && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <CTAButton text={ctaText} href={ctaLink} />
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
