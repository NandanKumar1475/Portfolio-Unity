import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { coreCapabilities } from "@/data/skills";

export function AboutPreview() {
  return (
    <section className="py-20">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Why hire me"
          title="I build XR systems with the discipline recruiters look for."
          description="My focus is not just placing objects in a scene. I design interaction workflows, validation logic, feedback systems, and performance-conscious Unity architecture for immersive applications."
        />
        <div className="glass rounded-2xl p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {coreCapabilities.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" aria-hidden="true" />
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
          <Button asChild className="mt-6" variant="secondary">
            <Link href="/about">
              Read About My Approach <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
