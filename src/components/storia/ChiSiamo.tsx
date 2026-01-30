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
          Fondata dai fratelli Carmine e Pasquale Amato, la ditta Imprefond F.lli Amato srl, si specializza nelle opere
          di fondazioni speciali. Con l&apos;esperienza generazionale costruiamo fiducia attraverso competenza, sicurezza
          ed affidabilità.
        </p>
        <p>
          La dedizione per il nostro lavoro, unita ad un focus sull&apos;innovazione, ci permette di garantire risultati
          eccezionali in ogni progetto.
        </p>
        <p>
          La nostra cultura aziendale si basa su valori solidi, come l&apos;integrità, la trasparenza nelle relazioni con
          dipendenti, clienti e fornitori, crediamo nel lavoro di squadra che ci consente di raggiungere obiettivi
          sempre più ambiziosi, Investendo costantemente in macchine ed attrezzature all&apos;avanguardia e nella
          formazione dei nostri dipendenti, consapevoli che sono loro il vero motore del nostro successo.
        </p>
        <p>
          La famiglia Amato inizia la propria attività nel settore delle trivellazioni nel 1921, stipulando il primo
          contratto che segnerà l&apos;inizio della nostra storia nel settore delle fondazioni speciali, tramandando da
          generazione in generazione l&apos;esperienza e la professionalità acquisita.
        </p>
      </motion.div>
    </motion.div>
  );
}
