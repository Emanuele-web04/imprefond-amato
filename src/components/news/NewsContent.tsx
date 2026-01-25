/* eslint-disable @next/next/no-img-element */
"use client";

import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { useInView } from "motion/react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface NewsItem {
  date: string;
  location: string;
  title: string;
  excerpt: string;
  fullContent: string;
  image: string;
  carouselImages?: string[];
}

// Cortina images
const cortinaImages = [
  "/cortina-3-2025/_DSC4952.jpg",
  "/cortina-3-2025/_DSC4953.jpg",
  "/cortina-3-2025/_DSC4956.jpg",
  "/cortina-3-2025/_DSC4959.jpg",
  "/cortina-3-2025/_DSC4961.jpg",
  "/cortina-3-2025/_DSC4966.jpg",
  "/cortina-3-2025/_DSC4974.jpg",
  "/cortina-3-2025/_DSC4976.jpg",
  "/cortina-3-2025/_DSC4980.jpg",
  "/cortina-3-2025/_DSC4982.jpg",
  "/cortina-3-2025/_DSC4985.jpg",
  "/cortina-3-2025/_DSC4988.jpg",
  "/cortina-3-2025/_DSC4989.jpg",
  "/cortina-3-2025/_DSC4990.jpg",
  "/cortina-3-2025/_DSC4991.jpg",
  "/cortina-3-2025/_DSC5001.jpg",
];

// Galleria Chiangiano images
const galleriaImages = [
  "/foto tagliate/Manutenzione galleria/manutenzione-galleria/WhatsApp Image 2026-01-12 at 20.52.09.webp",
  "/foto tagliate/Manutenzione galleria/manutenzione-galleria/WhatsApp Image 2026-01-12 at 20.52.09 (1).webp",
  "/foto tagliate/Manutenzione galleria/manutenzione-galleria/WhatsApp Image 2026-01-12 at 20.52.09 (2).webp",
  "/foto tagliate/Manutenzione galleria/manutenzione-galleria/WhatsApp Image 2026-01-12 at 20.52.09 (3).webp",
  "/foto tagliate/Manutenzione galleria/manutenzione-galleria/WhatsApp Image 2026-01-12 at 20.52.09 (4).webp",
  "/foto tagliate/Manutenzione galleria/manutenzione-galleria/_DSC5010.jpg",
  "/foto tagliate/Manutenzione galleria/manutenzione-galleria/_DSC5011.jpg",
];

// SS51 images
const ss51Images = ["/SS51/ss51-1.jpeg", "/SS51/ss51-2.jpeg"];

const newsItems: NewsItem[] = [
  {
    date: "2026",
    location: "Milano Cortina",
    title: "Milano Cortina - Olimpiadi 2026",
    excerpt:
      "Partecipazione ai lavori per le Olimpiadi Invernali Milano Cortina 2026.",
    fullContent:
      "Imprefond è orgogliosa di partecipare ai lavori per le Olimpiadi Invernali Milano Cortina 2026. Il nostro team sta realizzando fondazioni speciali e opere di consolidamento per le infrastrutture olimpiche, contribuendo a questo importante evento internazionale che porterà l'Italia al centro del mondo dello sport invernale.",
    image: "/cortina-3-2025/_DSC4953.jpg",
    carouselImages: cortinaImages,
  },
  {
    date: "2025",
    location: "Italia",
    title: "Manutenzione Galleria",
    excerpt:
      "Intervento di consolidamento strutturale per la Galleria Chiangiano.",
    fullContent:
      "Imprefond prosegue il suo impegno nelle grandi opere infrastrutturali con l'intervento presso la Galleria Chiangiano. Il progetto prevede complessi lavori di consolidamento e messa in sicurezza del tunnel, utilizzando tecnologie avanzate per garantire la stabilità della struttura e la sicurezza della viabilità. L'opera rappresenta un tassello fondamentale per il potenziamento della rete viaria locale.",
    image:
      "/foto tagliate/Manutenzione galleria/manutenzione-galleria/WhatsApp Image 2026-01-12 at 20.52.09.webp",
    carouselImages: galleriaImages,
  },
  {
    date: "2025",
    location: "Tai Di Cadore",
    title: "S.S.51 di Alemagna",
    excerpt: "Progetto S.S.51 - Lavori di fondazione e consolidamento.",
    fullContent:
      "Imprefond è impegnata nel progetto S.S.51, realizzando opere di fondazione speciale e consolidamento strutturale. Il progetto rappresenta un importante intervento nel settore delle infrastrutture, dimostrando la nostra capacità di affrontare progetti complessi con competenza e professionalità.",
    image: "/SS51/ss51-1.jpeg",
    carouselImages: ss51Images,
  },
];

export function NewsContent() {
  return (
    <div className="space-y-0">
      {newsItems.map((item, index) => (
        <NewsArticle key={index} item={item} index={index} />
      ))}
    </div>
  );
}

interface NewsArticleProps {
  item: NewsItem;
  index: number;
}

// Helper per generare slug dal titolo
function createSlug(title: string): string {
  // Mapping specifico per titoli che devono avere slug diversi
  const slugMap: Record<string, string> = {
    "Manutenzione Galleria": "galleria-chiangiano",
    "S.S.51": "ss51",
  };

  if (slugMap[title]) {
    return slugMap[title];
  }

  const mainTitle = title.split("-")[0].trim();
  return mainTitle
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}

function NewsArticle({ item }: NewsArticleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [dialogOpen, setDialogOpen] = useState(false);
  const slug = createSlug(item.title);

  return (
    <article
      id={slug}
      ref={ref}
      className="relative flex flex-col min-h-screen w-full mb-10 sm:mb-12 md:mb-14 lg:mb-16"
    >
      {/* Immagine full height - Clickable if carousel images exist */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[70vh]"
      >
        {item.carouselImages ? (
          <div
            className="w-full h-full cursor-pointer"
            onClick={() => setDialogOpen(true)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-lg hover:opacity-95 transition-opacity"
            />
          </div>
        ) : (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover rounded-lg"
          />
        )}
      </motion.div>

      {/* Contenuto Testuale */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative w-full bg-white py-6 sm:py-7 md:py-8"
      >
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-500">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <FaCalendar className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{item.date}</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <FaMapMarkerAlt className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{item.location}</span>
          </div>
        </div>

        <h2 className="text-title mb-4 sm:mb-5 md:mb-6">{item.title}</h2>

        <p className="text-description leading-relaxed">{item.fullContent}</p>
      </motion.div>

      {/* Carousel Dialog */}
      {item.carouselImages && (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-[98vw] sm:max-w-[95vw] md:max-w-[90vw] lg:max-w-[85vw] xl:max-w-7xl w-full p-2 sm:p-4 md:p-8 border-none bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl">
            <div className="relative w-full flex flex-col items-center justify-center">
              <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                  {item.carouselImages.map((image, idx) => (
                    <CarouselItem key={idx}>
                      <div className="flex items-center justify-center p-1 sm:p-2 md:p-4">
                        <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center">
                          <img
                            src={image}
                            alt={`${item.title} - ${idx + 1}`}
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
      )}
    </article>
  );
}
