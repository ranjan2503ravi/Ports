import React, { useState } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from './ParticlesBackground'

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully 🚀 (Frontend Demo)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-20 py-24 bg-[#050816] overflow-hidden">

     
      <ParticlesBackground />

     
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-2xl bg-white/5 backdrop-blur-xl 
        border border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_0_80px_rgba(0,0,0,0.6)]"
      >

        
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Contact <span className="text-cyan-400">Me</span>
          </h1>
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Let’s build something meaningful together 🚀
          </p>
        </div>

        
        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            aria-label="Your Name"
            className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white 
            outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
            required
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            aria-label="Your Email"
            className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white 
            outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
            required
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your Message"
            aria-label="Your Message"
            className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white 
            outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition resize-none"
            required
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 rounded-lg transition shadow-md hover:shadow-lg"
          >
            Send Message
          </motion.button>

        </form>

        
        <div className="mt-8 text-center text-gray-400 text-sm space-y-1">
          <p>📧 <a href="mailto:ranjan2503ravi@gmail.com" className="hover:text-cyan-400 transition">ranjan2503ravi@gmail.com</a></p>
          <p>📍 India</p>
        </div>

      </motion.div>

    </section>
  );
};

export default Contact;