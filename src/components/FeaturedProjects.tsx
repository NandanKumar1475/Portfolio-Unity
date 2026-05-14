import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";

export function FeaturedProjects() {
  return (
    <section className="py-20">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Project proof"
          title="Simulation work that maps directly to XR hiring needs."
          description="These projects focus on interaction design, validation systems, instructional workflows, and runtime architecture."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
}
