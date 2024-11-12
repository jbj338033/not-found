// MinimalTypoNotFound.tsx
import React from "react";
import { motion } from "framer-motion";

const MinimalTypoNotFound = () => {
  return (
    <div className="h-screen bg-white flex items-center justify-center">
      <div className="max-w-2xl w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.div
            className="absolute -top-32 left-0 text-[20rem] font-black text-gray-50 select-none"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            404
          </motion.div>

          <div className="relative z-10">
            <motion.h1
              className="text-4xl font-light text-gray-900 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Page not found
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-md mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </motion.p>
            <motion.button
              className="text-lg text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              Return home
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MinimalTypoNotFound;
