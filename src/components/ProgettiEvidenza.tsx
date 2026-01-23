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
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group cursor-pointer overflow-hidden rounded-lg"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] w-full">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />


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
    const trivellazioniImages = [
      "/cortina-2-2025/_DSC4957.jpg",
      "/cortina-2-2025/_DSC4966.jpg",
      "/cortina-2-2025/_DSC4959.jpg",
    ];
    const cantieriImages = [
      "WhatsApp Image 2026-01-21 at 10.25.50 (2).jpeg",
      "WhatsApp Image 2026-01-21 at 10.36.46.jpeg",
      "WhatsApp Image 2024-07-04 at 12.48.36.jpeg",
    ];

    const categories = ["Trivellazioni", "Cantieri vari", "Edilizia"];
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

    const categoryCounts: Record<string, number> = {
      Trivellazioni: 0,
      "Cantieri vari": 0,
      Edilizia: 0,
    };

    return selected.map((image, index) => {
      // Seleziona 3 immagini per il carosello (quella principale + 2 altre)
      const imageIndex = index;
      const image1 = `/compressjpeg0-imprefond/${selected[imageIndex]}`;
      const image2 = `/compressjpeg0-imprefond/${selected[(imageIndex + 3) % selected.length]}`;
      const image3 = `/compressjpeg0-imprefond/${selected[(imageIndex + 6) % selected.length]}`;

      const category = categories[index % categories.length];
      const categoryIndex = categoryCounts[category];
      const trivellazioniIndex = categoryIndex % trivellazioniImages.length;
      const trivellazioniPath = encodeURI(trivellazioniImages[trivellazioniIndex]);
      const trivellazioniImagesSet = [
        trivellazioniPath,
        encodeURI(
          trivellazioniImages[(trivellazioniIndex + 1) % trivellazioniImages.length]
        ),
        encodeURI(
          trivellazioniImages[(trivellazioniIndex + 2) % trivellazioniImages.length]
        ),
      ];
      const cantieriIndex = categoryIndex % cantieriImages.length;
      const isCantieriFolder = (name: string) =>
        name === "projects.jpeg" || name.includes("2024-07-04");
      const cantieriBase = isCantieriFolder(cantieriImages[cantieriIndex])
        ? "/CANTIERE TAI E VALLE DI CADORE"
        : "/new-images";
      const galleriaProjectImages = [
        "/galleria-chiangiano/WhatsApp Image 2026-01-12 at 20.52.09.webp",
        "/galleria-chiangiano/WhatsApp Image 2026-01-12 at 20.52.09 (1).webp",
        "/galleria-chiangiano/WhatsApp Image 2026-01-12 at 20.52.09 (2).webp",
        "/galleria-chiangiano/WhatsApp Image 2026-01-12 at 20.52.09 (3).webp",
        "/galleria-chiangiano/WhatsApp Image 2026-01-12 at 20.52.09 (4).webp",
      ];
      const isGalleria = index === 6; // Replace "Ospedale Regionale" with Galleria

      const cantieriPath = encodeURI(
        `${cantieriBase}/${cantieriImages[cantieriIndex]}`
      );
      const cantieriImagesSet = [
        cantieriPath,
        encodeURI(
          `${
            isCantieriFolder(
              cantieriImages[(cantieriIndex + 1) % cantieriImages.length]
            )
              ? "/CANTIERE TAI E VALLE DI CADORE"
              : "/new-images"
          }/${cantieriImages[(cantieriIndex + 1) % cantieriImages.length]}`
        ),
        encodeURI(
          `${
            isCantieriFolder(
              cantieriImages[(cantieriIndex + 2) % cantieriImages.length]
            )
              ? "/CANTIERE TAI E VALLE DI CADORE"
              : "/new-images"
          }/${cantieriImages[(cantieriIndex + 2) % cantieriImages.length]}`
        ),
      ];

      const project = {
        image: isGalleria
          ? galleriaProjectImages[0]
          : category === "Trivellazioni"
            ? trivellazioniPath
            : category === "Cantieri vari"
              ? cantieriPath
              : image1,
        images: isGalleria
            ? galleriaProjectImages
            : category === "Trivellazioni"
            ? trivellazioniImagesSet
            : category === "Cantieri vari"
              ? cantieriImagesSet
            : [image1, image2, image3],
        category,
        title: category, // Title is now the Category
        description: "", // Description removed
      };
      categoryCounts[category] += 1;
      return project;
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
              key={index}
              project={project}
              index={index}
              isInView={isInView}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Dialog con carosello foto */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      >
        <DialogContent className="max-w-[90vw] w-full min-w-[50vw] bg-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            {selectedProject && (
              <>
                <FotoCarosello images={selectedProject.images} />
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
