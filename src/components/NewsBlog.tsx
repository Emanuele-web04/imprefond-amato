/* eslint-disable @next/next/no-img-element */
"use client";

import { SplitSection } from "./SplitSection";
import { CAROUSEL_IMAGES } from "@/utils/carousel";
import { motion } from "motion/react";
import { useMemo } from "react";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

interface NewsItem {
  date: string;
  location: string;
  title: string;
  excerpt: string;
}

const newsItems: NewsItem[] = [
  {
    date: "15 Gennaio 2024",
    location: "Milano",
    title: "Nuovo cantiere avviato a Milano",
    excerpt:
      "Avviato il cantiere per le fondazioni del nuovo complesso residenziale nel quartiere Porta Nuova. Intervento con micropali per consolidamento terreno.",
  },
  {
    date: "10 Gennaio 2024",
    location: "Roma",
    title: "Aggiornamento parco macchine: arriva la nuova perforatrice",
    excerpt:
      "Ampliamento del parco macchine con l&apos;acquisizione di una perforatrice all&apos;avanguardia per migliorare efficienza e precisione degli interventi.",
  },
  {
    date: "5 Gennaio 2024",
    location: "Torino",
    title: "Completato progetto infrastrutturale autostradale",
    excerpt:
      "Concluso con successo il progetto di consolidamento per il ponte autostradale A4. Utilizzate tecniche innovative di iniezione e consolidamento.",
  },
];

export function NewsBlog() {
  // Seleziona un'immagine casuale
  const randomImage = useMemo(() => {
    const shuffled = [...CAROUSEL_IMAGES].sort(() => 0.5 - Math.random());
    return `/compressjpeg0-imprefond/${shuffled[0]}`;
  }, []);

  return (
    <SplitSection
      image={randomImage}
      imagePosition="left"
      title="News & Aggiornamenti"
      ctaText="Vedi tutte le news"
      ctaLink="/news"
      content={
        <>
          <p className="mb-6 text-description">
            Resta aggiornato sulle nostre attività, progetti e innovazioni nel
            settore delle fondazioni speciali.
          </p>

          <div className="space-y-6">
            {newsItems.map((item, index) => (
              <div key={index} className="border-l-4 border-blue-950 pl-4">
                <motion.div className="hover:translate-x-3 cursor-pointer transition-transform duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-2 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <FaCalendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-black mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-geist-sans">
                    {item.excerpt}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </>
      }
    />
  );
}
