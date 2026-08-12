import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FloatingContact = () => {
  return (
    <motion.div
      initial={{ x: 80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block"
    >
      <Link
        to="/contact"
        className="flex items-center justify-center px-2 py-5 rounded-l-xl btn-primary-glow font-semibold text-sm tracking-wider"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        Contact Us
      </Link>
    </motion.div>
  );
};

export default FloatingContact;
