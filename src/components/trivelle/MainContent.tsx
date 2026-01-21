import { ComacchioMC6 } from "./ComacchioMC6";
import { ComacchioMC12 } from "./ComacchioMC12";
import { ComacchioMC22 } from "./ComacchioMC22";
import { IMTA45 } from "./IMTA45";
import { IMTA140 } from "./IMTA140";
import { IMTF75 } from "./IMTF75";

export function MainContent() {
  return (
    <>
      <ComacchioMC6 />
      <ComacchioMC12 />
      <ComacchioMC22 />
      <IMTA45 />
      <IMTA140 />
      <IMTF75 />
    </>
  );
}
