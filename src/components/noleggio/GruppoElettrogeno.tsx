"use client";

import { ContentSection } from "../shared/ContentSection";

export function GruppoElettrogeno() {
  return (
    <ContentSection
      id="gruppo-elettrogeno"
      title="Gruppi Elettrogeno"
      content={
        <>
          <p>
            Disponiamo di gruppi elettrogeni di varie potenze, utili a garantire l'alimentazione continua delle
            attrezzature di cantiere, anche in assenza di rete elettrica. Tutti i generatori sono conformi alle normative
            vigenti.
          </p>
        </>
      }
    />
  );
}
