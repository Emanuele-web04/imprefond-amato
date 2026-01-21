"use client";

import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";
import { ImageDialog } from "../shared/ImageDialog";

export function ISO9001() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      id="iso9001"
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
        ISO 9001:2015 - Sistema di Gestione Qualità
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <ImageDialog
          src="/certificazioni-amato/ISO 9001 IMPREFOND (2)-1.png"
          alt="ISO 9001:2015"
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
          Il Sistema di Gestione per la Qualità di Imprefond F.lli Amato S.R.L. 
          è stato verificato e trovato conforme ai requisiti dello standard 
          UNI EN ISO 9001 ED. 2015.
        </p>
        <p>
          La certificazione, rilasciata da ISE Cert (organismo di certificazione 
          di sistemi di gestione qualità) e accreditata nel settore IAF 28, 
          copre l'esecuzione di trivellazioni. Il certificato n. 4230, emesso 
          il 02.12.2024, è valido fino al 01.12.2027.
        </p>
        <p>
          Questa certificazione attesta l'impegno dell'azienda nel mantenere 
          elevati standard qualitativi in tutti i processi operativi, garantendo 
          la soddisfazione del cliente attraverso un miglioramento continuo 
          delle prestazioni e dei servizi offerti.
        </p>
      </motion.div>
    </motion.div>
  );
}
