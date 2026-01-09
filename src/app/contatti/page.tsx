import { PageLayout } from "@/components/shared/PageLayout";
import { ContattiContent } from "@/components/contatti/ContattiContent";
import { NavItem } from "@/components/storia/SidebarNav";

const contattiNavItems: NavItem[] = [
  { label: "Informazioni", href: "/contatti#informazioni", id: "informazioni" },
];

export default function ContattiPage() {
  return (
    <PageLayout
      title="Contatti"
      heroImage="/imprefond_images/old-story2.webp"
      breadcrumbItems={[{ label: "Contatti" }]}
      navItems={contattiNavItems}
      defaultActiveId="informazioni"
      showRisultati={false}
    >
      <ContattiContent />
    </PageLayout>
  );
}
