import type { Metadata } from "next";
import Image from "next/image";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillGrid } from "@/components/SkillGrid";
import { Card } from "@/components/ui/card";
import { strengths } from "@/data/experience";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Nandan Kumar, a Unity XR Developer focused on AR/VR simulation engineering, interaction workflows, and performance-minded Unity architecture.",
};

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="container-shell">
        <SectionHeading
          eyebrow="About"
          title="Unity XR Developer specializing in interactive simulations."
          description="I am a 1 year software professional focused on Unity, C#, XR Interaction Toolkit, OpenXR, physics-driven interactions, and immersive training workflows."
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <Card>
            <h2 className="text-2xl font-semibold text-white">Engineering Journey</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
              <p>
                My work sits at the intersection of Unity engineering and practical simulation design. I
                focus on interaction systems that let users grab, inspect, validate, place, and complete
                procedural workflows in immersive environments.
              </p>
              <p>
                I care about building scenes that remain maintainable as requirements grow: reusable
                interactables, clear state ownership, event-driven feedback, and ScriptableObject-based
                configuration where it helps designers and engineers iterate faster.
              </p>
              <p>
                My current target is a Unity XR Developer or AR/VR Simulation Engineer role with teams
                building training, medical, education, enterprise XR, or industrial simulation products.
              </p>
            </div>
          </Card>
          <div className="grid gap-8">
            <Card className="overflow-hidden p-0">
              <div className="relative aspect-[4/5] min-h-[380px]">
                <Image
                  src="/images/nandan-profile-optimized.jpg"
                  alt="Nandan Kumar profile photo"
                  fill
                  className="object-cover object-[62%_48%]"
                  sizes="(min-width: 1024px) 420px, 90vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-slate-950/75 p-4 backdrop-blur">
                  <p className="text-sm font-semibold text-white">Nandan Kumar</p>
                  <p className="mt-1 text-xs text-slate-300">Unity XR Developer / AR VR Simulation Engineer</p>
                </div>
              </div>
            </Card>
            <Card>
              <h2 className="text-2xl font-semibold text-white">Strengths</h2>
              <ul className="mt-5 space-y-4">
                {strengths.map((strength) => (
                  <li key={strength} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300">
                    {strength}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
        <section className="mt-20">
          <SectionHeading
            eyebrow="Timeline"
            title="A focused path into immersive simulation engineering."
            description="My experience is early, practical, and intentionally specialized around Unity XR systems."
          />
          <Card>
            <ExperienceTimeline />
          </Card>
        </section>
        <section className="mt-20">
          <SectionHeading
            eyebrow="Technology"
            title="The stack I use to build production-ready XR workflows."
          />
          <SkillGrid />
        </section>
      </div>
    </div>
  );
}
