"use client";

import { ContentSection } from "../shared/ContentSection";

export function ImpiantiBunker() {
  return (
    <ContentSection
      id="impianti-bunker"
      title="Impianti Bunker (spritz)"
      content={
        <>
          <p>
            Pompe ideate per il pompaggio di calcestruzzo con inerti fino a 25 mm di granulometria. 
            Con queste macchine è possibile produrre cemento cellulare e calcestruzzo leggero polistirenico.
          </p>
          <p>
            Particolarmente indicate per pompare malte comuni o fibrorinforzate, massetti autolivellanti a base anidrita o cemento, 
            calcestruzzo autocompattante e impasti di polistirolo.
          </p>
          <p>
            Anche per spruzzare intonaco e betoncino (spritz beton) e per iniettare miscele di cemento e bentonite in micropali e tiranti.
          </p>
        </>
      }
    />
  );
}
