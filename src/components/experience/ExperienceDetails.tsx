import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { SkillBadge } from '../skills/SkillBadge';

interface ExperienceDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  experience: {
    title: string;
    company: string;
    period: string;
    description: string;
    responsibilities: string[];
    skills: string[];
  };
}

export function ExperienceDetails({ isOpen, onClose, experience }: ExperienceDetailsProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40"
          />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed inset-x-4 bottom-4 top-20 md:inset-40 bg-white dark:bg-gray-800 rounded-xl p-6 z-50 overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <X size={24} />
            </button>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">{experience.title}</h3>
              <p className="text-lg font-semibold mt-2">{experience.company}</p>
              <p className="text-gray-600 dark:text-gray-400">{experience.period}</p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Description</h4>
              <p className="text-gray-600 dark:text-gray-400">{experience.description}</p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Key Responsibilities</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Skills Used</h4>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}