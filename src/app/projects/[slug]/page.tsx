import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, GitBranch, Play } from "lucide-react";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { CTASection } from "@/components/CTASection";
import { ScreenshotGallery } from "@/components/ScreenshotGallery";
import { SectionHeading } from "@/components/SectionHeading";
import { VideoEmbed } from "@/components/VideoEmbed";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Nandan Kumar`,
      description: project.description,
      images: [project.thumbnail],
    },
  };
}

function DetailList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();
  const hasGitHub = project.githubUrl.includes("github.com");

  return (
    <div className="py-16">
      <div className="container-shell">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/projects">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to Projects
          </Link>
        </Button>

        <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Badge tone="cyan">{project.category} Case Study</Badge>
            <h1 className="mt-5 text-4xl font-semibold text-white sm:text-5xl">{project.title}</h1>
            <p className="mt-4 text-xl text-gradient">{project.subtitle}</p>
            <p className="mt-6 text-base leading-8 text-slate-300">{project.description}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <GitBranch className="h-4 w-4" aria-hidden="true" /> {hasGitHub ? "GitHub" : "Reference"}
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href={project.demoVideoUrl} target="_blank" rel="noreferrer">
                  <Play className="h-4 w-4" aria-hidden="true" /> Demo Video
                </a>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
            <Image
              src={project.thumbnail}
              alt={`${project.title} hero image`}
              width={1200}
              height={800}
              className="aspect-[16/11] w-full object-cover"
              priority
            />
          </div>
        </section>

        <section className="mt-20 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card>
            <h2 className="text-2xl font-semibold text-white">Overview</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold text-white">Problem Statement</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{project.problemStatement}</p>
          </Card>
        </section>

        <section className="mt-20">
          <SectionHeading
            eyebrow="Features"
            title="Feature checklist recruiters can scan quickly."
            description="Each feature maps to practical Unity XR capability: input, physics, validation, UI, and feedback."
          />
          <Card>
            <div className="grid gap-4 md:grid-cols-2">
              <DetailList items={project.features} />
            </div>
          </Card>
        </section>

        <section className="mt-20">
          <SectionHeading eyebrow="Screenshots" title="Simulation visuals and workflow states." />
          <ScreenshotGallery screenshots={project.screenshots} title={project.title} />
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading eyebrow="Demo" title="Video walkthrough." />
            <VideoEmbed title={`${project.title} demo video`} url={project.demoVideoUrl} />
          </div>
          <div>
            <SectionHeading eyebrow="Architecture" title="Reusable interaction architecture." />
            <ArchitectureDiagram />
          </div>
        </section>

        <section className="mt-20 grid gap-6 lg:grid-cols-3">
          <Card>
            <h2 className="text-2xl font-semibold text-white">Challenges</h2>
            <div className="mt-5">
              <DetailList items={project.challenges} />
            </div>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold text-white">Engineering Solutions</h2>
            <div className="mt-5">
              <DetailList items={project.solutions} />
            </div>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold text-white">Metrics</h2>
            <div className="mt-5">
              <DetailList items={project.metrics} />
            </div>
          </Card>
        </section>

        <section className="mt-20">
          <Card>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white">Learnings</h2>
                <div className="mt-5 max-w-3xl">
                  <DetailList items={project.learnings} />
                </div>
              </div>
              <Button asChild variant="secondary">
                <Link href="/contact">
                  Discuss This Project <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Card>
        </section>
      </div>
      <CTASection />
    </div>
  );
}
