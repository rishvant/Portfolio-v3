import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { MacbookFrame } from "./MacbookFrame";
import { SkillBadge } from "../skills/SkillBadge";

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  github?: string;
  image: string;
  skills: string[];
}

export function ProjectCard({
  title,
  description,
  link,
  github,
  image,
  skills,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <MacbookFrame>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full"
        >
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                {title}
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  <ExternalLink size={20} />
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gray-100 cursor-pointer"
                >
                  <FaGithub size={20} />
                </a>
              </h3>
              <p className="mt-2 text-gray-200">{description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </MacbookFrame>
    </motion.div>
  );
}
