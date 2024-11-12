// PuzzleNotFound.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const PuzzleNotFound = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center relative">
        <motion.div
          className="relative"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.div
            className="text-9xl font-bold text-white mb-8 relative z-10"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: isHovered ? 360 : 0 }}
            transition={{ duration: 0.6 }}
          >
            4
            <motion.span
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              0
            </motion.span>
            4
          </motion.div>
          <motion.div
            className="absolute inset-0 bg-white/10 rounded-lg blur-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: isHovered ? 1.2 : 0.8,
              opacity: isHovered ? 0.2 : 0,
            }}
          />
        </motion.div>
        <motion.p
          className="text-xl text-white/80 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Oops! Looks like this piece doesn't fit here
        </motion.p>
        <div className="flex justify-center gap-4">
          <motion.button
            className="px-6 py-2 bg-white text-purple-600 rounded-lg font-medium"
            whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
            whileTap={{ scale: 0.95 }}
          >
            Go Home
          </motion.button>
          <motion.button
            className="px-6 py-2 bg-purple-700 text-white rounded-lg font-medium"
            whileHover={{ scale: 1.05, backgroundColor: "#6b21a8" }}
            whileTap={{ scale: 0.95 }}
          >
            Report Issue
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default PuzzleNotFound;
