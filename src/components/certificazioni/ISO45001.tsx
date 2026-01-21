"use client";

import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";
import { ImageDialog } from "../shared/ImageDialog";

export function ISO45001() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      id="iso45001"
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
        ISO 45001:2023 - Sicurezza e Salute Occupazionale
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <ImageDialog
          src="/certificazioni-amato/CERTIFICAT 171 OHS IMPREFOND-1.png"
          alt="ISO 45001:2023"
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
          Imprefond F.lli Amato S.R.L. ha implementato e mantiene un Sistema di 
          Gestione per la Sicurezza e Salute Occupazionale (Occupational Health 
          and Safety Management System) conforme allo standard internazionale 
          EN ISO 45001:2023.
        </p>
        <p>
          La certificazione, rilasciata da MSCG (Management Systems Certification Group) 
          e accreditata da IAF e UKAS, copre il campo di applicazione dell'esecuzione 
          di trivellazioni (EA 28). Il certificato n. 171 OHS è valido fino al 18.12.2025.
        </p>
        <p>
          Questo standard internazionale dimostra l'impegno dell'azienda nel garantire 
          un ambiente di lavoro sicuro e salubre per tutti i dipendenti e collaboratori, 
          riducendo i rischi e prevenendo infortuni sul lavoro.
        </p>
      </motion.div>
    </motion.div>
  );
}
