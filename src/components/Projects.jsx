import React from "react";
import { motion } from "framer-motion";
import { FolderKanban } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { image, title } from "framer-motion/client";

export default function Projects() {
  const projects = [
  {
    title: "ML-Workshop",
    description:
      "Hands-on machine learning experiments with from-scratch implementations, model evaluation, and reproducible workflows.",
    tech: ["Python", "scikit-learn", "NumPy", "Pandas"],
      github: "https://github.com/AhmedNasser23/ML-Workshop",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
    },
        {
    title: "NFG-Library",
    description:
      "Modular Java library implementing neural networks, fuzzy logic, and genetic algorithms with practical case studies.",
    tech: ["Java", "Neural Networks", "Genetic Algorithms", "Fuzzy Logic"],
      github: "https://github.com/AhmedNasser23/NFG-Library",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    },
    {
    title: "Fandango Ratings Bias EDA",
    description:
      "Exploratory data analysis project investigating bias in movie rating systems using statistical analysis and visualization.",
    tech: ["Python", "Pandas", "Matplotlib"],
      github: "https://github.com/AhmedNasser23/Fandango-Ratings-Bias-EDA-2015",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
    },
    {
    title: "BazzarBook",
    description:
      "E-commerce backend system with secure payment processing, role-based authorization, and transactional business logic.",
    tech: ["C#", "ASP.NET Core", "SQL Server", "Stripe"],
      github: "https://github.com/AhmedNasser23/BazzarBook",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "E-Learning Management System",
      description: "Multi-role learning management system supporting courses, users, and enrollment workflows.",
      tech: ["Java", "Spring Boot", "PostgreSQL"],
      github: "https://github.com/AhmedNasser23/E-Learnig-Management-System",
      image: "https://plus.unsplash.com/premium_photo-1681488245781-6d5617e3dba9?auto=format&fit=crop&w=1200&q=80",

    },
    {
      title: "FastAPI Blog API",
      description:
        "Production-ready backend system featuring JWT authentication, role-based access control, and relational data modeling with PostgreSQL.",
      tech: ["Python", "FastAPI", "Docker", "PostgreSQL", "SQLAlchemy", "Alembic"],
      github: "https://github.com/AhmedNasser23/FastAPI-Blog-API",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <motion.section
      id="projects"
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
            <FolderKanban className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">Featured Projects</span>
          </div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center flex items-center justify-center gap-3">
          <FolderKanban className="w-10 h-10 md:w-12 md:h-12 text-blue-600 dark:text-blue-400" />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
          A showcase of my recent work and technical projects
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative block overflow-hidden rounded-3xl transition-all duration-300">
              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

              {/* Card container */}
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-lg dark:shadow-xl group-hover:shadow-2xl dark:group-hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-slate-700 flex flex-col h-full">
                {/* Project Image Section - now fills card top */}
                <div className="relative h-56 w-full overflow-hidden">
                  {/* Decorative background elements */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl"></div>
                  </div>
                  {/* Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                      <FaGithub className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-xs font-bold text-gray-900 dark:text-white">GitHub</span>
                    </div>
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover filter drop-shadow-lg group-hover:scale-105 transition-transform duration-500 z-10"
                  />
                </div>
                {/* Info Section */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-white dark:bg-slate-800">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors line-clamp-2 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                      {project.description}
                    </p>
                  </div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-lg text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* CTA Button */}
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-all duration-300 pt-4 border-t border-gray-100 dark:border-slate-700">
                    <span>View on GitHub</span>
                    <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
