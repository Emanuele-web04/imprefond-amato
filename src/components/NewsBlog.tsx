"use client";

import { SplitSection } from "./SplitSection";
import { PROJECT_IMAGES } from "@/utils/carousel";
import { motion } from "motion/react";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

interface NewsItem {
  date: string;
  location: string;
  title: string;
  excerpt: string;
  link: string;
}

const newsItems: NewsItem[] = [
  {
    date: "2026",
    location: "Milano Cortina",
    title: "Milano Cortina - Olimpiadi 2026",
    excerpt:
      "Partecipazione ai lavori per le Olimpiadi Invernali Milano Cortina 2026. Realizzazione di fondazioni speciali e opere di consolidamento per le infrastrutture olimpiche.",
    link: "/news#milano-cortina",
  },
  {
    date: "2025",
    location: "Teramo",
    title: "Galleria Chiangiano - Consolidamento e Sicurezza",
    excerpt:
      "Intervento di consolidamento strutturale per la Galleria Chiangiano. Lavori di messa in sicurezza del tunnel con tecnologie avanzate.",
    link: "/news#galleria-chiangiano",
  },
];

export function NewsBlog() {
  // Usa la prima immagine
  const randomImage = `/compressjpeg0-imprefond/${PROJECT_IMAGES[2]}`;

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
                <a href={item.link} className="block group">
                  <motion.div className="group-hover:translate-x-3 cursor-pointer transition-transform duration-300">
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
                    <h3 className="text-lg font-medium text-black mb-1.5 group-hover:text-blue-900 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-geist-sans">
                      {item.excerpt}
                    </p>
                  </motion.div>
                </a>
              </div>
            ))}
          </div>
        </>
      }
    />
  );
}
