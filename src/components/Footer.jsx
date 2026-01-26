import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/yourusername", icon: <FaGithub /> },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: <FaLinkedin /> },
  { name: "Twitter", url: "https://twitter.com/yourusername", icon: <FaTwitter /> },
  { name: "Instagram", url: "https://instagram.com/yourusername", icon: <FaInstagram /> },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden">
     
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
      
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold flex items-center gap-2"
        >
          Raviranjan<span className="text-blue-500">.</span>
          <span className="text-sm text-gray-400 font-normal">Frontend Dev</span>
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 text-gray-300 text-sm"
        >
          <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
          <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex gap-5 text-2xl text-gray-400"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-transform transform hover:-translate-y-1"
            >
              {link.icon}
            </a>
          ))}
        </motion.div>
      </div>

      
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        ↑
      </motion.button>

    
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-10 text-center text-gray-500 text-sm relative z-10"
      >
        &copy; {new Date().getFullYear()} Ravi Ranjan Rajput. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
