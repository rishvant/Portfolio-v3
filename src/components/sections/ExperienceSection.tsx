import { useState } from "react";
import { Section } from "../Section";
import { TimelineItem } from "../experience/TimelineItem";
import { ExperienceDetails } from "../experience/ExperienceDetails";
import { experiences } from "../../constants/constants";

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
