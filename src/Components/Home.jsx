import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ImageDistortion from "./ImageDistortion.jsx";
import ParticlesBackground from "./ParticlesBackground.jsx";

const roles = [
  "React Frontend Engineer",
  "Next.js Developer",
  "UI/UX Focused Developer",
  "Performance-Oriented Engineer",
];

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let i = 0;
    const current = roles[index];

    const typing = setInterval(() => {
      setText(current.slice(0, i));
      i++;

      if (i > current.length) {
        clearInterval(typing);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
          setText("");
        }, 1200);
      }
    }, 60);

    return () => clearInterval(typing);
  }, [index]);

  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 relative overflow-hidden bg-[#050816] pt-14 pb-10">

      
      <div className="absolute inset-0 z-0 opacity-60">
         <ParticlesBackground /> 
      </div>

      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.12),transparent)]" />

     
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-2xl text-center md:text-left"
      >

        
        <div className="flex justify-center md:justify-start mb-6 pt-6">
          <div className="px-5 py-2 rounded-full bg-white/5 border border-cyan-400/30 backdrop-blur-md">
            <p className="text-cyan-300 text-xs tracking-[0.3em] font-medium">
              FRONTEND ENGINEER • REACT • NEXT.JS • UI FOCUSED
            </p>
          </div>
        </div>

       
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
          Hi, I’m <span className="text-cyan-400">Ravi</span> 👋
          <br />
          I turn complex problems into{" "}
          <span className="text-cyan-400">fast & scalable</span> web apps.
        </h1>

       
        <h2 className="text-lg md:text-2xl text-gray-300 mt-5 h-8">
          {text}
          <span className="animate-pulse">|</span>
        </h2>

       
        <p className="text-gray-400 mt-6 leading-relaxed">
          I specialize in building production-ready frontend applications using{" "}
          <span className="text-white font-semibold">
            React, Next.js and Tailwind CSS
          </span>
          . Focused on performance, clean architecture and smooth UX.
        </p>

        <p className="text-gray-500 mt-3 text-sm">
          I don’t just design UI — I engineer experiences that feel premium and fast.
        </p>

       
        <p className="text-cyan-300 text-sm mt-4">
          ⚡ Available for Freelance • Remote • Full-time
        </p>

        
        <div className="flex gap-4 justify-center md:justify-start mt-8">

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/project"
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl"
            >
              View Projects
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/contact"
              className="border border-white/20 px-6 py-3 rounded-xl text-white hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </Link>
          </motion.div>

        </div>

      
        <div className="flex gap-8 mt-10 text-sm text-gray-400 justify-center md:justify-start">

          <div>
            <p className="text-white font-semibold text-lg">10+</p>
            <p>Projects</p>
          </div>

          <div>
            <p className="text-white font-semibold text-lg">React</p>
            <p>Expertise</p>
          </div>

          <div>
            <p className="text-white font-semibold text-lg">UI/UX</p>
            <p>Focused</p>
          </div>

        </div>

      </motion.div>

      
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mb-10 md:mb-0"
      >
        <ImageDistortion />
      </motion.div>

      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-5 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-cyan-400 mt-2 rounded-full"></div>
        </div>
      </motion.div>

    </section>
  );
};

export default Home;