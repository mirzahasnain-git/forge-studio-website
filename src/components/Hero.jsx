import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Clapperboard, Layers3, MoveUpRight } from "lucide-react";
import { stats } from "../mock";

const Hero = () => {
  const sceneRef = useRef(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 18 });

  const handlePointerMove = (event) => {
    if (!sceneRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = sceneRef.current.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };
  const resetPointer = () => { pointerX.set(0); pointerY.set(0); };

  return (
    <section className="vgraph-hero relative overflow-hidden bg-grid noise">
      <div className="hero-ambient hero-ambient-one" />
      <div className="hero-ambient hero-ambient-two" />
      <div className="hero-scanline" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="grid lg:grid-cols-[1.04fr_0.96fr] gap-12 lg:gap-6 items-center">
          <div className="relative z-10">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-400/[0.07] px-3.5 py-2 text-[11px] md:text-xs uppercase tracking-[0.17em] text-orange-200">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-orange-400" /></span>
              Digital experiences · Creative content
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.08 }} className="font-display mt-7 text-5xl sm:text-6xl xl:text-[4.7rem] font-bold tracking-[-0.055em] leading-[0.99] max-w-3xl">
              We build the
              <br /> digital <span className="hero-gradient-text">next.</span>
              <br /><span className="text-neutral-100">Then make it</span>
              <br /><span className="hero-gradient-text">impossible to ignore.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.22 }} className="mt-6 max-w-xl text-neutral-400 text-base md:text-lg leading-relaxed">
              V-Graph Studio combines modern web development with high-impact video editing—helping ambitious businesses look sharper, work smarter, and show up online.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.32 }} className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link to="/contact" className="btn-primary-glow rounded-full px-6 py-3.5 text-sm font-semibold inline-flex items-center justify-center gap-2 group">
                Build with us <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/portfolio" className="btn-outline-soft rounded-full px-6 py-3.5 text-sm font-semibold inline-flex items-center justify-center gap-2">
                Explore selected work <MoveUpRight size={15} />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55, duration: 0.8 }} className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-neutral-400">
              <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-orange-400" /> Web design & development</span>
              <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-orange-400" /> Video editing & ads</span>
            </motion.div>

            <div className="mt-12 flex gap-8 md:gap-12">
              {stats.map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 + i * 0.1 }} className="hero-stat">
                  <div className="font-display text-2xl md:text-3xl font-semibold text-neutral-100">{s.value}<span className="text-orange-400">+</span></div>
                  <div className="mt-1 text-[11px] md:text-xs text-neutral-500">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            ref={sceneRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={resetPointer}
            initial={{ opacity: 0, scale: 0.94, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="hero-scene relative mx-auto w-full max-w-[590px] min-h-[420px] sm:min-h-[500px] flex items-center justify-center"
            style={{ perspective: 1100 }}
          >
            <motion.div className="hero-3d-stage relative w-full h-[400px] sm:h-[470px]" style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>
              <div className="hero-orbit hero-orbit-one" />
              <div className="hero-orbit hero-orbit-two" />
              <div className="hero-core">
                <div className="hero-core-inner">
                  <span className="hero-core-mark">V</span>
                  <span className="hero-core-dot" />
                </div>
              </div>

              <motion.div animate={{ y: [0, -9, 0], rotateZ: [-2, 0, -2] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="hero-float-card hero-code-card">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <div className="flex items-center gap-1.5"><i className="hero-window-dot" /><i className="hero-window-dot" /><i className="hero-window-dot" /></div>
                  <span className="text-[10px] tracking-widest text-neutral-500">DIGITAL / 001</span>
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-orange-300 text-xs"><Code2 size={14} /> WEB EXPERIENCE</div>
                  <div className="mt-4 font-mono text-[11px] sm:text-xs leading-6 text-neutral-300">
                    <div><span className="text-orange-300">const</span> <span className="text-sky-200">ideas</span> = <span className="text-emerald-200">"ambitious"</span>;</div>
                    <div><span className="text-orange-300">return</span> <span className="text-neutral-500">design</span> + <span className="text-neutral-500">technology</span>;</div>
                    <div className="mt-2 h-1.5 w-2/3 rounded-full bg-white/10 overflow-hidden"><span className="block h-full w-4/5 rounded-full bg-gradient-to-r from-orange-500 to-amber-200" /></div>
                  </div>
                </div>
              </motion.div>

              <motion.div animate={{ y: [0, 10, 0], rotateZ: [2, 0, 2] }} transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }} className="hero-float-card hero-video-card">
                <div className="hero-video-art">
                  <div className="hero-video-sun" />
                  <div className="hero-video-horizon" />
                  <div className="hero-video-play"><Clapperboard size={19} /></div>
                  <span className="absolute left-3 bottom-3 text-[10px] uppercase tracking-[0.18em] text-white/85">Make it move</span>
                </div>
                <div className="flex items-center justify-between px-3.5 py-3">
                  <div><div className="text-xs font-semibold text-white">Content that connects</div><div className="text-[10px] text-neutral-500 mt-1">REELS · ADS · STORYTELLING</div></div>
                  <div className="h-8 w-8 rounded-full border border-orange-400/30 flex items-center justify-center text-orange-300"><Clapperboard size={14} /></div>
                </div>
              </motion.div>

              <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} className="hero-floating-chip hero-chip-one"><Layers3 size={15} /><span>Design × Technology</span></motion.div>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }} className="hero-floating-chip hero-chip-two"><span className="hero-chip-live" /> Crafted for impact</motion.div>
              <div className="hero-ground-glow" />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="hero-bottom-rule" />
    </section>
  );
};

export default Hero;
