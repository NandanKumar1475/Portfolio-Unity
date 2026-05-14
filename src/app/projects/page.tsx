import type { Metadata } from "next";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Unity XR project gallery for Nandan Kumar featuring VR training simulation, virtual chemistry lab simulation, and XR interaction sandbox work.",
};

export default function ProjectsPage() {
  return (
    <div className="py-20">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Project proof for Unity XR and simulation roles."
          description="Filter through work that demonstrates interaction systems, simulation workflows, physics validation, UI guidance, and runtime architecture."
        />
        <ProjectsGallery />
      </div>
    </div>
  );
}
