import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { stats } from "../mock";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-grid noise">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-6 left-1/2 -translate-x-1/2 z-40 hidden lg:flex justify-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-400/30 bg-black/50 text-xs font-medium text-lime backdrop-blur-sm">
          <Sparkles size={14} />
          Web development + video editing
        </div>
      </motion.div>

      <div className="pointer-events-none absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-25" style={{ background: "radial-gradient(circle, rgba(255,122,24,0.34) 0%, transparent 70%)" }} />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(circle, rgba(255,164,71,0.28) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-12 md:pt-20 md:pb-14">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-8 mb-3 inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-400/5 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-lime"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
            V-Graph Studio · Digital + Creative
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-5xl"
          >
            Ideas into impact.
            <br />
            <span className="hero-gradient-text">Built to stand out.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-2xl text-neutral-400 text-lg md:text-xl leading-relaxed"
          >
            We build modern websites and create sharp, engaging video content that helps brands show up with confidence online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <Link to="/contact" className="btn-primary-glow rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2">
              Start Your Project <ArrowRight size={16} />
            </Link>
            <Link to="/portfolio" className="btn-outline-soft rounded-full px-7 py-3.5 text-sm font-semibold">
              Explore Our Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-12 grid grid-cols-3 gap-8 md:gap-16"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl md:text-5xl font-semibold text-lime">{s.value}</div>
                <div className="text-xs md:text-sm text-neutral-400 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
