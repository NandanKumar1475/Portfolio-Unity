"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { projectFilters, projects, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

type Filter = (typeof projectFilters)[number];

export function ProjectsGallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const visibleProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.category === (filter as ProjectCategory));
  }, [filter]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
        {projectFilters.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={filter === item}
            onClick={() => setFilter(item)}
            className={cn(
              "focus-ring rounded-full border px-4 py-2 text-sm font-medium transition",
              filter === item
                ? "border-cyan-300/50 bg-cyan-300/15 text-cyan-50"
                : "border-white/12 bg-white/[0.04] text-slate-400 hover:text-white",
            )}
          >
            {item}
          </button>
        ))}
      </div>
      <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
      {visibleProjects.length === 0 ? (
        <p className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-sm text-slate-400">
          More work in this category can be added as case studies, devlogs, and production projects grow.
        </p>
      ) : null}
    </div>
  );
}
