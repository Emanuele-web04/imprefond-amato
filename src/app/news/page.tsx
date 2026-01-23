import { PageLayout } from "@/components/shared/PageLayout";
import { NewsContent } from "@/components/news/NewsContent";
import { NavItem } from "@/components/storia/SidebarNav";

const newsNavItems: NavItem[] = [
  { label: "Milano Cortina - Olimpiadi 2026", href: "/news#milano-cortina", id: "milano-cortina" },
  { label: "Galleria Chiangiano", href: "/news#galleria-chiangiano", id: "galleria-chiangiano" },
  { label: "S.S.51", href: "/news#ss51", id: "ss51" },
];

export default function NewsPage() {
  return (
    <PageLayout
      title="News & Lavori"
      heroImage="/new-images/WhatsApp Image 2026-01-21 at 10.25.49.jpeg"
      breadcrumbItems={[{ label: "News" }]}
      navItems={newsNavItems}
      defaultActiveId="news-0"
      showRisultati={false}
    >
      <NewsContent />
    </PageLayout>
  );
}
