// NatureNotFound.tsx
import React from "react";
import { motion } from "framer-motion";

const NatureNotFound = () => {
  const leafVariants = {
    initial: { scale: 0, rotate: 0 },
    animate: (i: number) => ({
      scale: 1,
      rotate: 360,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        rotate: {
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        },
      },
    }),
  };

  return (
    <div className="h-screen bg-gradient-to-b from-green-50 to-green-100 flex items-center justify-center overflow-hidden">
      <div className="relative text-center">
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32"
              custom={i}
              variants={leafVariants}
              initial="initial"
              animate="animate"
              style={{ rotate: i * 60 }}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-full h-full text-green-300"
                fill="currentColor"
              >
                <path d="M12 2L8 6H4L2 8V12L6 16V20L8 22H12L16 18H20L22 16V12L18 8V4L16 2H12Z" />
              </svg>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-8xl font-bold text-green-800 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          404
        </motion.div>
        <motion.p
          className="text-2xl text-green-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          This path leads nowhere...
        </motion.p>
        <motion.button
          className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Return to Nature
        </motion.button>
      </div>
    </div>
  );
};

export default NatureNotFound;
