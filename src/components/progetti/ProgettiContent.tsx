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
  const trivellazioniImages = [
    "WhatsApp Image 2026-01-12 at 20.52.09 (1).webp",
    "WhatsApp Image 2026-01-12 at 20.52.09 (2).webp",
    "WhatsApp Image 2026-01-12 at 20.52.09 (3).webp",
    "WhatsApp Image 2026-01-12 at 20.52.09 (4).webp",
    "WhatsApp Image 2026-01-12 at 20.52.09.webp",
  ];
  const cantieriImages = [
    "WhatsApp Image 2026-01-21 at 10.25.50 (2).jpeg",
    "WhatsApp Image 2026-01-21 at 10.36.46.jpeg",
    "WhatsApp Image 2024-07-04 at 12.48.36.jpeg",
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
    const trivellazioniPath = encodeURI(
      `/galleria-chiangiano/${trivellazioniImages[trivellazioniIndex]}`
    );
    const trivellazioniImagesSet = [
      trivellazioniPath,
      encodeURI(
        `/galleria-chiangiano/${trivellazioniImages[(trivellazioniIndex + 1) % trivellazioniImages.length]}`
      ),
      encodeURI(
        `/galleria-chiangiano/${trivellazioniImages[(trivellazioniIndex + 2) % trivellazioniImages.length]}`
      ),
    ];
    const cantieriIndex = categoryIndex % cantieriImages.length;
    const isCantieriFolder = (name: string) =>
      name === "projects.jpeg" || name.includes("2024-07-04");
    const cantieriBase = isCantieriFolder(cantieriImages[cantieriIndex])
      ? "/CANTIERE TAI E VALLE DI CADORE"
      : "/new-images";
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
      image:
        category === "Trivellazioni"
          ? trivellazioniPath
          : category === "Cantieri vari"
            ? cantieriPath
            : image1,
      images:
        category === "Trivellazioni"
          ? trivellazioniImagesSet
          : category === "Cantieri vari"
            ? cantieriImagesSet
          : [image1, image2, image3],
      category,
      title: titles[index],
      description: descriptions[index],
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
      className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
      onClick={() => setSelectedProject(project)}
    >
      <div className="relative aspect-3/4">
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
    </>
  );
}
