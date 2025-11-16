import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Try again later.");
        }
      );
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
      className="py-24 bg-white dark:bg-gray-900 px-6 md:px-12 lg:px-24 transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center flex items-center justify-center gap-3"
        >
          <MessageCircle className="w-10 h-10 md:w-12 md:h-12 text-[#1a73e8] dark:text-blue-400" />
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto"
        >
          Have a project in mind or want to collaborate? Let's talk!
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
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg
                             focus:ring-2 focus:ring-[#1a73e8] bg-white dark:bg-gray-700"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg
                             focus:ring-2 focus:ring-[#1a73e8] bg-white dark:bg-gray-700"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg
                             focus:ring-2 focus:ring-[#1a73e8] bg-white dark:bg-gray-700 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#1a73e8] dark:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>

            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800
                           border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-400"
              >
                <div className="text-[#1a73e8] dark:text-blue-400">
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {info.label}
                  </p>
                  <p className="text-gray-900 dark:text-white font-semibold">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}

            <motion.div
              className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-2 border-blue-200 dark:border-blue-800"
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-[#1a73e8] dark:text-blue-400" />
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Location
                </p>
              </div>
              <p className="text-gray-900 dark:text-white font-semibold">
                Giza, Egypt
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
