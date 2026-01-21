"use client";

/* eslint-disable @next/next/no-img-element */
import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";
import { PROJECT_IMAGES } from "@/utils/carousel";
import { timelineEvents } from "@/utils/timelineData";
import { ImageDialog } from "../shared/ImageDialog";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image: string;
}

export function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Immagini old-story per gli anni '90
  const oldStoryImages = [
    "/imprefond_images/old-story.webp",
    "/imprefond_images/old-story2.webp",
    "/imprefond_images/old-story3.webp",
    "/imprefond_images/old-story4.webp",
    "/imprefond_images/old-story5.webp",
  ];

  // Genera immagini per ogni evento (ordine statico per evitare hydration mismatch)
  // Mappa ogni anno a un'immagine specifica per garantire che siano tutte diverse
  const yearToImageMap: Record<string, string> = {
    "1920": oldStoryImages[0],
    "1950": oldStoryImages[1],
    "1975": oldStoryImages[2],
    "1995": oldStoryImages[3],
    "2010": `/compressjpeg0-imprefond/${PROJECT_IMAGES[0]}`,
    "2020": `/compressjpeg0-imprefond/${PROJECT_IMAGES[1]}`,
    "2026": `/compressjpeg0-imprefond/${PROJECT_IMAGES[2]}`,
  };

  const events: TimelineEvent[] = timelineEvents.map((event) => {
    return {
      ...event,
      image:
        yearToImageMap[event.year] ||
        `/compressjpeg0-imprefond/_DSC4977-min.jpg`,
    };
  });

  return (
    <div id="timeline" ref={ref} className="mb-8 sm:mb-10 md:mb-12">
      <motion.h2
        className="text-section-title mb-8 sm:mb-10 md:mb-12"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        La Nostra Storia
      </motion.h2>

      <div className="relative">
        {/* Linea verticale */}
        <div className="absolute left-4 sm:left-5 md:left-6 lg:left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

        {/* Eventi */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {events.map((event, index) => (
            <motion.div
              key={event.year}
              id={`timeline-${event.year}`}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="relative pl-12 sm:pl-16 md:pl-20 lg:pl-28"
            >
              {/* Punto sulla timeline - perfettamente centrato */}
              <div className="absolute left-4 sm:left-5 md:left-6 lg:left-[33px] top-0 transform -translate-x-1/2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-blue-950 border-2 sm:border-3 md:border-4 border-gray-300 flex items-center justify-center relative z-10">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full bg-white"></div>
                </div>
              </div>

              {/* Contenuto - articolo compatto */}
              <div className="bg-white overflow-hidden">
                {/* Immagine banner */}
                <div className="w-full h-40 sm:h-48 md:h-56 lg:h-64 mb-3 sm:mb-4">
                  <ImageDialog
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    containerClassName="rounded-lg overflow-hidden w-full h-full"
                  />
                </div>

                {/* Testo */}
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-medium text-black mb-1.5 sm:mb-2">
                    {event.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 font-geist-sans leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
