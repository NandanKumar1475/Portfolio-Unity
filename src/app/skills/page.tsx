import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillGrid } from "@/components/SkillGrid";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Unity, C#, XR Interaction Toolkit, OpenXR, Input System, optimization, profiling, Git, Blender, and developer tools used by Nandan Kumar.",
};

export default function SkillsPage() {
  return (
    <div className="py-20">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Skills"
          title="A focused Unity XR skill set for simulation teams."
          description="Organized around the way XR products are actually built: language fluency, interaction tooling, performance, and production workflow."
        />
        <SkillGrid />
      </div>
      <CTASection />
    </div>
  );
}
