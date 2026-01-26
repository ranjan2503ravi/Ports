import React from "react";
import { motion } from "framer-motion";
import { img } from "framer-motion/client";

const projects = [
  {
    title: "Google Gemini AI Clone",
    description:
      "An AI-powered chatbot inspired by Google Gemini with real-time responses, conversation history, and modern UI.",
    tech: ["React", "API Integration", "Tailwind", "Context API"],
    live: "#",
    github: "#",
  },
  {
    title: "E-Commerce Web Application",
    description:
      "A full-featured e-commerce platform with product listing, cart, checkout flow, and responsive design.",
    tech: ["React", "Redux", "Tailwind", "REST API"],
    live: "https://gemini-clone-bi3e.vercel.app",
    github: "#",
  },
  {
    title: "Recipe Finder Application",
    description:
      "A recipe search app using public APIs with filters, favorites, and a clean, user-friendly interface.",
    tech: ["React", "API Integration", "CSS", "Hooks"],
    live: "https://ai-powered-recipe-generator-web-app.vercel.app/",
    github: "https://github.com/ranjan2503ravi/AI-Powered-Recipe-Generator-Web-App",
    img:"src/assets/Screen.png"
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
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
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Work</h2>
          <p className="text-zinc-400 mt-3 max-w-2xl mx-auto">
            A selection of projects demonstrating my ability to build modern,
            scalable, and user-focused web applications.
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
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
             
              <div className="h-44 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 flex items-center justify-center text-zinc-500 text-sm">
                <img src="src/assets/Screen.png" alt="" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">
                  {project.title}
                </h3>
                <p className="text-zinc-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

               
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

               
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-sm rounded-full bg-blue-600 hover:bg-blue-700 transition font-medium"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-sm rounded-full border border-zinc-600 hover:border-blue-500 transition font-medium"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
