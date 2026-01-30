export interface TimelineEventData {
  year: string;
  title: string;
  description?: string;
  showTitle?: boolean;
}

export const timelineEvents: TimelineEventData[] = [
  {
    year: "1920",
    title: "Le Origini",
    showTitle: false,
    // description:
    //   "La famiglia Amato inizia la propria attività nel settore delle trivellazioni nel 1921, stipulando il primo contratto che segnerà l'inizio della nostra storia nel settore delle fondazioni speciali, tramandando da generazione in generazione l'esperienza e la professionalità acquisita.",
  },
  {
    year: "1950",
    title: "I primi contratti",
    showTitle: false,
    // description:
    //   "I primi importanti contratti segnano l'inizio della crescita dell'azienda, consolidando la reputazione di Imprefond nel settore delle fondazioni speciali attraverso progetti di qualità e affidabilità.",
  },
  // Commented out for potential future use:
  // {
  //   year: "1975",
  //   title: "La Specializzazione",
  //   description:
  //     "Imprefond si specializza esclusivamente nelle fondazioni speciali, diventando un punto di riferimento nel settore con progetti sempre più complessi e innovativi.",
  // },
  // {
  //   year: "1995",
  //   title: "L'Innovazione Tecnologica",
  //   description:
  //     "Investimenti massicci in tecnologia e macchinari all'avanguardia permettono all'azienda di affrontare progetti di grande scala con precisione e sicurezza.",
  // },
  // {
  //   year: "2010",
  //   title: "La Certificazione",
  //   description:
  //     "Il Sistema di Gestione per la Qualità di Imprefond F.lli Amato S.R.L. è stato verificato e trovato conforme ai requisiti dello standard UNI EN ISO 9001. La certificazione, rilasciata da ISE Cert e accreditata nel settore IAF 28, copre l'esecuzione di trivellazioni, attestando l'impegno dell'azienda nel mantenere elevati standard qualitativi in tutti i processi operativi.",
  // },
  {
    year: "2022",
    title: "Progetto A26 - Tunnel Genova-Gravellona Toce",
    showTitle: false,
  },
  {
    year: "2026",
    title: "Il Futuro - Milano Cortina Olimpiadi 2026",
    showTitle: false,
  },
];
