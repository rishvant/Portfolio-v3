import { useState } from "react";
import { Section } from "../Section";
import { TimelineItem } from "../experience/TimelineItem";
import { ExperienceDetails } from "../experience/ExperienceDetails";

const experiences = [
  {
    title: "Senior Developer",
    company: "Tech Corp",
    period: "2020 - Present",
    description:
      "Led development of multiple full-stack applications using React and Node.js. Mentored junior developers and implemented best practices across teams.",
    responsibilities: [
      "Led a team of 5 developers in building a large-scale e-commerce platform",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews",
      "Architected microservices infrastructure using Docker and Kubernetes",
    ],
    skills: [
      "React",
      "Node.js",
      "TypeScript",
      "Docker",
      "Kubernetes",
      "AWS",
      "MongoDB",
    ],
  },
  {
    title: "Developer",
    company: "StartUp Inc",
    period: "2018 - 2020",
    description:
      "Developed and maintained various web applications. Collaborated with design team to implement responsive and intuitive user interfaces.",
    responsibilities: [
      "Built and maintained multiple React-based web applications",
      "Implemented responsive designs and improved mobile UX",
      "Integrated third-party APIs and services",
      "Reduced application load time by 40% through optimization",
    ],
    skills: ["React", "JavaScript", "CSS", "REST APIs", "Redux", "PostgreSQL"],
  },
  {
    title: "Junior Developer",
    company: "Digital Solutions",
    period: "2016 - 2018",
    description:
      "Started my journey in web development. Worked on frontend development using React and learned backend development with Node.js.",
    responsibilities: [
      "Developed and maintained client websites",
      "Created reusable component libraries",
      "Fixed bugs and improved application performance",
      "Collaborated with the design team on UI/UX improvements",
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Git", "Agile"],
  },
];

export function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState<
    (typeof experiences)[0] | null
  >(null);

  return (
    <Section
      id="experience"
      title="Experience"
      className="bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-4xl mx-auto px-4">
        {experiences.map((experience, index) => (
          <TimelineItem
            key={experience.period}
            {...experience}
            index={index}
            isLast={index === experiences.length - 1}
            onClick={() => setSelectedExperience(experience)}
          />
        ))}
      </div>

      <ExperienceDetails
        isOpen={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
        experience={selectedExperience!}
      />
    </Section>
  );
}
