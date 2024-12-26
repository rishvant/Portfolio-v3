import { motion } from "framer-motion";
import { SkillCard } from "./SkillCard";
import { skills } from "../../constants/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function SkillsGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto px-4"
    >
      {skills.map((skill) => (
        <SkillCard key={skill.name} name={skill.name} logo={skill.logo} />
      ))}
    </motion.div>
  );
}
