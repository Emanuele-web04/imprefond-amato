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
        title="I nostri progetti"
        content={
          <>
            <p>
              Nel corso degli anni la nostra azienda ha portato a termine diversi lavori in tutta italia, dalle opere private
              per edifici residenziali e non, a quelle pubbliche come consolidamenti infrastrutturali di edifici, ponti o
              strade, più complesse ed importanti, accrescendo così la nostra esperienza e competenza nel settore.
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
