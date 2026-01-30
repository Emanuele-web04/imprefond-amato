import { PageLayout } from "@/components/shared/PageLayout";
import { MainContent } from "@/components/certificazioni/MainContent";
import { NavItem } from "@/components/storia/SidebarNav";

const certificazioniNavItems: NavItem[] = [
  { label: "Attestazione SOA", href: "/certificazioni#soa", id: "soa" },
  { label: "ISO 45001:2023", href: "/certificazioni#iso45001", id: "iso45001" },
  { label: "ISO 9001:2015", href: "/certificazioni#iso9001", id: "iso9001" },
];

export default function CertificazioniPage() {
  return (
    <PageLayout
      title="Certificazioni"
      heroImage="/imprefond-logo.png"
      breadcrumbItems={[{ label: "Certificazioni" }]}
      navItems={certificazioniNavItems}
      defaultActiveId="soa"
      showRisultati={false}
      imagefit="contain"
    >
      <MainContent />
    </PageLayout>
  );
}
