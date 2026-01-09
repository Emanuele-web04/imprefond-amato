/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "motion/react";
import { useRef, useState } from "react";
import { useInView } from "motion/react";
import { 
  FaBuilding, 
  FaHammer, 
  FaLayerGroup, 
  FaTools,
  FaShieldAlt,
  FaAward
} from "react-icons/fa";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <FaTools className="w-12 h-12" />,
    title: "Pali e Micropali",
    description: "Realizzazione di pali e micropali per il consolidamento delle fondazioni e il miglioramento delle caratteristiche geotecniche del terreno."
  },
  {
    icon: <FaLayerGroup className="w-12 h-12" />,
    title: "Diaframmi e Paratie",
    description: "Costruzione di diaframmi e paratie per opere di contenimento e impermeabilizzazione, garantendo stabilità e sicurezza."
  },
  {
    icon: <FaHammer className="w-12 h-12" />,
    title: "Consolidamento Terreni",
    description: "Tecniche avanzate per il consolidamento e il miglioramento delle proprietà meccaniche dei terreni di fondazione."
  },
  {
    icon: <FaBuilding className="w-12 h-12" />,
    title: "Sondaggi Geognostici",
    description: "Indagini geotecniche approfondite per la caratterizzazione del sottosuolo e la progettazione ottimale delle fondazioni."
  },
  {
    icon: <FaShieldAlt className="w-12 h-12" />,
    title: "Iniezioni di Consolidamento",
    description: "Interventi di iniezione per il consolidamento mirato di terreni e strutture esistenti."
  },
  {
    icon: <FaAward className="w-12 h-12" />,
    title: "Progettazione e Consulenza",
    description: "Supporto tecnico specializzato per la progettazione e l&apos;ottimizzazione di interventi di fondazione."
  }
];

function ServiceCard({ service, index, isInView }: { service: Service; index: number; isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      <div className="relative h-full bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            {service.title}
          </h3>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: isHovered ? "auto" : 0,
              opacity: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 text-sm leading-relaxed pt-2 font-geist-sans">
              {service.description}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function AreeEccellenza() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="aree-eccellenza" ref={ref} className="relative w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Aree di Eccellenza
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-geist-sans">
            Servizi specializzati per ogni esigenza di fondazione e consolidamento
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
