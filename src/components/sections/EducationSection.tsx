import { Section } from "../Section";
import { EducationTimeline } from "../education/EducationTimeline";

const education = [
  {
    school: "Stanford University",
    degree: "Master of Science in Computer Science",
    period: "2014 - 2016",
    description: "Specialized in Artificial Intelligence and Machine Learning",
    logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
  {
    school: "MIT",
    degree: "Bachelor of Science in Computer Science",
    period: "2010 - 2014",
    description: "Major in Software Engineering with minor in Mathematics",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
  },
];

export function EducationSection() {
  return (
    <Section id="education" title="Education">
      <div className="max-w-4xl mx-auto px-4">
        <EducationTimeline education={education} />
      </div>
    </Section>
  );
}
