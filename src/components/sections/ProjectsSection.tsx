import { Section } from "../Section";
import { ProjectCard } from "../projects/ProjectCard";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured online store built with Next.js, Stripe, and Tailwind CSS",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=2340&q=80",
    skills: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "Prisma"],
  },
  {
    title: "Task Management App",
    description:
      "A collaborative project management tool using React and Firebase",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=2340&q=80",
    skills: ["React", "Firebase", "Redux", "Material UI", "Jest"],
  },
];

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
