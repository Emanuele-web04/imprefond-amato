/* eslint-disable @next/next/no-img-element */
"use client";

import { SplitSection } from "./SplitSection";
import { CAROUSEL_IMAGES } from "@/utils/carousel";
import { useMemo } from "react";

export function LaFilosofia() {
  // Seleziona un'immagine casuale
  const randomImage = useMemo(() => {
    const shuffled = [...CAROUSEL_IMAGES].sort(() => 0.5 - Math.random());
    return `/compressjpeg0-imprefond/${shuffled[0]}`;
  }, []);

  return (
    <SplitSection
      image={randomImage}
      imagePosition="left"
      title="La Filosofia"
      ctaText="Scopri di più sulla nostra storia"
      ctaLink="/storia"
      content={
        <>
          <p className="text-subtitle mb-4">
            La nostra forza è nel sottosuolo. Ogni grande opera nasce da una
            base sicura.
          </p>
          <p className="mb-4 text-description">
            Imprefond rappresenta l&apos;eccellenza italiana nelle fondazioni
            speciali, con radici nell&apos;esperienza generazionale della
            famiglia Amato. Costruiamo fiducia attraverso competenza, sicurezza
            e affidabilità.
          </p>
          <p className="text-description">
            Ogni progetto è un impegno verso l&apos;eccellenza. Non costruiamo
            solo nel sottosuolo, ma gettiamo le basi per il futuro con opere
            solide, durature e sicure.
          </p>
        </>
      }
    />
  );
}
