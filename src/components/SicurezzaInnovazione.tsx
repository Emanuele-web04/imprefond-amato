/* eslint-disable @next/next/no-img-element */
"use client";

import { SplitSection } from "./SplitSection";
import { CAROUSEL_IMAGES } from "@/utils/carousel";
import { useMemo } from "react";
import { FaShieldAlt, FaTruck, FaLeaf } from "react-icons/fa";
import { TbTruck } from "react-icons/tb";

export function SicurezzaInnovazione() {
  // Seleziona un'immagine casuale
  const randomImage = useMemo(() => {
    const shuffled = [...CAROUSEL_IMAGES].sort(() => 0.5 - Math.random());
    return `/compressjpeg0-imprefond/${shuffled[0]}`;
  }, []);

  return (
    <SplitSection
      image={randomImage}
      imagePosition="right"
      title="Sicurezza e Innovazione"
      ctaText="Scopri i nostri servizi"
      ctaLink="/#aree-eccellenza"
      content={
        <>
          <p className="mb-6 text-lg md:text-xl text-gray-700 font-geist-sans">
            Il settore delle fondazioni è ad alto rischio. Sicurezza e innovazione 
            sono al centro di tutto ciò che facciamo.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <TbTruck className="w-5 h-5 text-blue-900" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Parco Macchine Moderno
                </h3>
                <p className="text-sm text-gray-600 font-geist-sans">
                  Macchinari all&apos;avanguardia per efficienza, precisione e sicurezza. 
                  Simbolo di innovazione tecnologica nel settore.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <FaShieldAlt className="w-5 h-5 text-blue-900" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Sicurezza sul Lavoro
                </h3>
                <p className="text-sm text-gray-600 font-geist-sans">
                  Impegno per zero infortuni. Formazione continua, procedure rigorose 
                  e attrezzature certificate garantiscono un ambiente sicuro.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <FaLeaf className="w-5 h-5 text-blue-900" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Sostenibilità Ambientale
                </h3>
                <p className="text-sm text-gray-600 font-geist-sans">
                  Tecniche innovative, materiali sostenibili e processi ottimizzati 
                  che rispettano l&apos;ecosistema circostante.
                </p>
              </div>
            </div>
          </div>
        </>
      }
    />
  );
}
