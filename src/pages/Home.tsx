import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface PageLink {
  name: string;
  path: string;
  color: string;
  description: string;
}

const Home = () => {
  const pages: PageLink[] = [
    {
      name: "Space",
      path: "/404-space",
      color: "from-purple-500 to-indigo-600",
      description: "Lost in the cosmic void",
    },
    {
      name: "Glitch",
      path: "/404-glitch",
      color: "from-red-500 to-pink-600",
      description: "Digital distortion effect",
    },
    {
      name: "Minimal",
      path: "/404-minimal",
      color: "from-gray-700 to-gray-900",
      description: "Clean and simple design",
    },
    {
      name: "Puzzle",
      path: "/404-puzzle",
      color: "from-blue-500 to-cyan-600",
      description: "Interactive missing piece",
    },
    {
      name: "Cyberpunk",
      path: "/404-cyberpunk",
      color: "from-pink-500 to-purple-600",
      description: "Neon-lit digital world",
    },
    {
      name: "Nature",
      path: "/404-nature",
      color: "from-green-500 to-emerald-600",
      description: "Organic and peaceful",
    },
    {
      name: "Retro Game",
      path: "/404-retro",
      color: "from-yellow-500 to-orange-600",
      description: "Classic gaming nostalgia",
    },
    {
      name: "Typography",
      path: "/404-typo",
      color: "from-slate-700 to-slate-900",
      description: "Minimal text design",
    },
    {
      name: "3D",
      path: "/404-3d",
      color: "from-violet-500 to-purple-600",
      description: "Interactive perspective",
    },
    {
      name: "Origami",
      path: "/404-origami",
      color: "from-orange-500 to-red-600",
      description: "Paper folding animation",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            404 Page Gallery
          </h1>
          <p className="text-xl text-gray-600">
            Explore different styles of 404 error pages
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {pages.map((page) => (
            <motion.div
              key={page.path}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Link to={page.path}>
                <div
                  className={`bg-gradient-to-br ${page.color} rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl`}
                >
                  <div className="text-white">
                    <h2 className="text-2xl font-bold mb-2">{page.name}</h2>
                    <p className="text-white/80">{page.description}</p>
                    <div className="mt-4 flex items-center text-sm">
                      <span>Explore</span>
                      <motion.span
                        className="ml-2"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
