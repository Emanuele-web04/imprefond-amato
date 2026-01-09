import { PageLayout } from "@/components/shared/PageLayout";
import { MainContent } from "@/components/storia/MainContent";

export default function StoriaPage() {
  return (
    <PageLayout
      title="Storia"
      heroImage="/imprefond_images/old-story2.webp"
      breadcrumbItems={[{ label: "Storia" }]}
    >
      <MainContent />
    </PageLayout>
  );
}
