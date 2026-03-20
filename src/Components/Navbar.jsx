import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/project" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 
      bg-slate-900/60 backdrop-blur-xl 
      border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-xl md:text-2xl font-bold 
          bg-gradient-to-r from-cyan-400 to-blue-500 
          bg-clip-text text-transparent tracking-wide"
        >
          RaviRanjan.dev
        </motion.h1>

       
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="relative text-sm text-gray-300 hover:text-cyan-400 transition"
            >
              {({ isActive }) => (
                <span className="relative">
                  {link.name}

                  {isActive && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute left-0 -bottom-1 w-full h-[2px] bg-cyan-400 rounded-full"
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}

          
          <Link
            to="/resume"
            className="bg-cyan-500 px-4 py-2 rounded-lg text-sm"
          >
            Resume
          </Link>
        </div>

       
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-slate-900/90 px-6 pb-4"
          >
            <div className="flex flex-col gap-4 pt-4">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-sm transition ${
                      isActive ? "text-cyan-400" : "text-gray-300"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;