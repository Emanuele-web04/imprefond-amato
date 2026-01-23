import { PageLayout } from "@/components/shared/PageLayout";
import { ProgettiContent } from "@/components/progetti/ProgettiContent";
import { NavItem } from "@/components/storia/SidebarNav";

const progettiNavItems: NavItem[] = [
  { label: "Panoramica", href: "/progetti#panoramica", id: "panoramica" },
  { label: "Mappa Progetti", href: "/progetti#mappa", id: "mappa" },
  { label: "Cortina 2026", href: "/progetti#trivellazioni", id: "trivellazioni" },
  { label: "Cantieri vari", href: "/progetti#cantieri-vari", id: "cantieri-vari" },
  { label: "Edilizia", href: "/progetti#edilizia", id: "edilizia" },
];

export default function ProgettiPage() {
  return (
    <PageLayout
      title="Progetti"
      heroImage="/cortina-1-2025/_DSC4950.jpg"
      breadcrumbItems={[{ label: "Progetti" }]}
      navItems={progettiNavItems}
      defaultActiveId="panoramica"
      showRisultati={false}
    >
      <ProgettiContent />
    </PageLayout>
  );
}
