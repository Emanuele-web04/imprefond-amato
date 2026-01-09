import { ContentSection } from "../shared/ContentSection";
import {
  FaTools,
  FaLayerGroup,
  FaHammer,
  FaBuilding,
  FaShieldAlt,
  FaAward,
} from "react-icons/fa";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <FaTools className="w-8 h-8" />,
    title: "Pali e Micropali",
    description:
      "Realizzazione di pali e micropali per il consolidamento delle fondazioni e il miglioramento delle caratteristiche geotecniche del terreno.",
  },
  {
    icon: <FaLayerGroup className="w-8 h-8" />,
    title: "Diaframmi e Paratie",
    description:
      "Costruzione di diaframmi e paratie per opere di contenimento e impermeabilizzazione, garantendo stabilità e sicurezza.",
  },
  {
    icon: <FaHammer className="w-8 h-8" />,
    title: "Consolidamento Terreni",
    description:
      "Tecniche avanzate per il consolidamento e il miglioramento delle proprietà meccaniche dei terreni di fondazione.",
  },
  {
    icon: <FaBuilding className="w-8 h-8" />,
    title: "Sondaggi Geognostici",
    description:
      "Indagini geotecniche approfondite per la caratterizzazione del sottosuolo e la progettazione ottimale delle fondazioni.",
  },
  {
    icon: <FaShieldAlt className="w-8 h-8" />,
    title: "Iniezioni di Consolidamento",
    description:
      "Interventi di iniezione per il consolidamento mirato di terreni e strutture esistenti.",
  },
  {
    icon: <FaAward className="w-8 h-8" />,
    title: "Progettazione e Consulenza",
    description:
      "Supporto tecnico specializzato per la progettazione e l'ottimizzazione di interventi di fondazione.",
  },
];

export function ServiziContent() {
  return (
    <>
      <ContentSection
        id="panoramica"
        title="I Nostri Servizi"
        content={
          <>
            <p>
              Offriamo una gamma completa di servizi specializzati nel settore
              delle fondazioni speciali e del consolidamento terreni. Ogni
              intervento è studiato su misura per garantire la massima qualità
              e sicurezza.
            </p>
          </>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="text-blue-950 flex-shrink-0">{service.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-geist-sans text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
