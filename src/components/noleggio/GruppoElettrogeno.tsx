"use client";

import { ContentSection } from "../shared/ContentSection";

export function GruppoElettrogeno() {
  return (
    <ContentSection
      id="gruppo-elettrogeno"
      title="Gruppo Elettrogeno"
      content={
        <>
          <p>
            Forniamo gruppi elettrogeni di varie potenze per garantire
            l'alimentazione continua delle attrezzature di cantiere, anche in
            assenza di rete elettrica.
          </p>
          <p>
            I nostri generatori sono affidabili, silenziosi e conformi alle
            normative ambientali vigenti, ideali per cantieri urbani ed extraurbani.
          </p>
        </>
      }
    />
  );
}
