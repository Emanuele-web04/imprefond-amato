"use client";

import { ContentSection } from "../shared/ContentSection";

export function NoleggiIntro() {
  return (
    <ContentSection
      id="noleggi"
      title="Noleggi"
      content={
        <>
          <p>
            La nostra azienda dispone di una flotta composta da trivelle, autocarri, gruppi elettrogeni ed attrezzatura
            varia per le trivellazioni di piccolo e grande diametro, ed offriamo inoltre trasporti per conto terzi.
          </p>
        </>
      }
    />
  );
}
