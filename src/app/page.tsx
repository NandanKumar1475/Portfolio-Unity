import { AboutPreview } from "@/components/AboutPreview";
import { CTASection } from "@/components/CTASection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { HeroSection } from "@/components/HeroSection";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsSection } from "@/components/StatsSection";
import { Card } from "@/components/ui/card";

const reasons = [
  {
    title: "Unity Architecture",
    description:
      "I structure interactions, configuration, and feedback as modular systems instead of one-off scene scripts.",
  },
  {
    title: "XR Interaction Systems",
    description:
      "I build grab, ray, socket, teleport, UI, and validation workflows around XR Interaction Toolkit and OpenXR.",
  },
  {
    title: "Simulation Workflows",
    description:
      "I translate real procedures into step-based digital training flows with clear success and failure states.",
  },
  {
    title: "Performance Focus",
    description:
      "I consider object pooling, physics costs, allocation behavior, and readable profiling signals during development.",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturedProjects />
      <AboutPreview />
      <section className="py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Hiring signal"
            title="Built for XR teams that care about reliable interaction behavior."
            description="The site is intentionally focused on recruiter conversion: fast project proof, direct skill mapping, and a clear engineering story."
            align="center"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <Card key={reason.title}>
                <h3 className="text-lg font-semibold text-white">{reason.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{reason.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
