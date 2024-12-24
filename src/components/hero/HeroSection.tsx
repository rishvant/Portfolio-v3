import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { TypewriterText } from "./TypewriterText";
import heroImage from "../../assets/header.png";

const typingTexts = [
  "I am a Full Stack Developer",
  "I build amazing web apps",
  "I love solving problems",
  "I create elegant solutions",
];

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section
      id="about"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-gray-900" />
        <img
          src={heroImage}
          alt="Profile"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container relative z-10 mx-auto px-4 text-center"
      >
        <motion.h1 className="text-4xl md:text-7xl font-bold mb-6 text-white dark:text-white">
          Hi, I'm{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Rishvant Singh
          </span>
        </motion.h1>

        <div className="text-xl md:text-2xl text-white dark:text-gray-200 mb-8 h-8">
          <TypewriterText texts={typingTexts} />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Mail size={28} />
            </a>
          </div>
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            <FileText size={20} />
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
