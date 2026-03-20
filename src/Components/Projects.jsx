import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";

const Projects = () => {
  const projects = [
    {
      title: "Admin Dashboard",
      desc: "Analytics dashboard with real-time UI and data visualization.",
      img: "/2.jpg",
      tech: ["Next.js", "React", "Tailwind"],
      live: "#",
      github: "#",
      metric: "⚡ 40% faster workflow",
    },
    {
      title: "Movie App",
      desc: "Movie search app with API integration and trailer system.",
      img: "/CineScope .png",
      tech: ["React", "JS", "Tailwind"],
      live: "https://movie-app-7dv9.vercel.app",
      github: "https://github.com/ranjan2503ravi/movie-app",
      metric: "🎬 10k+ searches simulated",
    },
    {
      title: "AI Search Engine",
      desc: "Smart AI-powered search interface with fast results.",
      img: "/AI .png",
      tech: ["Next.js", "AI API"],
      live: "https://gemini-clone-azrw.vercel.app",
      github: "https://github.com/ranjan2503ravi/gemini-clone",
      metric: "⚡ 2x faster response UI",
    },
    {
      title: "Recipe Generator",
      desc: "AI recipe generator based on ingredients input.",
      img: "/recipe.png",
      tech: ["React", "Tailwind"],
      live: "https://ai-powered-recipe-generator-web-app-ashen.vercel.app",
      github: "https://github.com/ranjan2503ravi/recipe",
      metric: "🍳 500+ outputs",
    },
    {
      title: "Supercell Clone",
      desc: "Gaming landing page with smooth animations.",
      img: "/h.png",
      tech: ["Next.js", "GSAP"],
      live: "https://github.com/ranjan2503ravi/Supper",
      github: "https://github.com/ranjan2503ravi/Supper",
      metric: "🚀 95 Lighthouse score",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#050816] text-white px-6 md:px-20 py-24 overflow-hidden">

      <ParticlesBackground />

     
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full top-10 left-10 animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-purple-500/10 blur-[180px] rounded-full bottom-10 right-10 animate-pulse" />
      </div>

      
      <div className="text-center relative z-10 max-w-3xl mx-auto">
        <div className="inline-block px-4 py-1 mb-4 text-xs rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300">
          🚀 Selected Work • Production Level UI
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Building <span className="text-cyan-400">Scalable</span>,{" "}
          <span className="text-purple-400">Fast</span> &{" "}
          <span className="text-blue-400">Modern</span> Apps
        </h1>

        <p className="text-gray-400 mt-5 text-sm md:text-base">
          Projects focused on performance, UX, and scalable frontend architecture.
        </p>
      </div>

      
      <div className="relative z-10 mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group bg-white/5 backdrop-blur-xl border border-white/10 
            rounded-2xl overflow-hidden hover:border-cyan-400/40 
            hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition"
          >

            
            <div className="h-44 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-5">

              
              <h2 className="text-lg font-semibold group-hover:text-cyan-400 transition">
                {project.title}
              </h2>

              <p className="text-gray-400 text-sm mt-2">
                {project.desc}
              </p>

              
              <div className="mt-3 inline-block text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-300 border border-green-400/20">
                {project.metric}
              </div>

             
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

             
              <div className="flex justify-between mt-6">

                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400 transition"
                >
                  <Github size={18} /> Code
                </a>

                <a
                  href={project.live}
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400 transition"
                >
                  <ExternalLink size={18} /> Live
                </a>

              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Projects;