"use client";

import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";

export function ChiSiamo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      id="chi-siamo"
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
        Chi Siamo
      </motion.h2>

      <motion.div
        className="space-y-6 text-description"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        <p>
          Fondata dalla famiglia Amato, Imprefond rappresenta
          l&apos;eccellenza italiana nelle fondazioni speciali. Con radici
          nell&apos;esperienza generazionale, costruiamo fiducia attraverso
          competenza, sicurezza e affidabilità.
        </p>
        <p>
          La dedizione ai nostri valori fondamentali, unita a un focus
          sull&apos;innovazione, ci permette di attrarre e trattenere le
          migliori persone, garantendo risultati eccezionali su ogni progetto.
          Negli ultimi anni abbiamo completato centinaia di progetti in tutta
          Italia, dalle infrastrutture più complesse alle opere pubbliche di
          grande importanza.
        </p>
        <p>
          L&apos;esperienza specializzata nella costruzione, la collaborazione
          con tutti i membri del team di progetto e l&apos;impegno a
          rispettare i nostri impegni contribuiscono al completamento con
          successo di ogni opera.
        </p>
      </motion.div>
    </motion.div>
  );
}
