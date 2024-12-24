import { motion } from 'framer-motion';

interface Education {
  school: string;
  degree: string;
  period: string;
  description: string;
  logo: string;
}

interface EducationTimelineProps {
  education: Education[];
}

export function EducationTimeline({ education }: EducationTimelineProps) {
  return (
    <div className="space-y-12">
      {education.map((item, index) => (
        <motion.div
          key={item.period}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative flex items-center gap-8"
        >
          {/* Timeline line */}
          {index !== education.length - 1 && (
            <div className="absolute top-24 left-16 w-0.5 h-24 bg-gradient-to-b from-blue-600 to-transparent" />
          )}

          {/* Logo */}
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl"
            >
              <img
                src={item.logo}
                alt={item.school}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {item.school}
              </h3>
              <p className="text-lg font-semibold mb-2">{item.degree}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-2">{item.period}</p>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}