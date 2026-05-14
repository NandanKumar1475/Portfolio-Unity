"use client";

import Image from "next/image";
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
                  <Image
                    src="/images/nandan-profile-optimized.jpg"
                    alt="Nandan Kumar profile photo"
                    fill
                    className="object-cover object-[62%_28%]"
                    priority
                    sizes="(min-width: 1024px) 480px, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.16),transparent_42%,rgba(37,99,235,0.16))]" />
                  <div className="absolute bottom-4 left-4 max-w-[230px] rounded-2xl border border-white/10 bg-slate-950/70 p-3 backdrop-blur">
                    <p className="text-sm font-semibold text-white">Unity XR Developer</p>
                    <p className="mt-1 text-xs leading-5 text-slate-300">AR/VR simulation engineer.</p>
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
