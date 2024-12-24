import { Section } from "../Section";
import { EducationTimeline } from "../education/EducationTimeline";
import { education } from "../../constants/constants";

export function EducationSection() {
  return (
    <Section id="education" title="Education">
      <div className="max-w-4xl mx-auto px-4">
        <EducationTimeline education={education} />
      </div>
    </Section>
  );
}
