"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute left-[8%] top-[10%] h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{ x: [0, 26, 0], y: [0, -18, 0], opacity: [0.45, 0.72, 0.45] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[7%] top-[18%] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
        animate={{ x: [0, -22, 0], y: [0, 18, 0], opacity: [0.35, 0.62, 0.35] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
    </div>
  );
}
