"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface CTAButtonProps {
  text: string;
  href: string;
  className?: string;
}

export function CTAButton({ text, href, className = "" }: CTAButtonProps) {
  return (
    <motion.div
      className="inline-block"
      whileHover="hover"
      initial="initial"
    >
      <Link
        href={href}
        className={`inline-flex items-center gap-2 sm:gap-3 group text-black hover:text-blue-950 transition-colors duration-200 ${className}`}
      >
        <motion.span
          className="text-sm sm:text-base md:text-lg font-medium relative"
          variants={{
            initial: {
              textDecoration: "none",
            },
            hover: {
              textDecoration: "underline",
              textDecorationThickness: "2px",
              textUnderlineOffset: "4px",
            },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {text}
        </motion.span>
        <motion.div
          className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-blue-950 flex items-center justify-center group-hover:bg-blue-900 transition-colors duration-200 flex-shrink-0"
          variants={{
            initial: {
              x: 0,
            },
            hover: {
              x: 20,
            },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <FaArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white" />
        </motion.div>
      </Link>
    </motion.div>
  );
}
