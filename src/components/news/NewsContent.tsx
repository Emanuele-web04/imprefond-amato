/* eslint-disable @next/next/no-img-element */
"use client";

import { ContentSection } from "../shared/ContentSection";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";

interface NewsItem {
  date: string;
  location: string;
  title: string;
  excerpt: string;
  fullContent: string;
  image: string;
}

// Immagini journal disponibili
const journalImages = [
  "/imprefond_images/journal1.webp",
  "/imprefond_images/journal2.webp",
];

const newsItems: NewsItem[] = [
  {
    date: "15 Gennaio 2024",
    location: "Milano",
    title: "Nuovo cantiere avviato a Milano",
    excerpt:
      "Avviato il cantiere per le fondazioni del nuovo complesso residenziale nel quartiere Porta Nuova.",
    fullContent:
      "Abbiamo avviato i lavori per il nuovo complesso residenziale nel quartiere Porta Nuova a Milano. L'intervento prevede la realizzazione di micropali per il consolidamento del terreno su un'area di oltre 5000 metri quadrati. Il progetto rappresenta una delle sfide più importanti dell'anno e coinvolge un team di 30 professionisti specializzati.",
    image: journalImages[0],
  },
  {
    date: "10 Gennaio 2024",
    location: "Roma",
    title: "Aggiornamento parco macchine: arriva la nuova perforatrice",
    excerpt:
      "Ampliamento del parco macchine con l'acquisizione di una perforatrice all'avanguardia.",
    fullContent:
      "Continua il nostro impegno nell'innovazione tecnologica con l'acquisizione di una nuova perforatrice di ultima generazione. Il macchinario, dotato di sistemi di controllo automatizzati, permetterà di aumentare l'efficienza e la precisione degli interventi, riducendo al contempo i tempi di esecuzione e l'impatto ambientale.",
    image: journalImages[1],
  },
  {
    date: "5 Gennaio 2024",
    location: "Torino",
    title: "Completato progetto infrastrutturale autostradale",
    excerpt:
      "Concluso con successo il progetto di consolidamento per il ponte autostradale A4.",
    fullContent:
      "Si è concluso con grande successo il progetto di consolidamento per il ponte autostradale A4. L'intervento, durato 8 mesi, ha previsto l'utilizzo di tecniche innovative di iniezione e consolidamento, garantendo la sicurezza e la stabilità della struttura per i prossimi decenni. Il progetto ha ricevuto riconoscimenti per l'eccellenza tecnica e il rispetto dei tempi di consegna.",
    image: journalImages[0],
  },
  {
    date: "20 Dicembre 2023",
    location: "Firenze",
    title: "Partnership con importante studio di ingegneria",
    excerpt:
      "Siglato accordo strategico per la collaborazione su grandi opere pubbliche.",
    fullContent:
      "Abbiamo siglato un importante accordo di partnership con uno dei principali studi di ingegneria italiani. La collaborazione ci permetterà di partecipare a progetti di grande rilevanza nel settore delle infrastrutture e delle opere pubbliche, consolidando la nostra posizione di leader nel mercato delle fondazioni speciali.",
    image: journalImages[1],
  },
  {
    date: "15 Dicembre 2023",
    location: "Bologna",
    title: "Certificazione ISO 45001:2018 ottenuta",
    excerpt:
      "Raggiunto un importante traguardo in materia di sicurezza sul lavoro.",
    fullContent:
      "Siamo orgogliosi di annunciare il conseguimento della certificazione ISO 45001:2018 per i sistemi di gestione della salute e sicurezza sul lavoro. Questo riconoscimento conferma il nostro impegno costante per garantire il massimo livello di sicurezza per tutti i nostri collaboratori e cantieri.",
    image: journalImages[0],
  },
  {
    date: "1 Dicembre 2023",
    location: "Napoli",
    title: "Inaugurazione nuova sede operativa",
    excerpt:
      "Aperta la nuova sede nel Sud Italia per servire meglio il territorio.",
    fullContent:
      "È stata inaugurata la nuova sede operativa a Napoli, che ci permetterà di servire con maggiore efficienza tutto il territorio del Sud Italia. La struttura ospita uffici tecnici, magazzini attrezzature e un'area dedicata alla formazione del personale, rafforzando la nostra presenza capillare sul territorio nazionale.",
    image: journalImages[1],
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

function NewsArticle({ item, index }: NewsArticleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <article
      id={`news-${index}`}
      ref={ref}
      className="relative flex flex-col min-h-screen w-full mb-16"
    >
      {/* Immagine full height */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full h-[60vh] md:h-[70vh]"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </motion.div>

      {/* Contenuto Testuale */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative w-full bg-white py-8"
      >
        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <FaCalendar className="w-4 h-4" />
            <span>{item.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="w-4 h-4" />
            <span>{item.location}</span>
          </div>
        </div>
        
        <h2 className="text-title mb-6">{item.title}</h2>
        
        <p className="text-description leading-relaxed">{item.fullContent}</p>
      </motion.div>
    </article>
  );
}
