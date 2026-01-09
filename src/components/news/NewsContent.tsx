import { ContentSection } from "../shared/ContentSection";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

interface NewsItem {
  date: string;
  location: string;
  title: string;
  excerpt: string;
  fullContent: string;
}

const newsItems: NewsItem[] = [
  {
    date: "15 Gennaio 2024",
    location: "Milano",
    title: "Nuovo cantiere avviato a Milano",
    excerpt:
      "Avviato il cantiere per le fondazioni del nuovo complesso residenziale nel quartiere Porta Nuova.",
    fullContent:
      "Abbiamo avviato i lavori per il nuovo complesso residenziale nel quartiere Porta Nuova a Milano. L'intervento prevede la realizzazione di micropali per il consolidamento del terreno su un'area di oltre 5000 metri quadrati. Il progetto rappresenta una delle sfide più importanti dell'anno e coinvolge un team di 30 professionisti specializzati.",
  },
  {
    date: "10 Gennaio 2024",
    location: "Roma",
    title: "Aggiornamento parco macchine: arriva la nuova perforatrice",
    excerpt:
      "Ampliamento del parco macchine con l'acquisizione di una perforatrice all'avanguardia.",
    fullContent:
      "Continua il nostro impegno nell'innovazione tecnologica con l'acquisizione di una nuova perforatrice di ultima generazione. Il macchinario, dotato di sistemi di controllo automatizzati, permetterà di aumentare l'efficienza e la precisione degli interventi, riducendo al contempo i tempi di esecuzione e l'impatto ambientale.",
  },
  {
    date: "5 Gennaio 2024",
    location: "Torino",
    title: "Completato progetto infrastrutturale autostradale",
    excerpt:
      "Concluso con successo il progetto di consolidamento per il ponte autostradale A4.",
    fullContent:
      "Si è concluso con grande successo il progetto di consolidamento per il ponte autostradale A4. L'intervento, durato 8 mesi, ha previsto l'utilizzo di tecniche innovative di iniezione e consolidamento, garantendo la sicurezza e la stabilità della struttura per i prossimi decenni. Il progetto ha ricevuto riconoscimenti per l'eccellenza tecnica e il rispetto dei tempi di consegna.",
  },
  {
    date: "20 Dicembre 2023",
    location: "Firenze",
    title: "Partnership con importante studio di ingegneria",
    excerpt:
      "Siglato accordo strategico per la collaborazione su grandi opere pubbliche.",
    fullContent:
      "Abbiamo siglato un importante accordo di partnership con uno dei principali studi di ingegneria italiani. La collaborazione ci permetterà di partecipare a progetti di grande rilevanza nel settore delle infrastrutture e delle opere pubbliche, consolidando la nostra posizione di leader nel mercato delle fondazioni speciali.",
  },
  {
    date: "15 Dicembre 2023",
    location: "Bologna",
    title: "Certificazione ISO 45001:2018 ottenuta",
    excerpt:
      "Raggiunto un importante traguardo in materia di sicurezza sul lavoro.",
    fullContent:
      "Siamo orgogliosi di annunciare il conseguimento della certificazione ISO 45001:2018 per i sistemi di gestione della salute e sicurezza sul lavoro. Questo riconoscimento conferma il nostro impegno costante per garantire il massimo livello di sicurezza per tutti i nostri collaboratori e cantieri.",
  },
  {
    date: "1 Dicembre 2023",
    location: "Napoli",
    title: "Inaugurazione nuova sede operativa",
    excerpt:
      "Aperta la nuova sede nel Sud Italia per servire meglio il territorio.",
    fullContent:
      "È stata inaugurata la nuova sede operativa a Napoli, che ci permetterà di servire con maggiore efficienza tutto il territorio del Sud Italia. La struttura ospita uffici tecnici, magazzini attrezzature e un'area dedicata alla formazione del personale, rafforzando la nostra presenza capillare sul territorio nazionale.",
  },
];

export function NewsContent() {
  return (
    <>
      <ContentSection
        id="tutte-le-news"
        title="Tutte le News"
        content={
          <>
            <p>
              Resta aggiornato sulle nostre attività, progetti e innovazioni nel
              settore delle fondazioni speciali.
            </p>
          </>
        }
      />

      <div className="space-y-8 mt-12">
        {newsItems.map((item, index) => (
          <article
            key={index}
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <FaCalendar className="w-4 h-4" />
                <span>{item.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="w-4 h-4" />
                <span>{item.location}</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black mb-3">
              {item.title}
            </h3>
            <p className="text-gray-700 font-geist-sans mb-4 leading-relaxed">
              {item.fullContent}
            </p>
          </article>
        ))}
      </div>
    </>
  );
}
