import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  index: number;
  isLast: boolean;
  onClick: () => void;
}

export function TimelineItem({ title, company, period, description, index, isLast, onClick }: TimelineItemProps) {
  return (
    <div className="relative flex gap-8">
      {/* Timeline line and dot */}
      <div className="relative flex flex-col items-center">
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="absolute top-4 w-0.5 h-full bg-gradient-to-b from-blue-600 via-blue-400 to-transparent"
          />
        )}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.2 }}
          className="relative z-10 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white dark:ring-gray-800"
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="flex-1 pb-12"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 cursor-pointer"
          onClick={onClick}
        >
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-0 items-start sm:items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{title}</h3>
            <span className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
              {period}
            </span>
          </div>
          <p className="text-lg font-semibold">{company}</p>
          <p className="mt-4 text-gray-600 dark:text-gray-400">{description}</p>
          <p className="mt-4 text-blue-600 dark:text-blue-400 text-sm">Click to view details →</p>
        </motion.div>
      </motion.div>
    </div>
  );
}