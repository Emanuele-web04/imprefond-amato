"use client";

/* eslint-disable @next/next/no-img-element */
import { ContentSection } from "../shared/ContentSection";
import { PROJECT_IMAGES } from "@/utils/carousel";
import dynamic from "next/dynamic";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FotoCarosello } from "../FotoCarosello";

const ItalyMap = dynamic(() => import("../ItalyMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
      <p className="text-gray-500">Caricamento mappa...</p>
    </div>
  ),
});

interface Project {
  image: string;
  images: string[]; // Array di 3 immagini per il carosello
  category: string;
  title: string;
  description: string;
}

const categories = ["Trivellazioni", "Cantieri vari", "Edilizia"];

// Crea progetti con ordine statico iniziale
const createProjects = (images: readonly string[]): Project[] => {
  const selected = images.slice(0, 9);
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
  const ediliziaImages = [
    "/cortina-2-2025/_DSC4977.jpg",
    "/cortina-2-2025/_DSC4978.jpg",
    "/galleria-chiangiano/WhatsApp Image 2026-01-12 at 20.52.09 (3).webp"
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

    // LOGICA TRIVELLAZIONI
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

    // LOGICA CANTIERI VARI
    const cantieriIndex = categoryIndex % cantieriImages.length;
    const isCantieriFolder = (name: string) =>
      name === "projects.jpeg" || name.includes("2024-07-04");
    const cantieriBase = isCantieriFolder(cantieriImages[cantieriIndex])
      ? "/CANTIERE TAI E VALLE DI CADORE"
      : "/new-images";
    const cantieriPathPrefix = isCantieriFolder(cantieriImages[cantieriIndex])
      ? "/CANTIERE TAI E VALLE DI CADORE"
      : "/new-images";

    const cantieriPath = encodeURI(`${cantieriBase}/${cantieriImages[cantieriIndex]}`);
    const lastTaiImage = encodeURI("/CANTIERE TAI E VALLE DI CADORE/WhatsApp Image 2024-07-04 at 12.48.37 (3).jpeg");

    const cantieriImagesSet = [
      cantieriPath,
      encodeURI(
        `${
          isCantieriFolder(cantieriImages[(cantieriIndex + 1) % cantieriImages.length])
            ? "/CANTIERE TAI E VALLE DI CADORE"
            : "/new-images"
        }/${cantieriImages[(cantieriIndex + 1) % cantieriImages.length]}`
      ),
      lastTaiImage, // Usa l'ultima del cantiere tai come richiesto
    ];

    // LOGICA EDILIZIA
    const ediliziaIndex = categoryIndex % ediliziaImages.length;
    const ediliziaPath = encodeURI(ediliziaImages[ediliziaIndex]);
    const lastGalleriaImage = encodeURI("/galleria-chiangiano/WhatsApp Image 2026-01-12 at 20.52.09 (4).webp");
    const ediliziaImagesSet = [
      ediliziaPath,
      encodeURI(ediliziaImages[(ediliziaIndex + 1) % ediliziaImages.length]),
      lastGalleriaImage, // Usa l'ultima della galleria come richiesto
    ];

    const project = {
      image:
        category === "Trivellazioni"
          ? trivellazioniPath
          : category === "Cantieri vari"
            ? cantieriPath
            : ediliziaPath,
      images:
        category === "Trivellazioni"
          ? trivellazioniImagesSet
          : category === "Cantieri vari"
            ? cantieriImagesSet
            : ediliziaImagesSet,
      category,
      title: category,
      description: "",
    };
    categoryCounts[category] += 1;
    return project;
  });
};

export function ProgettiContent() {
  // Usa ordine statico per evitare hydration mismatch
  // Le immagini saranno sempre nello stesso ordine
  const projects = createProjects(PROJECT_IMAGES);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Raggruppa progetti per categoria
  const progettiPerCategoria = {
    Trivellazioni: projects.filter((p) => p.category === "Trivellazioni"),
    "Cantieri vari": projects.filter((p) => p.category === "Cantieri vari"),
    Edilizia: projects.filter((p) => p.category === "Edilizia"),
  };

  const renderProjectCard = (project: Project, index: number) => (
    <div
      key={index}
      className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
      onClick={() => setSelectedProject(project)}
    >
      <div className="relative aspect-3/4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />


        {/* Label sempre visibile */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <span className="bg-white/90 backdrop-blur-sm px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold text-black">
            {project.category}
          </span>
        </div>
      </div>
    </div>
  );

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

      <div id="mappa" className="mb-16 scroll-mt-24">
        <h2 className="text-section-title mb-6">Dove Operiamo</h2>
        <ItalyMap />
      </div>

      {/* Sezione Trivellazioni */}
      <div id="trivellazioni" className="mb-16 scroll-mt-24">
        <h2 className="text-section-title mb-6">Trivellazioni</h2>
        <p className="text-description mb-8">
          Realizziamo fondazioni speciali per ponti, viadotti e infrastrutture
          autostradali con le più avanzate tecnologie di perforazione e
          consolidamento.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {progettiPerCategoria.Trivellazioni.map((project, index) =>
            renderProjectCard(project, index)
          )}
        </div>
      </div>

      {/* Sezione Cantieri vari */}
      <div id="cantieri-vari" className="mb-16 scroll-mt-24">
        <h2 className="text-section-title mb-6">Cantieri vari</h2>
        <p className="text-description mb-8">
          Progettiamo e realizziamo fondazioni per edifici residenziali e
          commerciali, garantendo stabilità e sicurezza strutturale in ogni
          contesto urbano.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {progettiPerCategoria["Cantieri vari"].map((project, index) =>
            renderProjectCard(project, index)
          )}
        </div>
      </div>

      {/* Sezione Edilizia */}
      <div id="edilizia" className="mb-16 scroll-mt-24">
        <h2 className="text-section-title mb-6">Edilizia</h2>
        <p className="text-description mb-8">
          Eseguiamo opere di consolidamento per strutture pubbliche come
          ospedali, scuole e metropolitane, rispettando i più alti standard di
          qualità e sicurezza.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {progettiPerCategoria.Edilizia.map((project, index) =>
            renderProjectCard(project, index)
          )}
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

              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
