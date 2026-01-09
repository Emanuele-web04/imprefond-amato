import { ContentSection } from "../shared/ContentSection";

export function Cultura() {
  return (
    <ContentSection
      id="cultura"
      title="Cultura"
      content={
        <>
          <p>
            La nostra cultura aziendale si basa su valori fondamentali che
            guidano ogni nostra decisione e azione quotidiana.
          </p>
          <p>
            L&apos;integrità, la trasparenza e il rispetto reciproco sono al
            centro delle nostre relazioni con clienti, fornitori e dipendenti.
            Crediamo nel lavoro di squadra e nella collaborazione come strumenti
            essenziali per raggiungere obiettivi ambiziosi.
          </p>
          <p>
            La formazione continua e lo sviluppo professionale del nostro team
            sono priorità assolute. Investiamo costantemente nelle competenze
            delle nostre persone, consapevoli che sono loro il vero motore del
            nostro successo.
          </p>
        </>
      }
    />
  );
}
