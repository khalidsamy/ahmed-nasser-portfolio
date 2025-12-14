import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { MessageCircle, MapPin, Phone, Mail, Send, Zap, CheckCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_hgt8efv", 
        "template_pbqbanj", 
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "gFPcBromRQs9j8OTD" 
      )
      .then(
        () => {
          setSubmitStatus("success");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setSubmitStatus("error");
          setTimeout(() => setSubmitStatus(null), 5000);
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  const contactInfo = [
    {
      label: "Email",
      value: "ahmadhemdan280@gmail.com",
      link: "mailto:ahmadhemdan280@gmail.com",
      icon: <Mail className="w-6 h-6" />,
    },
    {
      label: "Phone",
      value: "+20 115 509 8664",
      link: "tel:+201155098664",
      icon: <Phone className="w-6 h-6" />,
    },
    {
      label: "GitHub",
      value: "AhmedNasser23",
      link: "https://github.com/AhmedNasser23",
      icon: <FaGithub className="w-6 h-6" />,
    },
    {
      label: "LinkedIn",
      value: "ahmed-nasser",
      link: "https://www.linkedin.com/in/ahmed-nasser-91aab6279/",
      icon: <FaLinkedin className="w-6 h-6" />,
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-slate-800/30 dark:to-gray-900 px-6 md:px-12 lg:px-24 transition-all duration-300 relative overflow-hidden"
    >
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
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">Let's Connect</span>
          </div>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center flex items-center justify-center gap-3"
        >
          <MessageCircle className="w-10 h-10 md:w-12 md:h-12 text-blue-600 dark:text-blue-400" />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Get In Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto"
        >
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-12"
        >
          {/* FORM */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg dark:shadow-xl border border-gray-200 dark:border-slate-700 hover:shadow-xl dark:hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <Send className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              Send a Message
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Get back to you within 24 hours</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-xl
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:focus:ring-blue-400 
                             bg-white dark:bg-slate-700 text-gray-900 dark:text-white transition-all duration-300
                             disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Ahmed Nasser"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-xl
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:focus:ring-blue-400
                             bg-white dark:bg-slate-700 text-gray-900 dark:text-white transition-all duration-300
                             disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-xl
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:focus:ring-blue-400
                             bg-white dark:bg-slate-700 text-gray-900 dark:text-white transition-all duration-300 resize-none
                             disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-sm font-medium text-green-700 dark:text-green-400">Message sent successfully! I'll be in touch soon.</span>
                </motion.div>
              )}
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl"
                >
                  <span className="text-sm font-medium text-red-700 dark:text-red-400">Failed to send message. Please try again.</span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl dark:shadow-lg dark:hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div variants={itemVariants} className="space-y-5">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              Get in Touch
            </h3>

            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 8 }}
                className="group flex items-center gap-4 p-5 bg-white dark:bg-slate-800 rounded-2xl
                           border border-gray-200 dark:border-slate-700 shadow-md dark:shadow-lg
                           hover:shadow-lg dark:hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600
                           transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {info.label}
                  </p>
                  <p className="text-gray-900 dark:text-white font-bold mt-1">
                    {info.value}
                  </p>
                </div>
                <div className="text-gray-300 dark:text-slate-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.a>
            ))}

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200 dark:border-blue-800/50 shadow-md dark:shadow-lg hover:shadow-lg dark:hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white dark:bg-slate-800 rounded-lg">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Location
                </p>
              </div>
              <p className="text-gray-900 dark:text-white font-bold text-lg">
                Giza, Egypt
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Available for remote and on-site opportunities</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
