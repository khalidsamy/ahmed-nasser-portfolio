import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";


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

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-white dark:bg-gray-900 px-6 md:px-12 lg:px-24 transition-all duration-300">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center flex items-center justify-center gap-3">
          <Briefcase className="w-10 h-10 md:w-12 md:h-12 text-[#1a73e8] dark:text-blue-400" />
          Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          My professional journey and key achievements
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-16">
                {/* Timeline Bullet */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                  className="absolute left-4 w-4 h-4 bg-[#1a73e8] dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title} — {exp.company}
                    </h3>
                    <span className="text-sm font-medium text-[#1a73e8] dark:text-blue-400 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="text-gray-600 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-[#1a73e8] dark:text-blue-400 mt-1.5">
                          •
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
