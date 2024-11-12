// OrigamiNotFound.tsx
import React from "react";
import { motion } from "framer-motion";

const OrigamiNotFound = () => {
  const paperVariants = {
    hidden: {
      rotateX: 0,
      rotateY: 0,
    },
    visible: (i: number) => ({
      rotateX: [0, 90, 180, 270, 360],
      rotateY: [0, 90, 180, 270, 360],
      transition: {
        duration: 3,
        delay: i * 0.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="h-screen bg-orange-50 flex items-center justify-center overflow-hidden">
      <div className="text-center relative perspective-1000">
        <div className="relative mb-12">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-orange-400 to-red-500"
              style={{
                transformOrigin: "50% 50%",
                transform: `translate(${i * 10}px, ${i * 10}px)`,
              }}
              variants={paperVariants}
              initial="hidden"
              animate="visible"
              custom={i}
            />
          ))}

          <motion.div
            className="relative z-10 text-9xl font-bold text-white mix-blend-difference"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            404
          </motion.div>
        </div>

        <motion.div
          className="text-2xl text-orange-800 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          This page has been folded away
        </motion.div>

        <motion.button
          className="px-8 py-3 bg-orange-500 text-white rounded-lg font-medium shadow-lg hover:bg-orange-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Unfold Home Page
        </motion.button>

        {/* Decorative origami elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-orange-200"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default OrigamiNotFound;
