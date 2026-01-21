import { AttestazioneSoa } from "./AttestazioneSoa";
import { ISO45001 } from "./ISO45001";
import { ISO9001 } from "./ISO9001";

export function MainContent() {
  return (
    <>
      <AttestazioneSoa />
      <ISO45001 />
      <ISO9001 />
    </>
  );
}
