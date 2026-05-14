"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, GitBranch, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const hasGitHub = project.githubUrl.includes("github.com");

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group glass flex h-full flex-col overflow-hidden rounded-2xl p-0"
    >
      <Link href={`/projects/${project.slug}`} className="focus-ring block overflow-hidden rounded-t-2xl">
        <Image
          src={project.thumbnail}
          alt={`${project.title} thumbnail`}
          width={1200}
          height={800}
          className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
          priority={project.featured}
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-4">
          <Badge tone="blue">{project.category}</Badge>
          <span className="text-xs text-slate-500">Unity / XR</span>
        </div>
        <h3 className="mt-5 text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">{project.subtitle}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3 pt-2">
          <Button asChild size="sm">
            <Link href={`/projects/${project.slug}`}>
              Details <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="sm" variant="secondary">
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <GitBranch className="h-4 w-4" /> {hasGitHub ? "GitHub" : "Reference"}
            </a>
          </Button>
          <Button asChild size="sm" variant="ghost">
            <a href={project.demoVideoUrl} target="_blank" rel="noreferrer">
              <Play className="h-4 w-4" /> Demo
            </a>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
