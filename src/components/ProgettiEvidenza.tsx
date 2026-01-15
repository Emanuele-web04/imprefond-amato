/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "motion/react";
import { useRef, useState, useMemo } from "react";
import { useInView } from "motion/react";
import { PROJECT_IMAGES } from "@/utils/carousel";
import { FaArrowRight } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FotoCarosello } from "./FotoCarosello";

interface Project {
  image: string;
  images: string[]; // Array di 3 immagini per il carosello
  category: string;
  title: string;
  description: string;
}

function ProjectCard({
  project,
  index,
  isInView,
  onClick,
}: {
  project: Project;
  index: number;
  isInView: boolean;
  onClick: () => void;
}) {
  const isLarge = index % 3 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative group cursor-pointer overflow-hidden rounded-lg ${
        isLarge ? "md:row-span-2" : ""
      }`}
      onClick={onClick}
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
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-black">
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Seleziona 9 immagini per i progetti (ordine statico)
  const projects = useMemo(() => {
    const selected = PROJECT_IMAGES.slice(0, 9);

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

    return selected.map((image, index) => {
      // Seleziona 3 immagini per il carosello (quella principale + 2 altre)
      const imageIndex = index;
      const image1 = `/compressjpeg0-imprefond/${selected[imageIndex]}`;
      const image2 = `/compressjpeg0-imprefond/${selected[(imageIndex + 3) % selected.length]}`;
      const image3 = `/compressjpeg0-imprefond/${selected[(imageIndex + 6) % selected.length]}`;

      return {
        image: image1,
        images: [image1, image2, image3],
        category: categories[index % categories.length],
        title: titles[index],
        description: descriptions[index],
      };
    });
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16"
        >
          <h2 className="text-section-title-large mb-3 sm:mb-4 px-4">
            Progetti in Evidenza
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-geist-sans px-4">
            I nostri progetti più iconici che testimoniano la nostra esperienza
            e competenza
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Dialog con carosello foto */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-[90vw] w-full min-w-[50vw]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            {selectedProject && (
              <>
                <FotoCarosello images={selectedProject.images} />
                <div className="mt-6">
                  <span className="text-sm font-semibold text-blue-600 mb-2 block">
                    {selectedProject.category}
                  </span>
                  <p className="text-gray-700 font-geist-sans">
                    {selectedProject.description}
                  </p>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
