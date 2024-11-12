import { motion } from "framer-motion";

const SpaceNotFound = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-slate-900 to-purple-900 flex items-center justify-center overflow-hidden">
      <div className="text-center relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-9xl font-bold text-white mb-4"
        >
          404
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl text-purple-200"
        >
          Lost in Space
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-8 px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
        >
          Return Home
        </motion.button>
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpaceNotFound;
