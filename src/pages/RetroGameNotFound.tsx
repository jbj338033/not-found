// RetroGameNotFound.tsx
import React from "react";
import { motion } from "framer-motion";

const RetroGameNotFound = () => {
  return (
    <div className="h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          className="text-6xl md:text-8xl font-bold mb-8 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0, 1, 0, 1] }}
          transition={{ duration: 1.5, times: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
        >
          <span className="text-red-500">4</span>
          <span className="text-yellow-500">0</span>
          <span className="text-blue-500">4</span>
        </motion.div>

        <motion.div
          className="pixel-box p-8 bg-gray-900 rounded-lg mb-8 relative overflow-hidden"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent"
            animate={{
              y: ["0%", "1000%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <p className="text-green-500 font-mono mb-4 text-xl">GAME OVER</p>
          <p className="text-white font-mono">PAGE NOT FOUND</p>
          <p className="text-white font-mono mt-4">SCORE: 404</p>
        </motion.div>

        <div className="space-x-4">
          <motion.button
            className="px-6 py-2 bg-red-500 text-white font-mono rounded"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            CONTINUE?
          </motion.button>
          <motion.button
            className="px-6 py-2 bg-blue-500 text-white font-mono rounded"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            RESTART
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default RetroGameNotFound;
