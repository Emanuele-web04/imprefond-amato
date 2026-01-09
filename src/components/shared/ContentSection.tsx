/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";

interface ContentSectionProps {
  id?: string;
  title: string;
  content: React.ReactNode;
  image?: string;
}

export function ContentSection({ id, title, content, image }: ContentSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      id={id}
      className="mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2
        className="text-section-title mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="space-y-6 text-description"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        {content}
      </motion.div>

      {image && (
        <motion.div
          className="mt-12 mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      )}
    </motion.div>
  );
}
