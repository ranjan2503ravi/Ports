import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const Home = () => {
  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, type: "spring", stiffness: 70 },
    }),
  };

  const buttonVariant = {
    hover: { scale: 1.05, boxShadow: "0px 8px 20px rgba(59,130,246,0.4)" },
  };

  const iconVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 1 + i * 0.2, type: "spring", stiffness: 70 },
    }),
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white px-6 relative overflow-hidden">

  
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-150px] left-[-150px] w-[350px] h-[350px] bg-blue-600/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-150px] right-[-150px] w-[350px] h-[350px] bg-purple-600/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
       
        <motion.div initial="hidden" animate="visible" className="flex flex-col">
          <motion.span variants={textVariant} custom={1} className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            👋 Hello, I'm
          </motion.span>

          <motion.h1 variants={textVariant} custom={2} className="text-4xl md:text-6xl font-extrabold mb-5 tracking-tight">
            {"Ravi Ranjan Rajput".split("").map((letter, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } } }}>{letter}</motion.span>
            ))}
          </motion.h1>

          <motion.h2 variants={textVariant} custom={3} className="text-xl md:text-2xl text-blue-400 font-semibold mb-6">
            Frontend Developer • React Specialist
          </motion.h2>

          <motion.p variants={textVariant} custom={4} className="text-zinc-300 max-w-2xl mb-10 leading-relaxed text-lg">
            I craft high-performance, responsive, and scalable web interfaces
            using React, JavaScript, Tailwind CSS, and modern frontend
            architecture. Focused on clean UI, accessibility, and great user
            experience.
          </motion.p>

          <motion.div variants={textVariant} custom={5} className="flex flex-wrap items-center gap-5">
            <motion.a href="#projects" variants={buttonVariant} whileHover="hover" className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 transition-all rounded-full font-semibold shadow-lg shadow-blue-600/20">
              View Work
            </motion.a>

            <motion.a href="/Ravi_Ranjan_Rajput_Resume.pdf" download variants={buttonVariant} whileHover="hover" className="flex items-center gap-2 px-7 py-3.5 border border-zinc-600 hover:border-blue-500 transition-all rounded-full font-semibold">
              <FaDownload /> Resume
            </motion.a>

            <div className="flex items-center gap-4 text-2xl text-zinc-400">
              {[FaGithub, FaLinkedin].map((Icon, i) => (
                <motion.a key={i} href="#" target="_blank" rel="noreferrer" custom={i} initial="hidden" animate="visible" variants={iconVariant} className="hover:text-white transition-transform transform hover:-translate-y-1">
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        
        <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="flex justify-center lg:justify-end">
          <motion.div animate={{ rotate: [0, 3, -3, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-purple-500 shadow-xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-black">
              <img
  src="/IMG20251122204112.jpg"
  alt="Ravi Ranjan Rajput"
  className="w-full h-full object-cover object-center scale-105"
/>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
