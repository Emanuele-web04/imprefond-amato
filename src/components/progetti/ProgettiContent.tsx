"use client";

import { ContentSection } from "../shared/ContentSection";
import dynamic from "next/dynamic";
import { createProjects } from "@/utils/projects";
import { ProjectsGrid } from "../shared/ProjectsGrid";

const ItalyMap = dynamic(() => import("../ItalyMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
      <p className="text-gray-500">Caricamento mappa...</p>
    </div>
  ),
});

export function ProgettiContent() {
  // Crea solo 3 progetti (uno per categoria)
  const projects = createProjects();

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

      {/* Sezione Progetti - 3 card con carosello */}
      <div id="progetti" className="mb-16 scroll-mt-24">
        <h2 className="text-section-title mb-6">I Nostri Progetti</h2>
        <p className="text-description mb-8">
          Esplora i nostri progetti attraverso le diverse categorie. Clicca su ogni card per vedere il carosello completo delle immagini.
        </p>
        <ProjectsGrid projects={projects} />
      </div>
    </>
  );
}
