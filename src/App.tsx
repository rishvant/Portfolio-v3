import { useTheme } from "./hooks/useTheme";
import { useState } from "react";
import { MacbookFrame } from "./components/projects/MacbookFrame";
import { MobileFrame } from "./components/Frames/MobileFrame";
import { Settings } from "./components/Settings/SettingsButtons";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/hero/HeroSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { EducationSection } from "./components/sections/EducationSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ContactSection } from "./components/sections/ContactSection";
import { motion } from "framer-motion";

function App() {
  const { theme, setTheme } = useTheme();
  const [mode, setMode] = useState<"default" | "laptop" | "mobile">("default");

  const switchMode = (selectedMode: "default" | "laptop" | "mobile") => {
    setMode(selectedMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Settings theme={theme} setTheme={setTheme} onModeSwitch={switchMode} />

      {mode === "laptop" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center min-h-screen"
        >
          <MacbookFrame>
            <div className="w-full h-full overflow-y-auto">
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
