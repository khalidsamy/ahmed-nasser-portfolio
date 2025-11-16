import React from "react";
import { motion } from "framer-motion";
import { UserCircle } from "lucide-react";


export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
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
        duration: 0.6,
        ease: "easeOut",
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
      className="py-24 bg-white dark:bg-gray-900 px-6 md:px-12 lg:px-24 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center flex items-center justify-center gap-3">
          <UserCircle className="w-10 h-10 md:w-12 md:h-12 text-[#1a73e8] dark:text-blue-400" />
          About Me
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            variants={imageVariants}
            className="relative order-2 md:order-1">
            <div className="absolute -top-4 -left-4 w-full h-full bg-blue-500/10 dark:bg-blue-400/20 rounded-3xl"></div>
            <img
              src="/profile/formal.jpg"
              alt="Ahmed Nasser Hemdan"
              className="rounded-3xl shadow-xl relative z-10 object-cover w-full h-[420px]"
            />
          </motion.div>

          {/* Text */}
          <motion.div variants={textVariants} className="order-1 md:order-2">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I'm a Computer Science student specializing in Machine Learning
              and Back-End Development. I enjoy building intelligent systems,
              APIs, and scalable backend architectures using modern
              technologies. I have experience in machine learning workflows,
              databases, APIs, and production deployment.
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              My passion lies in solving complex problems through code and
              creating solutions that make a real impact. I'm always eager to
              learn new technologies and contribute to meaningful projects.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
