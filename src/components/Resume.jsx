import React from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

const Resume = () => {
  return (
    <section className="relative min-h-screen bg-[#050816] flex items-center justify-center px-6 md:px-20 py-24 overflow-hidden">

     
      <ParticlesBackground />

      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full top-10 left-10 animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-purple-500/10 blur-[160px] rounded-full bottom-10 right-10 animate-pulse" />
      </div>

      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-6xl grid md:grid-cols-2 gap-10
        bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10 shadow-[0_0_80px_rgba(0,0,0,0.6)]"
      >

        
        <div className="space-y-6">

          
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              My <span className="text-cyan-400">Resume</span>
            </h1>
            <p className="text-gray-400 mt-2">
              Frontend Developer | React • Next.js • UI Engineer
            </p>
          </div>

        
          <div className="bg-black/20 border border-white/10 rounded-xl p-4">
            <p className="text-cyan-400 font-medium">
              🚀 Open to Frontend Developer Roles
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Available for internships & full-time opportunities
            </p>
          </div>

         
          <div>
            <h3 className="text-white font-semibold mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "JavaScript",
                "Tailwind CSS",
                "Framer Motion",
                "Git",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-400 hover:text-cyan-300 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          
          <div className="flex flex-col sm:flex-row gap-4 pt-2">

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="/resume.pdf"
              target="_blank"
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-3 rounded-lg font-medium text-center shadow-md"
            >
              View Resume
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="/resume.pdf"
              download
              className="border border-white/20 text-white px-5 py-3 rounded-lg hover:border-cyan-400 hover:text-cyan-300 transition text-center"
            >
              Download
            </motion.a>

          </div>

        </div>

       
        <div className="flex flex-col">

          <h3 className="text-white font-semibold mb-3">
            Live Preview
          </h3>

          <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl hover:shadow-cyan-500/10 transition">
            <iframe
              src="/resume.pdf"
              className="w-full h-[600px]"
              title="Resume"
            />
          </div>

          <p className="text-gray-500 text-sm mt-3 text-center">
            Scroll & view full resume inside viewer
          </p>

        </div>

      </motion.div>
    </section>
  );
};

export default Resume;