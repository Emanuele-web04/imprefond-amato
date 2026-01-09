"use client";

import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";

interface Risultato {
  icon: React.ReactNode;
  text: string;
}

const risultati: Risultato[] = [
  {
    icon: (
      <svg
        className="w-16 h-16 mx-auto text-blue-950"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
    text: "Più di 500 progetti completati con successo in tutta Italia",
  },
  {
    icon: (
      <svg
        className="w-16 h-16 mx-auto text-blue-950"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 4v16m8-8H4"
        />
      </svg>
    ),
    text: "Certificazioni SOA e ISO che attestano la nostra qualità",
  },
  {
    icon: (
      <svg
        className="w-16 h-16 mx-auto text-blue-950"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    text: "Riconoscimenti per l&apos;eccellenza nel settore delle fondazioni",
  },
];

export function Risultati() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-section-title-large mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Risultati
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {risultati.map((risultato, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <motion.div
                className="mb-4"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2, ease: "easeOut" }}
              >
                {risultato.icon}
              </motion.div>
              <p className="text-lg text-gray-700 font-geist-sans">
                {risultato.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
