import { motion, AnimatePresence } from "framer-motion";
import {
  Settings as SettingsIcon,
  Laptop,
  Smartphone,
  RotateCcw,
} from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "../ThemeToggle";
import { Theme } from "../../types/theme";

type SettingsProps = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  onModeSwitch: (mode: "default" | "laptop" | "mobile") => void;
};

export const Settings = ({ theme, setTheme, onModeSwitch }: SettingsProps) => {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onMouseEnter={() => setShowSettings(true)}
        onMouseLeave={() => setShowSettings(false)}
        className="fixed top-4 right-4 z-[52] cursor-pointer"
      >
        <button className="p-2 bg-gray-800 dark:bg-white text-white dark:text-gray-800 rounded-full shadow-lg">
          <SettingsIcon />
        </button>
      </motion.div>

      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed bg-transparent h-fit z-[51] right-4 flex flex-col items-center justify-center gap-3"
            onMouseEnter={() => setShowSettings(true)}
            onMouseLeave={() => setShowSettings(false)}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onModeSwitch("default")}
              className="p-2 bg-gray-800 text-white rounded-full shadow-lg mt-16"
            >
              <RotateCcw />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onModeSwitch("laptop")}
              className="p-2 bg-gray-800 text-white rounded-full shadow-lg"
            >
              <Laptop />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onModeSwitch("mobile")}
              className="p-2 bg-gray-800 text-white rounded-full shadow-lg"
            >
              <Smartphone />
            </motion.button>

            <div>
              <ThemeToggle theme={theme} setTheme={setTheme} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
