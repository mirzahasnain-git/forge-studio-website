import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Flame } from "lucide-react";
import { navLinks } from "../mock";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-black/75 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="V-Graph Studio home">
          <div className="w-9 h-9 rounded-xl border border-orange-400/50 flex items-center justify-center bg-black/50 group-hover:border-orange-400 transition-colors">
            <Flame size={17} className="text-lime" />
          </div>
          <span className="font-display text-lg md:text-xl font-semibold text-lime tracking-tight">
            V-Graph <span className="text-white">Studio</span>
          </span>
        </Link>

        <div className="flex items-center">
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((l) => (
              <NavLink
                key={l.path}
                to={l.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-white ${
                    isActive ? "text-lime" : "text-neutral-300"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-neutral-200 p-2 ml-4"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-md"
        >
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <NavLink
                key={l.path}
                to={l.path}
                className={({ isActive }) =>
                  `py-2 text-base ${isActive ? "text-lime" : "text-neutral-200"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
