import { Linkedin, Mail } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: LuGithub, href: "https://github.com/rishvant", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/rishvant-singh",
    label: "LinkedIn",
  },
  {
    icon: RiTwitterXFill,
    href: "https://x.com/RishvantSingh",
    label: "X",
  },
  { icon: Mail, href: "rishvantsinghpundir@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <div className="flex gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={`${label === "Email" ? `mailto:${href}` : href}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-md hover:shadow-lg transition-all"
                aria-label={label}
                target="_blank"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Rishvant Singh. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
