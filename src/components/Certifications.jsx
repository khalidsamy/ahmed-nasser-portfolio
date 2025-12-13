import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      name: "Machine Learning Specialization",
      issuer: "DeepLearning.AI",
      url: "https://www.coursera.org/account/accomplishments/specialization/certificate/H0ZG85YO6H9D",
      image: "/imgs/Machine-Learning-Specialization.jpg",
    },
    {
      name: "Forward Program",
      issuer: "McKinsey & Company",
      url: "https://www.credly.com/badges/1b6f435d-6548-4e53-9f2d-d25457759285/public_url",
      image: "/imgs/McKinsey-Forward.jpg",
    },
  ];

  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 px-6 md:px-12 lg:px-24 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center flex items-center justify-center gap-3">
          <Award className="w-10 h-10 md:w-12 md:h-12 text-[#1a73e8] dark:text-blue-400" />
          Certifications
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Professional credentials and achievements
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group block bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 rounded-2xl shadow-lg dark:shadow-xl hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-slate-600">
              <div className="relative flex-1 bg-gradient-to-br from-blue-600 to-emerald-600 flex items-center justify-center p-8 overflow-hidden group-hover:shadow-inner min-h-80">
                {/* Decorative background elements */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                </div>
                <div className="relative z-10">
                  <img
                    src={cert.image}
                    alt={cert.issuer}
                    className="h-full max-h-80 w-auto object-contain filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="p-8 bg-white dark:bg-slate-800">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors line-clamp-2">
                  {cert.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors text-sm font-medium">
                  {cert.issuer}
                </p>
                <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 text-sm font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                  View Certificate
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;
