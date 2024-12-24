import { Section } from "../Section";
import { ProjectCard } from "../projects/ProjectCard";
import { projects } from "../../constants/constants";

export function ProjectsSection() {
  return (
    <Section title="Projects" id="projects">
      <div className="max-w-7xl mx-auto px-4 space-y-24">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}
