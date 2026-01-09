import { PageLayout } from "@/components/shared/PageLayout";
import { ServiziContent } from "@/components/servizi/ServiziContent";

export default function ServiziPage() {
  return (
    <PageLayout
      title="Servizi"
      heroImage="/imprefond_images/old-story2.webp"
      breadcrumbItems={[{ label: "Servizi" }]}
      showRisultati={false}
    >
      <ServiziContent />
    </PageLayout>
  );
}
