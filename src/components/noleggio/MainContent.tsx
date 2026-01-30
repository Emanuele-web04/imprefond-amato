import { NoleggiIntro } from "./NoleggiIntro";
import { Trivelle } from "./Trivelle";
import { GruppoElettrogeno } from "./GruppoElettrogeno";
import { TorreFari } from "./TorreFari";
import { ManipolatoreCPH } from "./ManipolatoreCPH";
import { Escavatori } from "./Escavatori";
import { EscavatoreCPH } from "./EscavatoreCPH";
import { Furgoni } from "./Furgoni";
import { MacchinePerforatrici } from "./MacchinePerforatrici";
import { ScavatoriCPH } from "./ScavatoriCPH";
import { Trasporto } from "./Trasporto";
import { MaterialePerforazione } from "./MaterialePerforazione";
import { ImpiantiDaipra } from "./ImpiantiDaipra";
import { ImpiantiBunker } from "./ImpiantiBunker";

export function MainContent() {
  return (
    <>
      <NoleggiIntro />
      <Trivelle />
      <GruppoElettrogeno />
      <TorreFari />
      <ManipolatoreCPH />
      <Escavatori />
      <EscavatoreCPH />
      <Furgoni />
      <MacchinePerforatrici />
      <ScavatoriCPH />
      <Trasporto />
      <MaterialePerforazione />
      <ImpiantiDaipra />
      <ImpiantiBunker />
    </>
  );
}
