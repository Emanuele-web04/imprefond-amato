import { PageLayout } from "@/components/shared/PageLayout";
import { ContattiContent } from "@/components/contatti/ContattiContent";

export default function ContattiPage() {
  return (
    <PageLayout
      title="Contatti"
      heroImage="/imprefond_images/old-story2.webp"
      breadcrumbItems={[{ label: "Contatti" }]}
      showRisultati={false}
    >
      <ContattiContent />
    </PageLayout>
  );
}
