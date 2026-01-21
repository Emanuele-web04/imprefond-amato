import { PageLayout } from "@/components/shared/PageLayout";
import { MainContent } from "@/components/trivelle/MainContent";
import { NavItem } from "@/components/storia/SidebarNav";

const trivelleNavItems: NavItem[] = [
  { label: "Comacchio MC6", href: "/trivelle#mc6", id: "mc6" },
  { label: "Comacchio MC12", href: "/trivelle#mc12", id: "mc12" },
  { label: "Comacchio MC22", href: "/trivelle#mc22", id: "mc22" },
  { label: "IMT A45", href: "/trivelle#imta45", id: "imta45" },
  { label: "IMT A140", href: "/trivelle#imta140", id: "imta140" },
  { label: "IMT F75", href: "/trivelle#imtf75", id: "imtf75" },
];

export default function TrivellePage() {
  return (
    <PageLayout
      title="Trivelle"
      heroImage="/imprefond_images/old-story2.webp"
      breadcrumbItems={[{ label: "Trivelle" }]}
      navItems={trivelleNavItems}
      defaultActiveId="mc6"
      showRisultati={false}
    >
      <MainContent />
    </PageLayout>
  );
}
