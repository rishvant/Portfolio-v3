import { motion } from "framer-motion";

interface SkillCardProps {
  name: string;
  logo: string;
}

export function SkillCard({ name, logo }: SkillCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300" />
      <div className="relative p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="flex flex-col items-center gap-4"
        >
          <motion.div
            className="w-16 h-16 flex items-center justify-center"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <img src={logo} alt={name} className="w-12 h-12 object-contain" />
          </motion.div>
          <h3 className="text-lg font-semibold">{name}</h3>
        </motion.div>
      </div>
    </motion.div>
  );
}
