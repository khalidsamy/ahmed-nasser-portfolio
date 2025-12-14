import React from "react";
import { motion } from "framer-motion";
import { UserCircle, Code2, Zap, Target } from "lucide-react";


export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const highlightVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-slate-800/30 dark:to-gray-900 px-6 md:px-12 lg:px-24 transition-all duration-300 relative overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl dark:bg-blue-500/20"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-300/15 rounded-full blur-3xl dark:bg-purple-500/15"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-100/60 dark:bg-blue-900/30 rounded-full border border-blue-200 dark:border-blue-800/50 mb-6">
            <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">Get to Know Me</span>
          </div>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center flex items-center justify-center gap-3">
          <UserCircle className="w-10 h-10 md:w-12 md:h-12 text-blue-600 dark:text-blue-400" />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">About Me</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
          Computer Science student passionate about Machine Learning and Back-End Development
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Image */}
          <motion.div
            variants={imageVariants}
            className="relative order-2 md:order-1 group">
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 dark:from-blue-500/40 dark:to-purple-500/40 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            
            {/* Background accent */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/15 rounded-3xl group-hover:from-blue-500/30 group-hover:to-purple-500/20 transition-all duration-500"></div>
            
            {/* Image */}
            <img
              src="/profile/formal.jpg"
              alt="Ahmed Nasser Hemdan"
              className="rounded-3xl shadow-2xl dark:shadow-2xl relative z-10 object-cover w-full h-[420px] group-hover:shadow-3xl transition-shadow duration-500 border border-white/50 dark:border-slate-700/50"
            />
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl dark:shadow-2xl p-4 border border-gray-100 dark:border-slate-700 z-20">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg">
                  <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">ML & Backend Enthusiast</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div variants={textVariants} className="order-1 md:order-2">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 font-medium">
              I'm a Computer Science student specializing in <span className="text-blue-600 dark:text-blue-400 font-bold">Machine Learning</span> and <span className="text-purple-600 dark:text-purple-400 font-bold">Back-End Development</span>. I enjoy building intelligent systems, APIs, and scalable backend architectures using modern technologies.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              My passion lies in solving complex problems through code and creating solutions that make a real impact. I'm always eager to learn new technologies and contribute to meaningful projects.
            </p>
            
            {/* Highlights */}
            <div className="space-y-3">
              <motion.div
                variants={highlightVariants}
                className="flex items-start gap-4 p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 hover:bg-blue-100/50 dark:hover:bg-blue-900/30 transition-colors duration-300">
                <div className="mt-1">
                  <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Problem Solving</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Transforming complex challenges into elegant, scalable solutions</p>
                </div>
              </motion.div>
              
              <motion.div
                variants={highlightVariants}
                className="flex items-start gap-4 p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/50 hover:bg-amber-100/50 dark:hover:bg-amber-900/30 transition-colors duration-300"
                transition={{ delay: 0.2 }}>
                <div className="mt-1">
                  <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Continuous Learning</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Always exploring new technologies and improving technical skills</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
