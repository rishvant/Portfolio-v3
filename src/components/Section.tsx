import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ title, children, className = "", id }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`py-20 ${className}`}
      id={id}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      {children}
    </motion.section>
  );
}
