import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section id="home" className="pb-24 max-w-6xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row lg:items-center">
        <motion.div
          className="lg:w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-gray-800 text-3xl mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            Hello! I&#39;m Dewa.
          </motion.p>

          <motion.h1
            className="text-5xl md:text-8xl font-black leading-tight mt-2 text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            Digital product development with emphasis on{" "}
            <span className="text-gray-400">visual design</span>
          </motion.h1>

          <motion.div
            className="flex flex-col md:flex-row items-start md:items-center mt-8 gap-6 md:gap-96"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            <motion.button
              className="bg-black text-white px-6 py-4 rounded-full font-medium flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Talk
              <FaArrowRight className="ml-2 h-5 w-5" />
            </motion.button>

            <motion.p
              className="text-gray-800 max-w-md mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            >
              A multidisciplinary designer. I focus on user experience and
              interface design to achieve online goals.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
