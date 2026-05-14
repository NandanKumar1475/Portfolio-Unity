"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SocialLinks } from "@/components/SocialLinks";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="container-shell grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.09 }}
          className="max-w-4xl"
        >
          <motion.div variants={fadeUp}>
            <Badge tone="cyan">Available for Unity XR roles</Badge>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="mt-6 text-5xl font-semibold tracking-normal text-white sm:text-6xl lg:text-7xl"
          >
            Nandan Kumar
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 text-2xl font-semibold text-gradient sm:text-3xl">
            Unity XR Developer | AR/VR Simulation Engineer
          </motion.p>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Building immersive Unity simulations and XR interaction systems using C#, OpenXR, and
            performance-focused architecture.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/projects">
                View Projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="/resume/Nandan_Kumar_Unity_XR_Developer.pdf" download>
                Download Resume <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/contact">
                Contact Me <Send className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8">
            <SocialLinks />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="relative"
        >
          <div className="glass relative overflow-hidden rounded-[2rem] p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(34,211,238,0.24),transparent_26rem)]" />
            <div className="relative aspect-[4/3] rounded-3xl border border-white/10 bg-slate-950/60 p-5">
              <div className="grid h-full grid-rows-[1fr_auto] gap-5">
                <div className="relative overflow-hidden rounded-2xl border border-cyan-300/20 bg-[#05111d]">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.12)_1px,transparent_1px)] bg-[size:42px_42px]" />
                  <motion.div
                    className="absolute left-[20%] top-[40%] h-24 w-24 rounded-2xl border border-cyan-200/50 bg-cyan-300/10 shadow-[0_0_38px_rgba(34,211,238,0.38)]"
                    animate={{ rotate: [0, 4, 0], y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute right-[18%] top-[18%] h-36 w-36 rounded-full border border-blue-200/50 bg-blue-400/10 shadow-[0_0_48px_rgba(59,130,246,0.35)]"
                    animate={{ scale: [1, 1.04, 1], x: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-slate-950/80 p-4 backdrop-blur">
                    <p className="text-sm font-semibold text-white">Interaction Pipeline</p>
                    <div className="mt-3 grid grid-cols-4 gap-2 text-[11px] text-slate-300">
                      {["Input", "Validate", "Simulate", "Feedback"].map((item) => (
                        <span key={item} className="rounded-full bg-white/[0.06] px-2 py-2 text-center">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  {["OpenXR", "Unity", "C#"].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-4">
                      <p className="text-sm font-semibold text-cyan-100">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
