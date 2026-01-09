import { PageLayout } from "@/components/shared/PageLayout";
import { ServiziContent } from "@/components/servizi/ServiziContent";
import { NavItem } from "@/components/storia/SidebarNav";

const serviziNavItems: NavItem[] = [
  { label: "Panoramica", href: "/servizi#panoramica", id: "panoramica" },
];

export default function ServiziPage() {
  return (
    <PageLayout
      title="Servizi"
      heroImage="/imprefond_images/old-story2.webp"
      breadcrumbItems={[{ label: "Servizi" }]}
      navItems={serviziNavItems}
      defaultActiveId="panoramica"
      showRisultati={false}
    >
      <ServiziContent />
    </PageLayout>
  );
}
