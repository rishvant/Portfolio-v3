import { ThemeToggle } from "./components/ThemeToggle";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/hero/HeroSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { EducationSection } from "./components/sections/EducationSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ContactSection } from "./components/sections/ContactSection";
import { useTheme } from "./hooks/useTheme";
import { useState } from "react";
import { MacbookFrame } from "./components/projects/MacbookFrame";
import { MobileFrame } from "./components/Frames/MobileFrame";
import { motion } from "framer-motion";

function App() {
  const { theme, setTheme } = useTheme();
  const [mode, setMode] = useState<"default" | "laptop" | "mobile">("default");

  const switchMode = (selectedMode: "default" | "laptop" | "mobile") => {
    setMode(selectedMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Mode Switch Buttons */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => switchMode("default")}
          className="px-4 py-2 bg-gray-700 text-white font-semibold rounded-md shadow-md hover:bg-gray-600 transition duration-300"
        >
          Default Mode
        </button>
        <button
          onClick={() => switchMode("laptop")}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-400 transition duration-300"
        >
          Laptop Mode
        </button>
        <button
          onClick={() => switchMode("mobile")}
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-400 transition duration-300"
        >
          Mobile Mode
        </button>
      </div>

      {/* Conditional Rendering for Modes */}
      {mode === "laptop" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center min-h-screen"
        >
          <MacbookFrame>
            <div className="w-full h-full overflow-y-auto">
              {/* Render your portfolio inside the laptop frame */}
              <iframe
                src="/"
                title="Portfolio"
                className="w-full h-full border-0"
              />
            </div>
          </MacbookFrame>
        </motion.div>
      ) : mode === "mobile" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center min-h-screen"
        >
          <MobileFrame>
            <div className="w-full h-full overflow-y-auto">
              <iframe
                src="/"
                title="Portfolio"
                className="w-full h-full border-0"
              />
            </div>
          </MobileFrame>
        </motion.div>
      ) : (
        <>
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <Navbar />
          <HeroSection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
