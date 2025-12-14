import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Zap, CheckCircle2, Calendar } from "lucide-react";


export default function Experience() {
  const experiences = [
    {
      title: "Machine Learning Ambassador",
      company: "GTC",
      period: "Sep 2025 – Oct 2025",
      points: [
        "Selected among the top candidates from 2,000+ applicants.",
        "Represented AI/ML community in events and tech initiatives.",
        "Supported ML workshops and innovation programs.",
      ],
    },
    {
      title: "iOS Intern",
      company: "Banque Misr",
      period: "Aug 2024 – Sep 2024",
      points: [
        "Gained experience with Swift, UIKit, AutoLayout.",
        "Built 15+ reusable UI components.",
        "Improved app UX and implemented API integrations.",
        "Practiced Agile workflow inside enterprise team.",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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

  const bulletVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="experience"
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
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-100/60 dark:bg-blue-900/30 rounded-full border border-blue-200 dark:border-blue-800/50 mb-6">
            <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">Professional Growth</span>
          </div>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center flex items-center justify-center gap-3">
          <Briefcase className="w-10 h-10 md:w-12 md:h-12 text-blue-600 dark:text-blue-400" />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Experience</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          My professional journey and key achievements
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-blue-400 dark:from-blue-500 dark:via-purple-500 dark:to-blue-500 rounded-full shadow-lg"></div>

          {/* Experience Items */}
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-20">
                {/* Timeline Bullet with glow */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                  className="absolute left-1 top-2">
                  <div className="absolute inset-0 bg-blue-400 dark:bg-blue-500 rounded-full blur-md opacity-50 animate-pulse"></div>
                  <div className="relative w-7 h-7 bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full border-4 border-white dark:border-slate-800 shadow-lg z-10 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 10, y: -4 }}
                  className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl p-7 shadow-lg dark:shadow-xl hover:shadow-2xl dark:hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 dark:from-blue-900/0 dark:to-purple-900/0 group-hover:from-blue-50 group-hover:to-purple-50/30 dark:group-hover:from-blue-900/10 dark:group-hover:to-purple-900/10 transition-all duration-300"></div>
                  
                  <div className="relative">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                          {exp.company}
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-100/60 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800/50 whitespace-nowrap">
                        <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                          {exp.period}
                        </span>
                      </motion.div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 dark:from-blue-800/30 dark:via-purple-800/30 dark:to-blue-800/30 mb-5"></div>

                    {/* Points */}
                    <ul className="space-y-3">
                      {exp.points.map((point, pointIndex) => (
                        <motion.li
                          key={pointIndex}
                          variants={bulletVariants}
                          transition={{ delay: pointIndex * 0.1 }}
                          className="text-gray-700 dark:text-gray-300 flex items-start gap-3">
                          <span className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full mt-2.5"></span>
                          <span className="leading-relaxed">{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
