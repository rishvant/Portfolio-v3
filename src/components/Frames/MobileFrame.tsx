import { motion } from "framer-motion";

interface MobileFrameProps {
  children: React.ReactNode;
}

export function MobileFrame({ children }: MobileFrameProps) {
  return (
    <div className="relative mx-auto w-[340px] group">
      {/* iPhone Image */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/IPhone_15_Vector.svg/345px-IPhone_15_Vector.svg.png"
        alt="iPhone"
        className="block w-[345px] mx-auto"
      />

      {/* Screen content */}
      <div className="absolute inset-0 left-[5%] w-[90%] h-[96%] top-[2%] rounded-[47px] overflow-hidden">
        <div className="w-full h-full bg-white dark:bg-gray-900">
          {children}
        </div>
      </div>

      {/* Hover effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        whileHover={{
          rotateX: -5,
          rotateY: 5,
          transition: { duration: 0.3 },
        }}
      />
    </div>
  );
}
