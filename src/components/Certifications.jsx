import React from "react";
import { motion } from "framer-motion";
import { Award, Star, Zap } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      name: "CCNA v7",
      issuer: "National Telecommunication Institute (NTI) – Ministry of Communications & IT",
      url: "/imgs/CCNA_NTI.jpg",
      image: "/imgs/CCNA_NTI.jpg",
      badge: "Technical",
      color: "from-emerald-600 to-teal-600",
    },
    {
      name: "Machine Learning Specialization",
      issuer: "DeepLearning.AI",
      url: "https://www.coursera.org/account/accomplishments/specialization/certificate/H0ZG85YO6H9D",
      image: "/imgs/Machine-Learning-Specialization.jpg",
      badge: "Specialization",
      color: "from-blue-600 to-cyan-600",
    },
    {
      name: "Mentorship Excellence",
      issuer: "Genius Technology Center (GTC)",
      url: "https://drive.google.com/file/d/1luT2TZxfq32sjajaVcph49v4IwyI151t/view?usp=drive_link",
      image: "/imgs/GTC_Certification.jpg",
      badge: "Excellence",
      color: "from-purple-600 to-pink-600",
    },
    {
      name: "Forward Program",
      issuer: "McKinsey & Company",
      url: "https://www.credly.com/badges/1b6f435d-6548-4e53-9f2d-d25457759285/public_url",
      image: "/imgs/McKinsey-Forward.jpg",
      badge: "Professional",
      color: "from-amber-600 to-orange-600",
    },
  ];

  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white dark:from-gray-900 dark:via-slate-800/50 dark:to-gray-900 px-6 md:px-12 lg:px-24 transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl dark:bg-blue-500/10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl dark:bg-purple-500/10"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-100/60 dark:bg-blue-900/30 rounded-full border border-blue-200 dark:border-blue-800/50 mb-4">
            <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">
              Verified Credentials
            </span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center flex items-center justify-center gap-3"
        >
          <Award className="w-10 h-10 md:w-12 md:h-12 text-blue-600 dark:text-blue-400" />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Certifications
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto"
        >
          Professional credentials and achievements from industry-leading organizations
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative block overflow-hidden rounded-3xl transition-all duration-300"
            >
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-slate-700 flex flex-col h-full">

                <div className={`relative bg-gradient-to-br ${cert.color} flex items-center justify-center p-6 min-h-64`}>
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-white/95 dark:bg-slate-900/95 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs font-bold text-gray-900 dark:text-white">
                        {cert.badge}
                      </span>
                    </div>
                  </div>

                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="h-48 max-h-64 w-auto object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                      {cert.name}
                    </h3>

                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                      {cert.issuer}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm pt-4 border-t border-gray-100 dark:border-slate-700">
                    <span>View Certificate</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
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