import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container-shell">
        <div className="glass relative overflow-hidden rounded-[2rem] p-8 sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.22),transparent_28rem)]" />
          <div className="relative max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100">Recruiter next step</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Looking for a Unity XR developer who can build interaction-heavy simulation workflows?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              I am targeting Unity XR Developer, AR/VR Simulation Engineer, and immersive application
              roles across training, healthcare, education, industrial simulation, and enterprise XR.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact Me <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/resume">
                  View Resume <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
