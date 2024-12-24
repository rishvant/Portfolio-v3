import { motion } from 'framer-motion';

interface MacbookFrameProps {
  children: React.ReactNode;
}

export function MacbookFrame({ children }: MacbookFrameProps) {
  return (
    <div className="relative mx-auto w-full max-w-[800px] group">
      {/* Screen */}
      <div className="relative mx-auto w-[90%]">
        {/* Top lid */}
        <div className="relative pt-[63%] rounded-t-2xl bg-gradient-to-br from-gray-700 to-gray-800">
          {/* Inner bezel */}
          <div className="absolute inset-[1.5%] rounded-lg bg-black shadow-inner">
            {/* Screen content */}
            <div className="absolute inset-[1px] rounded-lg overflow-hidden bg-white dark:bg-gray-900">
              {/* Camera housing */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full">
                {/* Notch shape */}
                <div className="absolute inset-0 bg-black rounded-full flex items-center justify-center">
                  {/* Camera */}
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-950 ring-1 ring-gray-800 relative">
                    <div className="absolute inset-[25%] rounded-full bg-gray-800" />
                  </div>
                </div>
              </div>
              {/* Screen content */}
              {children}
            </div>
          </div>
          
          {/* Subtle screen reflections */}
          <div className="absolute inset-0 rounded-t-2xl bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
        </div>
      </div>
      
      {/* Base/Keyboard section */}
      <div className="relative">
        {/* Main base */}
        <div className="relative mx-auto w-full h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-xl">
          {/* Hinge detail */}
          <div className="absolute -top-[1px] inset-x-[5%] h-[2px] bg-gray-700" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[20%] h-1 bg-gray-600 rounded-b-xl" />
          
          {/* Side reflections */}
          <div className="absolute inset-y-0 left-2 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <div className="absolute inset-y-0 right-2 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </div>
        
        {/* Bottom shadow */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[95%] h-4 bg-black/20 blur-md rounded-full" />
      </div>

      {/* Hover effect - slight tilt */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        whileHover={{
          rotateX: -5,
          rotateY: 0,
          transition: { duration: 0.3 }
        }}
      />
    </div>
  );
}