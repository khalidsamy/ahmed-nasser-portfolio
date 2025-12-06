import React from "react";
import { motion } from "framer-motion";
import { Brain } from "lucide-react";


export default function Hero() {
  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    floating: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 px-6 md:px-12 lg:px-24 pt-24 pb-16 gap-12 transition-all duration-300">
      {/* Left Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 max-w-2xl text-center md:text-left">
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-medium rounded-full text-sm shadow-sm">
          <Brain className="w-5 h-5" />
          Computer Science Student
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
          Hi, I'm{" "}
          <span className="text-[#1a73e8] dark:text-blue-400">
            Ahmed Nasser Hemdan
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
          AI & ML Enthusiast
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-xl">
          Fourth-year Computer Science student passionate about machine
          learning, backend engineering, problem-solving, and building scalable
          software solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mb-12">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("Projects")}
            className="bg-[#1a73e8] dark:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg shadow-md hover:shadow-xl transition-all">
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("Contact")}
            className="border-2 border-gray-300 dark:border-gray-600 px-8 py-3 rounded-lg shadow-sm bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all font-medium text-gray-900 dark:text-white">
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-8 md:gap-12 justify-center md:justify-start">
          {[
            { number: "10+", label: "Projects Completed" },
            { number: "5+", label: "Technologies" },
            { number: "3+", label: "Years Learning" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.2 }}
              className="text-center md:text-left">
              <p className="text-3xl font-semibold text-[#1a73e8] dark:text-blue-400">
                {stat.number}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex-1 flex justify-center md:justify-end">
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-blue-400/20 dark:bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>

          <motion.img
            variants={imageVariants}
            animate="floating"
            src="/profile/formal.jpg"
            alt="Ahmed Nasser Hemdan"
            className="w-72 h-72 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800 relative z-10"
          />
        </div>
      </motion.div>
    </section>
  );
}
