import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { ArrowRight, MoveUpRight, Sparkles } from "lucide-react";

const CTASection=()=> <section className="relative overflow-hidden bg-black py-24 md:py-32">
 <div className="max-w-7xl mx-auto px-6 md:px-10">
  <Reveal><motion.div whileHover={{borderColor:"rgba(255,138,36,.5"}} className="cta-mega relative overflow-hidden rounded-[2rem] p-8 md:p-16 lg:p-20">
   <div className="cta-orb cta-orb-one"/><div className="cta-orb cta-orb-two"/><div className="cta-grid"/>
   <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-10 items-end">
    <div><span className="section-kicker"><Sparkles size={13}/> YOUR NEXT MOVE</span><h2 className="font-display mt-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02]">Let's make<br/><span className="hero-gradient-text">something matter.</span></h2><p className="mt-5 max-w-xl text-neutral-400 md:text-lg leading-relaxed">Have a website to build, a product to promote, or a story worth telling? Let's start with a conversation.</p></div>
    <div className="flex flex-col gap-3 lg:min-w-48"><Link to="/contact" className="btn-primary-glow rounded-full px-6 py-4 text-sm font-semibold inline-flex items-center justify-center gap-2">Start a project <ArrowRight size={16}/></Link><Link to="/portfolio" className="btn-outline-soft rounded-full px-6 py-4 text-sm font-semibold inline-flex items-center justify-center gap-2">View our work <MoveUpRight size={15}/></Link></div>
   </div>
   <div className="cta-bottom-meta"><span>V-GRAPH STUDIO</span><span>DIGITAL + CREATIVE · 2026</span></div>
  </motion.div></Reveal>
 </div>
</section>;
export default CTASection;
