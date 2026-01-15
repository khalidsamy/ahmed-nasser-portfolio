import React from "react";
import { motion } from "framer-motion";
import { Heart, Github, Mail, MapPin, Zap } from "lucide-react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-black
        text-gray-700 dark:text-gray-300
        py-16 px-6 md:px-12 lg:px-24
        transition-all duration-300
        border-t border-gray-200 dark:border-gray-800
        relative overflow-hidden
      ">
      
      {/* Decorative background (dark mode only) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden dark:block">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-30"></div>
      </div>

      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-gray-200 dark:border-gray-800/50">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 mb-4 cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="font-bold text-white text-lg">AN</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Portfolio
              </h3>
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              AI & ML Enthusiast passionate about building intelligent solutions and creating meaningful impact through technology.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: Github, href: "https://github.com/AhmedNasser23", label: "GitHub" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/ahmed-nasser-91aab6279/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:ahmedhemdan.tech@gmail.com", label: "Email" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 bg-gray-100 dark:bg-gradient-to-br dark:from-blue-900/50 dark:to-purple-900/50
text-gray-700 dark:text-gray-300
hover:text-blue-600 dark:hover:text-white hover:from-blue-800 hover:to-purple-800 rounded-lg text-gray-300 hover:text-white transition-all duration-300 border border-blue-800/30 hover:border-blue-600/50">
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-blue-400" />
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">Quick Links</h4>
            </div>
            <ul className="space-y-3">
              {[
                "Home",
                "About",
                "Skills",
                "Certifications",
                "Experience",
                "Projects",
                "Contact",
              ].map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm font-medium relative group">
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <h4 className="text-lg font-bold text-white mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li>
                <motion.a
                  href="mailto:ahmedhemdan.tech@gmail.com"
                  whileHover={{ x: 4 }}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-3 group">
                  <div className="p-2 bg-gray-100 dark:bg-gradient-to-br dark:from-blue-900/50 dark:to-purple-900/50
text-gray-700 dark:text-gray-300
hover:text-blue-600 dark:hover:text-white rounded-lg group-hover:from-blue-800 group-hover:to-purple-800 transition-all duration-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">ahmedhemdan.tech@gmail.com</span>
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://github.com/AhmedNasser23"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-3 group">
                  <div className="p-2 bg-gray-100 dark:bg-gradient-to-br dark:from-blue-900/50 dark:to-purple-900/50
text-gray-700 dark:text-gray-300
hover:text-blue-600 dark:hover:text-white rounded-lg group-hover:from-blue-800 group-hover:to-purple-800 transition-all duration-300">
                    <Github className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">AhmedNasser23</span>
                </motion.a>
              </li>
              <li className="text-gray-600 dark:text-gray-400 flex items-center gap-3">
                <div className="p-2 bg-gray-100 dark:bg-gradient-to-br dark:from-blue-900/50 dark:to-purple-900/50
text-gray-700 dark:text-gray-300
hover:text-blue-600 dark:hover:text-white rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">Giza, Egypt</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 text-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} Ahmed Nasser. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
