import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socials = [
    {
      icon: <Github size={22} />,
      link: "https://github.com/ranjan2503ravi",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={22} />,
      link: "https://linkedin.com/in/raviranjan-kumar-singh-b4a07b339",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={22} />,
      link: "mailto:ranjan2503ravi@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="relative py-20 overflow-hidden 
bg-white text-black dark:bg-[#050816] dark:text-white">

      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-[180px] rounded-full bottom-[-200px] left-[-120px] animate-pulse" />

        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[180px] rounded-full top-[-150px] right-[-120px] animate-pulse" />

        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-28 h-28 bg-white/5 rounded-2xl backdrop-blur-xl"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              animation: `floatAnim ${6 + i * 1.5}s ease-in-out infinite`,
            }}
          />
        ))}

        <style>
          {`
            @keyframes floatAnim {
              0% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-25px) rotate(8deg); }
              100% { transform: translateY(0px) rotate(0deg); }
            }
          `}
        </style>

      </div>

     
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-wide bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          RaviRanjan.dev
        </motion.h1>

       
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-400 mt-3 text-sm md:text-base max-w-xl mx-auto"
        >
          Building fast, scalable & user-focused web applications with modern frontend technologies.
        </motion.p>

       
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="mt-3 text-gray-500 text-sm space-y-1"
        >
          <p>Frontend Engineer | React • Next.js • UI Performance Focused</p>
          <p>Open for Opportunities 🚀</p>
        </motion.div>

       
        <div className="flex justify-center gap-6 mt-10">
          {socials.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full border border-white/10 
                         bg-white/5 backdrop-blur-md 
                         hover:border-cyan-400 
                         hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
                         transition-all duration-300"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        
        <div className="w-full h-px bg-white/10 my-8" />

     
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.05 }}
          className="text-sm text-cyan-400 hover:text-cyan-300 transition"
        >
          ↑ Back to Top
        </motion.button>

      
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 text-gray-500 text-sm tracking-wide"
        >
          © {new Date().getFullYear()} Ravi Ranjan — Built with React & Passion
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;