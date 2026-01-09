import { PageLayout } from "@/components/shared/PageLayout";
import { NewsContent } from "@/components/news/NewsContent";
import { NavItem } from "@/components/storia/SidebarNav";

const newsNavItems: NavItem[] = [
  { label: "Nuovo cantiere a Milano", href: "/news#news-0", id: "news-0" },
  { label: "Nuova perforatrice", href: "/news#news-1", id: "news-1" },
  { label: "Progetto autostradale", href: "/news#news-2", id: "news-2" },
  { label: "Partnership", href: "/news#news-3", id: "news-3" },
  { label: "Certificazione ISO", href: "/news#news-4", id: "news-4" },
  { label: "Nuova sede Napoli", href: "/news#news-5", id: "news-5" },
];

export default function NewsPage() {
  return (
    <PageLayout
      title="News & Aggiornamenti"
      heroImage="/construction.jpg"
      breadcrumbItems={[{ label: "News" }]}
      navItems={newsNavItems}
      defaultActiveId="news-0"
      showRisultati={false}
    >
      <NewsContent />
    </PageLayout>
  );
}
