// CyberpunkNotFound.tsx
import React from "react";
import { motion } from "framer-motion";

const CyberpunkNotFound = () => {
  return (
    <div className="h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
          style={{ filter: "blur(100px)" }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <div className="relative z-10">
          <motion.div
            className="text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            404
          </motion.div>
          <motion.div
            className="text-2xl text-white font-mono mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            &lt;SYSTEM_ERROR&gt; Page_Not_Found &lt;/SYSTEM_ERROR&gt;
          </motion.div>
          <motion.button
            className="px-8 py-3 bg-transparent border-2 border-cyan-500 text-cyan-500 font-mono rounded-lg relative group overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">RETURN_TO_MAINFRAME</span>
            <motion.div
              className="absolute inset-0 bg-cyan-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CyberpunkNotFound;
