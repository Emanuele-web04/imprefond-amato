import { PageLayout } from "@/components/shared/PageLayout";
import { ProgettiContent } from "@/components/progetti/ProgettiContent";

export default function ProgettiPage() {
  return (
    <PageLayout
      title="Progetti"
      heroImage="/CANTIERE TAI E VALLE DI CADORE/projects.jpeg"
      breadcrumbItems={[{ label: "Progetti" }]}
      showRisultati={false}
    >
      <ProgettiContent />
    </PageLayout>
  );
}
