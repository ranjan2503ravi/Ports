import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: "Advanced" },
  { name: "CSS", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "Git & GitHub", level: "Intermediate" },
  { name: "REST APIs", level: "Intermediate" },
  { name: "Responsive Design", level: "Advanced" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-b from-black via-zinc-950 to-black text-white"
    >
      <div className="max-w-6xl mx-auto">

       
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Technical Expertise
          </h2>
          <p className="text-zinc-400 mt-3 max-w-2xl mx-auto">
            Technologies and tools I use to build fast, scalable, and beautiful
            web applications.
          </p>
        </motion.div>

      
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-6 text-center shadow-md hover:shadow-lg hover:border-blue-500/50 transition-all"
            >
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <p className="text-sm text-zinc-400">{skill.level}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
