"use client";

import { ContentSection } from "../shared/ContentSection";

export function ChiSiamo() {
  return (
    <ContentSection
      id="chi-siamo"
      title="Chi Siamo"
      image="/CANTIERE TAI E VALLE DI CADORE/20250917_090247.jpg"
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
