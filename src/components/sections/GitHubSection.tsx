import { Section } from "../Section";
import GitHubHeatmap from "../github/GitHubHeatmap";

export const GitHubSection = () => {
  return (
    <Section id="github" title="GitHub Activity">
      <div className="w-full px-4 flex justify-center">
        <GitHubHeatmap username="rishvant" />
      </div>
    </Section>
  );
};
