import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { LaFilosofia } from "@/components/LaFilosofia";
import { INumeri } from "@/components/INumeri";
import { ProgettiEvidenza } from "@/components/ProgettiEvidenza";
import { SicurezzaInnovazione } from "@/components/SicurezzaInnovazione";
import { NewsBlog } from "@/components/NewsBlog";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <INumeri />
      <LaFilosofia />
      <SicurezzaInnovazione />
      <NewsBlog />
      <ProgettiEvidenza />
    </main>
  );
}
