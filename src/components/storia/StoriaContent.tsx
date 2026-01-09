import { ContentSection } from "../shared/ContentSection";

export function StoriaContent() {
  return (
    <ContentSection
      id="storia"
      title="Storia"
      content={
        <>
          <p>
            La storia di Imprefond inizia decenni fa, quando la famiglia Amato
            ha deciso di portare innovazione e qualità nel settore delle
            fondazioni speciali in Italia.
          </p>
          <p>
            Dal primo cantiere ai grandi progetti infrastrutturali di oggi, il
            nostro percorso è stato caratterizzato da crescita continua,
            investimenti in tecnologia e un&apos;attenzione costante alla
            qualità del servizio.
          </p>
          <p>
            Ogni progetto completato è un tassello della nostra storia, una
            testimonianza della fiducia che i nostri clienti hanno riposto in
            noi nel corso degli anni. Questa eredità ci spinge a guardare sempre
            avanti, con ambizione e determinazione.
          </p>
        </>
      }
    />
  );
}
