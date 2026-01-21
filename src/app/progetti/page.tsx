import { PageLayout } from "@/components/shared/PageLayout";
import { ProgettiContent } from "@/components/progetti/ProgettiContent";
import { NavItem } from "@/components/storia/SidebarNav";

const progettiNavItems: NavItem[] = [
  { label: "Panoramica", href: "/progetti#panoramica", id: "panoramica" },
  { label: "Mappa Progetti", href: "/progetti#mappa", id: "mappa" },
  { label: "Infrastrutture", href: "/progetti#infrastrutture", id: "infrastrutture" },
  { label: "Edilizia Civile", href: "/progetti#edilizia-civile", id: "edilizia-civile" },
  { label: "Opere Pubbliche", href: "/progetti#opere-pubbliche", id: "opere-pubbliche" },
];

export default function ProgettiPage() {
  return (
    <PageLayout
      title="Progetti"
      heroImage="/CANTIERE TAI E VALLE DI CADORE/projects.jpeg"
      breadcrumbItems={[{ label: "Progetti" }]}
      navItems={progettiNavItems}
      defaultActiveId="panoramica"
      showRisultati={false}
    >
      <ProgettiContent />
    </PageLayout>
  );
}
