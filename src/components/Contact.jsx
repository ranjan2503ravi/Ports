import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Form Data:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-black via-zinc-950 to-black text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

      
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-zinc-400 mb-8 max-w-md leading-relaxed">
            I'm open to freelance work, internships, and full-time frontend
            opportunities. Feel free to reach out — I'd love to connect!
          </p>

          <div className="space-y-4 text-zinc-300">
            <p>
              📧 Email:{" "}
              <a
                href="mailto:your-email@gmail.com"
                className="text-blue-400 hover:underline"
              >
                ranjan2503ravi@gmail.com
              </a>
            </p>
            <p>
              📞 Phone:{" "}
              <span className="text-blue-400">7979056132</span>
            </p>
            <p>
              📍 Location:{" "}
              <span className="text-blue-400">Bhopal</span>
            </p>
          </div>
        </motion.div>

        
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl"
        >
          <div className="grid gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-blue-500 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-blue-500 transition"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-blue-500 transition resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold"
            >
              Send Message
            </button>
          </div>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;
