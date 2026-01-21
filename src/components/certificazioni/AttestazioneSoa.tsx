"use client";

import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";
import { ImageDialog } from "../shared/ImageDialog";

export function AttestazioneSoa() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      id="soa"
      className="mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2
        className="text-section-title mb-8"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        Attestazione SOA
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <ImageDialog
          src="/certificazioni-amato/att.7415 (3)-1.png"
          alt="Attestazione SOA"
          className="w-full h-auto"
          containerClassName="w-full overflow-hidden rounded-lg shadow-lg bg-white"
        />
      </motion.div>

      <motion.div
        className="space-y-6 text-description"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        <p>
          Imprefond F.lli Amato S.R.L. è certificata dall'organismo ARGENTASOA 
          per l'attestazione di qualificazione all'esecuzione di lavori pubblici 
          nella categoria OS 21, Classe I.
        </p>
        <p>
          L'attestazione n. 7415/69/07, rilasciata il 05/11/2025, è valida fino 
          al 01/12/2027 e conferma la capacità dell'impresa di eseguire lavori 
          pubblici nel settore delle fondazioni speciali e delle trivellazioni.
        </p>
        <p>
          Questa certificazione rappresenta un riconoscimento della professionalità 
          e dell'affidabilità aziendale, garantendo standard elevati nell'esecuzione 
          dei progetti pubblici.
        </p>
      </motion.div>
    </motion.div>
  );
}
