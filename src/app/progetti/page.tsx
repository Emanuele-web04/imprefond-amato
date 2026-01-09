import { PageLayout } from "@/components/shared/PageLayout";
import { ProgettiContent } from "@/components/progetti/ProgettiContent";
import { NavItem } from "@/components/storia/SidebarNav";

const progettiNavItems: NavItem[] = [
  { label: "Panoramica", href: "/progetti#panoramica", id: "panoramica" },
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
