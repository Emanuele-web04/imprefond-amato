"use client";

import { CAROUSEL_IMAGES } from "@/utils/carousel";
import { ContentSection } from "../shared/ContentSection";
import { useState } from "react";

export function ChiSiamo() {
  // Seleziona un'immagine casuale per il contenuto
  const [randomImage] = useState(
    () => CAROUSEL_IMAGES[Math.floor(Math.random() * CAROUSEL_IMAGES.length)]
  );

  return (
    <ContentSection
      id="chi-siamo"
      title="Chi Siamo"
      image={`/compressjpeg0-imprefond/${randomImage}`}
      content={
        <>
          <p>
            Fondata dalla famiglia Amato, Imprefond rappresenta
            l&apos;eccellenza italiana nelle fondazioni speciali. Con radici
            nell&apos;esperienza generazionale, costruiamo fiducia attraverso
            competenza, sicurezza e affidabilità.
          </p>
          <p>
            La dedizione ai nostri valori fondamentali, unita a un focus
            sull&apos;innovazione, ci permette di attrarre e trattenere le
            migliori persone, garantendo risultati eccezionali su ogni progetto.
            Negli ultimi anni abbiamo completato centinaia di progetti in tutta
            Italia, dalle infrastrutture più complesse alle opere pubbliche di
            grande importanza.
          </p>
          <p>
            L&apos;esperienza specializzata nella costruzione, la collaborazione
            con tutti i membri del team di progetto e l&apos;impegno a
            rispettare i nostri impegni contribuiscono al completamento con
            successo di ogni opera.
          </p>
        </>
      }
    />
  );
}
