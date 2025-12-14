import React from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";


export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "C#", "Python", "Java", "JavaScript"],
      color:
        "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
      textColor: "text-blue-700 dark:text-blue-400",
    },
    {
      title: "ML & AI",
      skills: ["Scikit-learn", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
      color:
        "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800",
      textColor: "text-purple-700 dark:text-purple-400",
    },
    {
      title: "Backend & Databases",
      skills: [
        "FastAPI",
        "Spring Boot",
        "ASP.NET Core",
        "SQLAlchemy",
        "PostgreSQL",
        "MySQL",
      ],
      color:
        "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
      textColor: "text-green-700 dark:text-green-400",
    },
    {
      title: "Tools",
      skills: [
        "Git",
        "Docker",
        "Linux",
      ],
      color:
        "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800",
      textColor: "text-orange-700 dark:text-orange-400",
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="skills"
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
            <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">Tech Stack</span>
          </div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center flex items-center justify-center gap-3">
          <Code2 className="w-10 h-10 md:w-12 md:h-12 text-blue-600 dark:text-blue-400" />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Skills</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
          Technologies and tools I work with to build innovative solutions
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -8 }}
              className={`group relative block overflow-hidden rounded-3xl transition-all duration-300 border ${category.color} shadow-lg dark:shadow-xl hover:shadow-2xl dark:hover:shadow-2xl flex flex-col h-full p-6`}>
              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"></div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 flex-grow">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm transition-colors duration-200 group-hover:bg-blue-100/70 dark:group-hover:bg-blue-800/40`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
