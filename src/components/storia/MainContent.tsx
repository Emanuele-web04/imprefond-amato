"use client";

import { ChiSiamo } from "./ChiSiamo";
import { Cultura } from "./Cultura";
import { Timeline } from "./Timeline";
import { ImageDialog } from "../shared/ImageDialog";
import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";

export function MainContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {/* Prima immagine */}
      <motion.div
        ref={ref}
        className="mb-16 flex justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="w-[70%]">
          <ImageDialog
            src="/CANTIERE TAI E VALLE DI CADORE/20250917_090247.jpg"
            alt="Imprefond"
            className="w-full h-auto"
            containerClassName="w-full overflow-hidden rounded-lg shadow-lg"
          />
        </div>
      </motion.div>

      <ChiSiamo />
      <Cultura />
      <Timeline />
    </>
  );
}
