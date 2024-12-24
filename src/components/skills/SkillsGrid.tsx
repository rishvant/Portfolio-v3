import { motion } from 'framer-motion';
import { SkillCard } from './SkillCard';

const skills = [
  { 
    name: 'React',
    level: 5,
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'
  },
  {
    name: 'Node.js',
    level: 4,
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'
  },
  {
    name: 'TypeScript',
    level: 5,
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'
  },
  {
    name: 'Python',
    level: 4,
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'
  },
  {
    name: 'MongoDB',
    level: 3,
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg'
  },
  {
    name: 'Docker',
    level: 4,
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg'
  },
  {
    name: 'AWS',
    level: 3,
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg'
  },
  {
    name: 'GraphQL',
    level: 4,
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
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
        <SkillCard
          key={skill.name}
          name={skill.name}
          level={skill.level}
          logo={skill.logo}
        />
      ))}
    </motion.div>
  );
}