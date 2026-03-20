import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

import ParticlesBackground from "./ParticlesBackground";

const About = () => {
  const tech = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiTypescript />, name: "TypeScript" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-20 py-24 bg-[#050816] overflow-hidden">

      
      <ParticlesBackground />

     
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-5xl 
        bg-white/5 backdrop-blur-xl 
        border border-white/10 
        rounded-3xl p-8 md:p-12 
        shadow-[0_0_80px_rgba(0,0,0,0.6)] 
        flex flex-col md:flex-row gap-10"
      >

      
        <div className="flex-1">

       
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="text-cyan-400">Me</span>
          </h1>

          <p className="text-gray-400 mt-2">
            Frontend Engineer | React & Next.js Developer
          </p>

         
          <p className="text-gray-300 mt-6 leading-relaxed text-sm md:text-base">
            I build{" "}
            <span className="text-cyan-400 font-medium">fast</span>,{" "}
            <span className="text-purple-400 font-medium">scalable</span>, and{" "}
            <span className="text-blue-400 font-medium">production-ready</span>{" "}
            web applications with a focus on performance, usability, and clean architecture.
            <br /><br />

            I enjoy turning complex UI problems into simple, elegant and reusable components
            that deliver smooth user experiences.
          </p>

          
          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            I focus on writing maintainable code, reusable components, and optimized React applications
            that perform efficiently even at scale.
          </p>

          
          <h2 className="text-white font-medium mt-8 mb-4">
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-3">
            {tech.map((item, i) => (
              <div
                key={i}
                className="group flex items-center gap-2 px-3 py-2 
                bg-white/5 border border-white/10 
                rounded-full text-gray-300 text-sm
                transition duration-300
                hover:scale-110 hover:-translate-y-1
                hover:border-cyan-400 hover:text-cyan-300
                hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
              >
                <span className="group-hover:rotate-12 transition">
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>

        </div>

        
        <div className="flex-1 flex items-center justify-center">

          <motion.div
            whileHover={{ scale: 1.1, rotate: 1 }}
            transition={{ duration: 0.4 }}
            className="relative w-[280px] h-[280px] rounded-2xl overflow-hidden border border-white/10 shadow-xl"
          >
            <img
              src="/IMG.jpg"
              alt="profile"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-purple-500/20" />
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
};

export default About;