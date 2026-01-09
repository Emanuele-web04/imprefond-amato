import { PageLayout } from "@/components/shared/PageLayout";
import { NewsContent } from "@/components/news/NewsContent";

export default function NewsPage() {
  return (
    <PageLayout
      title="News & Aggiornamenti"
      heroImage="/imprefond_images/old-story2.webp"
      breadcrumbItems={[{ label: "News" }]}
      showRisultati={false}
    >
      <NewsContent />
    </PageLayout>
  );
}
