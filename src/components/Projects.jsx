import React from "react";
import { motion } from "framer-motion";
import { FolderKanban } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
  {
      title: "ML-Workshop",
      description:
        "Hands-on machine learning journey with from-scratch implementations and reproducible experiments.",
      tech: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      github: "https://github.com/AhmedNasser23/ML-Workshop",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Fandango Ratings Bias EDA (2015)",
      description:
        "Exploratory data analysis to investigate potential bias in Fandango's 2015 movie ratings using statistical and visual techniques.",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      github: "https://github.com/AhmedNasser23/Fandango-Ratings-Bias-EDA-2015",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "FastAPI Blog API",
      description:
        "A production-ready RESTful API with JWT auth, relational data models, CRUD operations, Alembic migrations, and PostgreSQL integration.",
      tech: ["FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "Alembic"],
      github: "https://github.com/AhmedNasser23/FastAPI-Blog-API",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "NFG-Library",
      description:
        "Modular Java library implementing Neural Networks, Fuzzy Logic, and Genetic Algorithms with case studies.",
      tech: ["Java", "Neural Networks", "Fuzzy Logic", "Genetic Algorithms"],
      github: "https://github.com/AhmedNasser23/NFG-Library",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "BazzarBook – E-commerce Platform",
      description:
        "Full e-commerce system with role-based authentication, product management, Stripe payments, and responsive UI.",
      tech: ["C#", "ASP.NET Core", "Entity Framework", "SQL Server"],
      github: "https://github.com/AhmedNasser23/BazzarBook",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
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
      className="py-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 px-6 md:px-12 lg:px-24 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center flex items-center justify-center gap-3">
          <FolderKanban className="w-10 h-10 md:w-12 md:h-12 text-[#1a73e8] dark:text-blue-400" />
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          A showcase of my recent work and technical projects
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>

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

                {/* GitHub Button */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#1a73e8] dark:bg-blue-600 text-white font-medium px-6 py-2.5 rounded-lg text-center hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors inline-flex items-center justify-center gap-2">
                  <FaGithub className="w-5 h-5" />
                  View on GitHub
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
