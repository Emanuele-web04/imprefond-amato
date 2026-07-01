"use client";

/* eslint-disable @next/next/no-img-element */
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { useInView } from "motion/react";
import { PROJECT_IMAGES } from "@/utils/carousel";
import { timelineEvents } from "@/utils/timelineData";
import { ImageDialog } from "../shared/ImageDialog";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TimelineEvent {
  year: string;
  title: string;
  description?: string;
  showTitle?: boolean;
  image: string;
}

export function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [contractDialogOpen, setContractDialogOpen] = useState(false);
  const [certificazioniDialogOpen, setCertificazioniDialogOpen] =
    useState(false);
  const [tunnelDialogOpen, setTunnelDialogOpen] = useState(false);

  // Contract images for the carousel (1950) - using pre-rotated images
  const contractImages = [
    "/compressed/1.webp",
    "/compressed/2.webp",
    "/compressed/3.webp",
  ];

  // Certificazioni images for the carousel (2010)
  const certificazioniImages = [
    "/certificazioni-amato/att.7963.png",
    "/certificazioni-amato/CERTIFICAT 171 OHS IMPREFOND-1.png",
    "/certificazioni-amato/ISO 9001 IMPREFOND (2)-1.png",
  ];

  // Tunnel project images for the carousel (2022) - using journal1 and journal2
  const tunnelImages = [
    "/imprefond_images/journal1.webp",
    "/imprefond_images/journal2.webp",
  ];

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
    "1920": "/new-images/bw-imprefond.jpeg",
    "1950": "/compressed/1.webp", // Using pre-rotated image
    "1975": oldStoryImages[3], // Moved from 1995
    "1995": "/pngs/9.jpg", // New image for Innovazione Tecnologica
    "2010": "/certificazioni-amato/ISO 9001 IMPREFOND (2)-1.png",
    "2022": "/imprefond_images/journal2.webp", // Changed to use journal1 instead of tunnel-comacchio-article
    "2026": "/cortina-2-2025/_DSC4955.jpg",
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
                {event.year === "1950" ? (
                  <div className="w-full mb-6">
                    {/* Desktop xl+: Show all 3 contracts side by side */}
                    <div className="hidden xl:grid xl:grid-cols-3 gap-4">
                      {contractImages.map((image, index) => (
                        <div
                          key={index}
                          className="cursor-pointer rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                          onClick={() => setContractDialogOpen(true)}
                        >
                          <img
                            src={image}
                            alt={`Contratto ${index + 1}`}
                            className="w-full h-auto"
                          />
                        </div>
                      ))}
                    </div>
                    {/* Mobile/Tablet: Show single image that opens carousel */}
                    <div
                      className="xl:hidden cursor-pointer rounded-lg overflow-hidden"
                      onClick={() => setContractDialogOpen(true)}
                      style={{ maxWidth: "300px" }}
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                ) : event.year === "1975" ? (
                  <div className="w-full mb-6">
                    <div
                      className="rounded-lg overflow-hidden"
                      style={{ maxWidth: "300px" }}
                    >
                      <ImageDialog
                        src={event.image}
                        alt={event.title}
                        className="w-full h-auto"
                        containerClassName="rounded-lg overflow-hidden w-full"
                      />
                    </div>
                  </div>
                ) : event.year === "2010" ? (
                  <div className="w-full mb-6">
                    {/* Desktop xl+: Show all 3 certificates side by side */}
                    <div className="hidden xl:grid xl:grid-cols-3 gap-4">
                      {certificazioniImages.map((image, index) => (
                        <div
                          key={index}
                          className="cursor-pointer rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                          onClick={() => setCertificazioniDialogOpen(true)}
                        >
                          <img
                            src={image}
                            alt={`Certificazione ${index + 1}`}
                            className="w-full h-auto"
                          />
                        </div>
                      ))}
                    </div>
                    {/* Mobile/Tablet: Show single image that opens carousel */}
                    <div
                      className="xl:hidden cursor-pointer rounded-lg overflow-hidden"
                      onClick={() => setCertificazioniDialogOpen(true)}
                      style={{ maxWidth: "300px" }}
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                ) : event.year === "2022" ? (
                  <div className="w-full mb-3 sm:mb-4">
                    <div
                      className="cursor-pointer rounded-lg overflow-hidden"
                      onClick={() => setTunnelDialogOpen(true)}
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-full mb-3 sm:mb-4">
                    <ImageDialog
                      src={event.image}
                      alt={event.title}
                      className="w-full h-auto"
                      containerClassName="rounded-lg overflow-hidden w-full"
                    />
                  </div>
                )}

                {/* Testo */}
                <div>
                  {event.showTitle !== false && (
                    <h3 className="text-base sm:text-lg md:text-xl font-medium text-black mb-1.5 sm:mb-2">
                      {event.title}
                    </h3>
                  )}
                  {event.description && (
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 font-geist-sans leading-relaxed">
                      {event.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Carousel Dialog for Contract Images */}
      <Dialog open={contractDialogOpen} onOpenChange={setContractDialogOpen}>
        <DialogContent className="max-w-[98vw] sm:max-w-[95vw] md:max-w-[90vw] lg:max-w-[85vw] xl:max-w-7xl w-full p-2 sm:p-4 md:p-8 border-none bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
          <div className="relative w-full flex flex-col items-center justify-center">
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {contractImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="flex items-center justify-center">
                      <div className="h-[70vh] sm:h-[75vh] flex items-center justify-center">
                        <img
                          src={image}
                          alt={`Contratto Imprefond ${index + 1}`}
                          className="max-w-full max-h-full w-auto h-auto rounded-lg object-contain"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-4">
                <CarouselPrevious className="relative left-0 translate-x-0 translate-y-0" />
                <CarouselNext className="relative right-0 translate-x-0 translate-y-0" />
              </div>
            </Carousel>
          </div>
        </DialogContent>
      </Dialog>

      {/* Carousel Dialog for Certificazioni Images */}
      <Dialog
        open={certificazioniDialogOpen}
        onOpenChange={setCertificazioniDialogOpen}
      >
        <DialogContent className="max-w-[98vw] sm:max-w-[95vw] md:max-w-[90vw] lg:max-w-[85vw] xl:max-w-7xl w-full p-2 sm:p-4 md:p-8 border-none bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
          <div className="relative w-full flex flex-col items-center justify-center">
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {certificazioniImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="flex items-center justify-center">
                      <div className="h-[70vh] sm:h-[75vh] flex items-center justify-center">
                        <img
                          src={image}
                          alt={`Certificazione ${index + 1}`}
                          className="max-w-full max-h-full w-auto h-auto rounded-lg object-contain"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-4">
                <CarouselPrevious className="relative left-0 translate-x-0 translate-y-0" />
                <CarouselNext className="relative right-0 translate-x-0 translate-y-0" />
              </div>
            </Carousel>
          </div>
        </DialogContent>
      </Dialog>

      {/* Carousel Dialog for Tunnel Project Images */}
      <Dialog open={tunnelDialogOpen} onOpenChange={setTunnelDialogOpen}>
        <DialogContent className="max-w-[98vw] sm:max-w-[95vw] md:max-w-[90vw] lg:max-w-[85vw] xl:max-w-7xl w-full p-2 sm:p-4 md:p-8 border-none bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
          <div className="relative w-full flex flex-col items-center justify-center">
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {tunnelImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="flex items-center justify-center">
                      <div className="h-[70vh] sm:h-[75vh] flex items-center justify-center">
                        <img
                          src={image}
                          alt={`Progetto Tunnel A26 ${index + 1}`}
                          className="max-w-full max-h-full w-auto h-auto rounded-lg object-contain"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-4">
                <CarouselPrevious className="relative left-0 translate-x-0 translate-y-0" />
                <CarouselNext className="relative right-0 translate-x-0 translate-y-0" />
              </div>
            </Carousel>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
