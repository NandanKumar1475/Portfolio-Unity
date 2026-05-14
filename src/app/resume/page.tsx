import type { Metadata } from "next";
import { ResumeViewer } from "@/components/ResumeViewer";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Nandan Kumar, Unity XR Developer and AR/VR Simulation Engineer.",
};

const highlights = [
  "1 year software professional focused on Unity XR and simulation engineering.",
  "Core strengths in C#, XR Interaction Toolkit, OpenXR, Unity Physics, and Input System.",
  "Project proof across VR training, virtual lab simulation, and XR interaction demos.",
  "Interested in XR startups, simulation companies, medical simulation, and enterprise XR teams.",
];

export default function ResumePage() {
  return (
    <div className="py-20">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Resume"
          title="Resume and recruiter highlights."
          description="A quick view of my Unity XR profile, with the PDF embedded for hiring teams."
        />
        <div className="mb-8 grid gap-4 md:grid-cols-2">
          {highlights.map((highlight) => (
            <Card key={highlight} className="p-5">
              <p className="text-sm leading-6 text-slate-300">{highlight}</p>
            </Card>
          ))}
        </div>
        <ResumeViewer />
      </div>
    </div>
  );
}
