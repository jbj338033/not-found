// ThreeDInteractiveNotFound.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const ThreeDInteractiveNotFound = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePosition({
      x: (clientX / innerWidth - 0.5) * 20,
      y: (clientY / innerHeight - 0.5) * 20,
    });
  };

  return (
    <div
      className="h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      <div className="relative perspective-1000">
        <motion.div
          className="relative"
          style={{
            rotateX: -mousePosition.y,
            rotateY: mousePosition.x,
          }}
        >
          <motion.div
            className="text-9xl font-black mb-8 text-white"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            404
          </motion.div>

          <motion.div
            className="absolute inset-0 text-9xl font-black text-blue-500 blur-sm"
            style={{
              rotateX: -mousePosition.y * 1.5,
              rotateY: mousePosition.x * 1.5,
              translateZ: "-10px",
            }}
          >
            404
          </motion.div>

          <motion.div
            className="absolute inset-0 text-9xl font-black text-red-500 blur-sm"
            style={{
              rotateX: -mousePosition.y * 2,
              rotateY: mousePosition.x * 2,
              translateZ: "-20px",
            }}
          >
            404
          </motion.div>
        </motion.div>

        <motion.div
          className="text-xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Lost in the third dimension
        </motion.div>

        <motion.button
          className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            rotateX: -mousePosition.y * 0.5,
            rotateY: mousePosition.x * 0.5,
          }}
        >
          Return to Reality
        </motion.button>
      </div>
    </div>
  );
};

export default ThreeDInteractiveNotFound;
