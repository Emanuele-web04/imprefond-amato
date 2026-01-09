import { PageLayout } from "@/components/shared/PageLayout";
import { MainContent } from "@/components/storia/MainContent";
import { NavItem } from "@/components/storia/SidebarNav";

const storiaNavItems: NavItem[] = [
  { label: "Chi Siamo", href: "/storia#chi-siamo", id: "chi-siamo" },
  { label: "Cultura", href: "/storia#cultura", id: "cultura" },
  { label: "Timeline", href: "/storia#timeline", id: "timeline" },
  { label: "1920", href: "/storia#timeline-1920", id: "timeline-1920" },
  { label: "1950", href: "/storia#timeline-1950", id: "timeline-1950" },
  { label: "1975", href: "/storia#timeline-1975", id: "timeline-1975" },
  { label: "1995", href: "/storia#timeline-1995", id: "timeline-1995" },
  { label: "2010", href: "/storia#timeline-2010", id: "timeline-2010" },
  { label: "2020", href: "/storia#timeline-2020", id: "timeline-2020" },
  { label: "2026", href: "/storia#timeline-2026", id: "timeline-2026" },
];

export default function StoriaPage() {
  return (
    <PageLayout
      title="Storia"
      heroImage="/imprefond_images/old-story2.webp"
      breadcrumbItems={[{ label: "Storia" }]}
      navItems={storiaNavItems}
      defaultActiveId="chi-siamo"
    >
      <MainContent />
    </PageLayout>
  );
}
