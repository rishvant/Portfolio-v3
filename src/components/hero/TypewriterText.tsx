import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  texts: string[];
  delay?: number;
}

export function TypewriterText({ texts, delay = 0 }: TypewriterTextProps) {
  const controls = useAnimationControls();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const animateText = async () => {
      if (isDeleting) {
        await controls.start({
          width: "0%",
          transition: { duration: 1, ease: "easeIn" }
        });
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsDeleting(false);
      } else {
        await controls.start({
          width: "100%",
          transition: { duration: 1.5, ease: "easeOut" }
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsDeleting(true);
      }
    };

    animateText();
  }, [controls, currentTextIndex, isDeleting, texts]);

  return (
    <div className="relative inline-block min-h-[1.5em]">
      <motion.div
        initial={{ width: 0 }}
        animate={controls}
        className="overflow-hidden whitespace-nowrap border-r-2 border-blue-600 dark:border-blue-400 pr-1"
      >
        {texts[currentTextIndex]}
      </motion.div>
    </div>
  );
}