"use client";

/* eslint-disable @next/next/no-img-element */
import { ContentSection } from "../shared/ContentSection";
import { CAROUSEL_IMAGES } from "@/utils/carousel";
import ItalyMap from "../ItalyMap";
import { FaArrowRight } from "react-icons/fa";

interface Project {
  image: string;
  category: string;
  title: string;
  description: string;
}

const categories = ["Infrastrutture", "Edilizia Civile", "Opere Pubbliche"];
const titles = [
  "Ponte Autostradale A1",
  "Grattacielo Residenziale Milano",
  "Metropolitana Linea M5",
  "Centro Commerciale Nord",
  "Stabilimento Industriale",
  "Ospedale Regionale",
  "Tunnel Autostradale",
  "Complesso Residenziale",
  "Centro Direzionale",
];
const descriptions = [
  "Fondazioni speciali per ponte autostradale con micropali di grande diametro per garantire la stabilità dell'intera struttura.",
  "Consolidamento terreno per grattacielo residenziale con tecniche avanzate di iniezione e micropali.",
  "Diaframmi per stazione metropolitana con profondità fino a 40 metri per garantire la sicurezza degli scavi.",
  "Pali di fondazione per centro commerciale su terreno a bassa capacità portante.",
  "Consolidamento terreno industriale con tecniche di jet grouting e colonne di ghiaia.",
  "Fondazioni profonde per struttura ospedaliera con requisiti antisismici elevati.",
  "Paratie per tunnel autostradale con sistema di impermeabilizzazione integrato.",
  "Micropali per complesso residenziale in area urbana con spazi limitati.",
  "Sondaggi geognostici per centro direzionale con analisi dettagliata delle caratteristiche del sottosuolo.",
];

// Crea progetti con ordine statico iniziale
const createProjects = (images: readonly string[]): Project[] => {
  const selected = images.slice(0, 9);
  return selected.map((image, index) => ({
    image: `/compressjpeg0-imprefond/${image}`,
    category: categories[index % categories.length],
    title: titles[index],
    description: descriptions[index],
  }));
};

export function ProgettiContent() {
  // Usa ordine statico per evitare hydration mismatch
  // Le immagini saranno sempre nello stesso ordine
  const projects = createProjects(CAROUSEL_IMAGES);

  return (
    <>
      <ContentSection
        id="panoramica"
        title="I Nostri Progetti"
        content={
          <>
            <p>
              Negli ultimi anni abbiamo completato centinaia di progetti in
              tutta Italia, dalle infrastrutture più complesse alle opere
              pubbliche di grande importanza. Ogni progetto è una testimonianza
              della nostra esperienza e competenza.
            </p>
          </>
        }
      />

      <ItalyMap />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-8 sm:mt-10 md:mt-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="relative aspect-[3/4]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6">
                <div className="text-white">
                  <span className="text-xs sm:text-sm font-semibold text-blue-300 mb-1.5 sm:mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1.5 sm:mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-200 mb-3 sm:mb-4 font-geist-sans line-clamp-3">
                    {project.description}
                  </p>
                  <button className="flex items-center gap-1.5 sm:gap-2 text-white font-semibold hover:text-blue-300 transition-colors text-xs sm:text-sm">
                    Vedi dettagli
                    <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>

              {/* Label sempre visibile */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                <span className="bg-white/90 backdrop-blur-sm px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold text-black">
                  {project.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
