import { PageLayout } from "@/components/shared/PageLayout";
import { MainContent } from "@/components/storia/MainContent";
import { NavItem } from "@/components/storia/SidebarNav";
import { timelineEvents } from "@/utils/timelineData";

const storiaNavItems: NavItem[] = [
  { label: "Chi Siamo", href: "/storia#chi-siamo", id: "chi-siamo" },
  { label: "Cultura", href: "/storia#cultura", id: "cultura" },
  { label: "Timeline", href: "/storia#timeline", id: "timeline" },
  // Filter out commented years (1975, 1995, 2010) from sidebar
  ...timelineEvents
    .filter((event) => !["1975", "1995", "2010"].includes(event.year))
    .map((event) => ({
      label: event.title,
      href: `/storia#timeline-${event.year}`,
      id: `timeline-${event.year}`,
    })),
];

export default function StoriaPage() {
  return (
    <PageLayout
      title="La Storia di Imprefond"
      heroImage="/CANTIERE TAI E VALLE DI CADORE/20250917_090247.jpg"
      breadcrumbItems={[{ label: "La Storia di Imprefond" }]}
      navItems={storiaNavItems}
      defaultActiveId="chi-siamo"
      showRisultati={false}
      imagefit="contain"
      mobileTitleCentered={true}
    >
      <MainContent />
    </PageLayout>
  );
}
