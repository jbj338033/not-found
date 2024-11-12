// MinimalIllustrationNotFound.tsx
import React from "react";
import { motion } from "framer-motion";

const MinimalIllustrationNotFound = () => {
  return (
    <div className="h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-64 h-64 mx-auto mb-8"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#6366F1"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.path
                d="M30 50 L70 50 M50 30 L50 70"
                stroke="#6366F1"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
              />
            </svg>
          </motion.div>
          <motion.h1
            className="text-6xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            404
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            The page you're looking for doesn't exist
          </motion.p>
          <motion.button
            className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Return Home
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default MinimalIllustrationNotFound;
