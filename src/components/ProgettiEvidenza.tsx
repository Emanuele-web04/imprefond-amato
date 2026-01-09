/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "motion/react";
import { useRef, useState } from "react";
import { useInView } from "motion/react";
import { CAROUSEL_IMAGES } from "@/utils/carousel";
import { useMemo } from "react";
import { FaArrowRight } from "react-icons/fa";

interface Project {
  image: string;
  category: string;
  title: string;
  description: string;
}

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: Project;
  index: number;
  isInView: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const isLarge = index % 3 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group cursor-pointer overflow-hidden rounded-lg ${
        isLarge ? "md:row-span-2" : ""
      }`}
    >
      <div className="relative h-full w-full">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="text-white">
            <span className="text-sm font-semibold text-blue-300 mb-2 block">
              {project.category}
            </span>
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-200 mb-4 font-geist-sans">
              {project.description}
            </p>
            <button className="flex items-center gap-2 text-white font-semibold hover:text-blue-300 transition-colors">
              Vedi dettagli
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Label sempre visibile */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
            {project.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function ProgettiEvidenza() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Seleziona 9 immagini casuali per i progetti
  const projects = useMemo(() => {
    const shuffled = [...CAROUSEL_IMAGES].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 9);

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
      "Fondazioni speciali per ponte autostradale con micropali",
      "Consolidamento terreno per grattacielo residenziale",
      "Diaframmi per stazione metropolitana",
      "Pali di fondazione per centro commerciale",
      "Consolidamento terreno industriale",
      "Fondazioni profonde per struttura ospedaliera",
      "Paratie per tunnel autostradale",
      "Micropali per complesso residenziale",
      "Sondaggi geognostici per centro direzionale",
    ];

    return selected.map((image, index) => ({
      image: `/compressjpeg0-imprefond/${image}`,
      category: categories[index % categories.length],
      title: titles[index],
      description: descriptions[index],
    }));
  }, []);

  return (
    <section ref={ref} className="relative w-full py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Progetti in Evidenza
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-geist-sans">
            I nostri progetti più iconici che testimoniano la nostra esperienza
            e competenza
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
