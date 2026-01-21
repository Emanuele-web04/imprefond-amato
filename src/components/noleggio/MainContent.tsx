import { Trivelle } from "./Trivelle";
import { GruppoElettrogeno } from "./GruppoElettrogeno";
import { TorreFari } from "./TorreFari";
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
      <Trivelle />
      <GruppoElettrogeno />
      <TorreFari />
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
