import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-black via-zinc-950 to-black text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

       
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl border border-zinc-800">
            <img
              src="public/IMG20251122204112.jpg"
              alt="Ravi Ranjan Rajput"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            About Me
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frontend Developer with a Passion for Clean UI
          </h2>

          <p className="text-zinc-300 leading-relaxed mb-5">
            I'm Ravi Ranjan Rajput, a frontend developer specializing in React and
            modern JavaScript. I enjoy building fast, responsive, and visually
            appealing web applications with a strong focus on user experience,
            accessibility, and performance.
          </p>

          <p className="text-zinc-300 leading-relaxed mb-8">
            As an MCA graduate and self-driven learner, I continuously improve my
            skills by building real-world projects, exploring new technologies,
            and following best UI/UX practices to deliver professional-grade
            products.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-center">
              <p className="font-semibold text-white">10+</p>
              <p className="text-zinc-400">Projects</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-center">
              <p className="font-semibold text-white">New</p>
              <p className="text-zinc-400">Experience</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-center">
              <p className="font-semibold text-white">React</p>
              <p className="text-zinc-400">Specialist</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
