import React, { useState } from "react";
import { motion } from "framer-motion";
import { Brain, ArrowRight, Zap, Code2, Sparkles } from "lucide-react";


export default function Hero() {
  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

const [showResumeOptions, setShowResumeOptions] = useState(false);

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

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-white via-blue-50/50 to-white dark:from-gray-900 dark:via-slate-800/50 dark:to-gray-900 px-6 md:px-12 lg:px-24 pt-24 pb-16 gap-12 transition-all duration-300 overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl dark:bg-blue-500/20"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-300/15 rounded-full blur-3xl dark:bg-purple-500/15"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-300/10 rounded-full blur-3xl dark:bg-indigo-500/10"></div>
      </div>
      
      {/* Left Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 max-w-2xl text-center md:text-left relative z-10">
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 text-blue-700 dark:text-blue-300 font-semibold rounded-full text-sm shadow-lg border border-blue-200 dark:border-blue-800/50">
          <Sparkles className="w-4 h-4" />
          Software Engineer • Backend & ML
        </motion.div>

        {/* Title */}
        <motion.div variants={itemVariants} className="mb-6">
          <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">Welcome to my portfolio</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Ahmed Nasser
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Software Engineer | Backend & ML
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl leading-relaxed">
          Computer Science student with hands-on experience building backend systems and data-driven applications. 
          Focused on developing scalable, maintainable software and applying machine learning concepts in real-world projects.
        </motion.p>

    {/* Buttons */}
    <motion.div
      variants={itemVariants}
      className="flex flex-col sm:flex-row gap-4 mb-12"
    >
      {/* Explore Projects */}
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => scrollToSection("Projects")}
        className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
      >
        Explore Projects
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </motion.button>

    {/* View CV Dropdown */}
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowResumeOptions(!showResumeOptions)}
        className="border-2 border-gray-300 dark:border-gray-600 px-8 py-4 rounded-xl shadow-md bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all font-semibold text-gray-900 dark:text-white hover:border-blue-400 dark:hover:border-blue-500"
      >
        View CV
      </motion.button>

      {showResumeOptions && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute mt-3 w-72 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl overflow-hidden z-50"
        >
          <a
            href="/cv/Ahmed_Hemdan_Machine_Learning_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition text-gray-900 dark:text-white"
          >
            🤖 Machine Learning Resume
          </a>

          <a
            href="/cv/Ahmed_Hemdan_Software_Engineer_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-700"
          >
            💻 Software Engineer Resume
          </a>
        </motion.div>
      )}
    </div>
      {/* Get in Touch */}
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => scrollToSection("Contact")}
        className="border-2 border-gray-300 dark:border-gray-600 px-8 py-4 rounded-xl shadow-md bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all font-semibold text-gray-900 dark:text-white hover:border-blue-400 dark:hover:border-blue-500"
      >
        Get in Touch
      </motion.button>
    </motion.div>


        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-8 md:gap-12 justify-center md:justify-start">
          {[
            { number: "10+", label: "Projects", icon: Code2 },
            { number: "5+", label: "Frameworks & Tools", icon: Zap },
            { number: "3+", label: "Years Learning", icon: Brain },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={statVariants}
                transition={{ delay: 0.8 + index * 0.15 }}
                className="group">
                <div className="text-center md:text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                      {stat.number}
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex-1 flex justify-center md:justify-end relative z-10">
        <div className="relative group">
          {/* Animated gradient border */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-500 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-400/30 dark:from-blue-500/40 dark:to-purple-500/40 rounded-full blur-3xl animate-pulse group-hover:animate-none transition-all"></div>

          <motion.img
            variants={imageVariants}
            animate="floating"
            src="/profile/formal.jpg"
            alt="Ahmed Nasser Hemdan"
            className="w-80 h-80 rounded-full object-cover shadow-2xl dark:shadow-2xl border-4 border-white dark:border-gray-800 relative z-10 group-hover:shadow-3xl transition-shadow duration-500"
          />
          
          {/* Decorative ring */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
        </div>
      </motion.div>
    </section>
  );
}
