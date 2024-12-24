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
import { motion } from "framer-motion";

function App() {
  const { theme, setTheme } = useTheme();
  const [isLaptopMode, setIsLaptopMode] = useState(false);

  const toggleLaptopMode = () => {
    setIsLaptopMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Laptop Mode Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleLaptopMode}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-400 transition duration-300"
        >
          {isLaptopMode ? "Exit Laptop Mode" : "Switch to Laptop Mode"}
        </button>
      </div>

      {/* Laptop Mode */}
      {isLaptopMode ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center min-h-screen"
        >
          <MacbookFrame>
            <div className="w-full h-full overflow-y-auto">
              {/* Render your entire portfolio inside the frame */}
              <iframe
                src="/"
                title="Portfolio"
                className="w-full h-full border-0"
              />
            </div>
          </MacbookFrame>
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
