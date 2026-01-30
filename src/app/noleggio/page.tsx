import { MainContent } from "@/components/noleggio/MainContent";
import { PageLayout } from "@/components/shared/PageLayout";
import { NavItem } from "@/components/storia/SidebarNav";

const noleggioNavItems: NavItem[] = [
  { label: "Trivelle", href: "/noleggio#trivelle", id: "trivelle" },
  { label: "Gruppi Elettrogeno", href: "/noleggio#gruppo-elettrogeno", id: "gruppo-elettrogeno" },
  { label: "Torre Faro", href: "/noleggio#torre-fari", id: "torre-fari" },
  { label: "Manipolatore CPH", href: "/noleggio#manipolatore-cph", id: "manipolatore-cph" },
  { label: "Escavatori", href: "/noleggio#escavatori", id: "escavatori" },
  { label: "Escavatore CPH", href: "/noleggio#escavatore-cph", id: "escavatore-cph" },
  { label: "Furgoni 35 quintali", href: "/noleggio#furgoni", id: "furgoni" },
  { label: "Macchine Perforatrici", href: "/noleggio#macchine-perforatrici", id: "macchine-perforatrici" },
  { label: "Scavatori CPH", href: "/noleggio#scavatori-cph", id: "scavatori-cph" },
  { label: "Trasporto conto terzi", href: "/noleggio#trasporto", id: "trasporto" },
  { label: "Materiale Perforazione", href: "/noleggio#materiale-perforazione", id: "materiale-perforazione" },
  { label: "Impianti Dai Prá", href: "/noleggio#impianti-daipra", id: "impianti-daipra" },
  { label: "Impianti Bunker", href: "/noleggio#impianti-bunker", id: "impianti-bunker" },
];

export default function NoleggioPage() {
  return (
    <PageLayout
      title="Noleggio Attrezzature"
      heroImage="/new-images/WhatsApp Image 2026-01-21 at 10.25.50.jpeg"
      breadcrumbItems={[{ label: "Noleggio" }]}
      navItems={noleggioNavItems}
      defaultActiveId="trivelle"
      showRisultati={false}
      imagefit="contain"
    >
      <MainContent />
    </PageLayout>
  );
}
