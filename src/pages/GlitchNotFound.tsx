import { motion } from "framer-motion";

const GlitchNotFound = () => {
  return (
    <div className="h-screen bg-black flex items-center justify-center">
      <div className="relative">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="text-9xl font-mono text-white relative"
            animate={{
              x: [0, -2, 2, -2, 0],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            404
            <motion.div
              className="absolute inset-0 text-red-500"
              style={{ clipPath: "inset(45% 0 55%)" }}
              animate={{
                x: [-2, 2, -2],
                y: [-1, 1, -1],
              }}
              transition={{
                duration: 0.1,
                repeat: Infinity,
              }}
            >
              404
            </motion.div>
            <motion.div
              className="absolute inset-0 text-blue-500"
              style={{ clipPath: "inset(55% 0 45%)" }}
              animate={{
                x: [2, -2, 2],
                y: [1, -1, 1],
              }}
              transition={{
                duration: 0.1,
                repeat: Infinity,
              }}
            >
              404
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-8 text-gray-400 text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Page not found
          </motion.div>
          <motion.button
            className="mt-8 px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Go Back
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default GlitchNotFound;
