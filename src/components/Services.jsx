import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Code2, Clapperboard, Sparkles, Zap, Layers3, Globe, Film, MonitorSmartphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { itServices, videoServices } from "../mock";

const ServiceCard = ({ service, index, video = false }) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = video ? Film : (index === 0 ? Globe : index === 1 ? Layers3 : MonitorSmartphone);
  return (
    <Reveal delay={index * 0.07} className="h-full">
      <motion.article whileHover={{ y: -7 }} className={`service-feature-card group relative h-full overflow-hidden rounded-3xl p-6 md:p-7 ${video ? "service-video-card" : "service-web-card"}`}>
        <div className="service-card-orb" />
        <div className="relative z-10 flex h-full flex-col">
          <div className="flex items-start justify-between gap-4">
            <span className="service-icon"><Icon size={20}/></span>
            <span className="service-index">0{index + 1} / {video ? "CREATIVE" : "DIGITAL"}</span>
          </div>
          <span className="mt-7 inline-flex w-fit rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[.16em] text-orange-200">{service.tag}</span>
          <h3 className="font-display mt-4 text-2xl md:text-[1.7rem] font-semibold tracking-tight">{service.title}</h3>
          <p className="mt-3 text-sm leading-6 text-neutral-400">{service.desc}</p>
          <AnimatePresence initial={false}>
            {expanded && <motion.ul initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} className="mt-5 space-y-2 overflow-hidden">
              {service.points.map(point=><li key={point} className="flex items-center gap-2 text-sm text-neutral-300"><Check size={14} className="text-orange-300"/>{point}</li>)}
            </motion.ul>}
          </AnimatePresence>
          <div className="mt-auto pt-7 flex items-center justify-between gap-3">
            <button onClick={()=>setExpanded(!expanded)} aria-expanded={expanded} className="text-xs font-medium text-neutral-300 transition-colors hover:text-orange-200">{expanded ? "Show less −" : "What's included +"}</button>
            <Link to="/contact" className="service-arrow" aria-label={`Enquire about ${service.title}`}><ArrowUpRight size={18}/></Link>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
};

const Services = ({ compact = false }) => (
  <section id="services" className="relative overflow-hidden bg-black py-24 md:py-32">
    <div className="services-backdrop" />
    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
      {!compact && <Reveal><div className="mb-16 grid lg:grid-cols-[1fr_.7fr] items-end gap-6">
        <div><span className="section-kicker"><Sparkles size={13}/> WHAT WE DO</span><h2 className="font-display mt-5 text-4xl md:text-6xl font-bold tracking-tight">Two disciplines.<br/><span className="hero-gradient-text">One creative engine.</span></h2></div>
        <p className="max-w-lg text-neutral-400 md:justify-self-end md:text-lg leading-relaxed">From the first pixel to the final frame, we build digital experiences and content that help brands show up with intention.</p>
      </div></Reveal>}
      <div className="service-pillar-heading">
        <div><span className="section-kicker"><Code2 size={13}/> PILLAR 01</span><h3 className="font-display mt-3 text-2xl md:text-3xl font-semibold">Digital experiences</h3><p className="mt-2 text-sm text-neutral-500">Websites, interfaces, and practical technology.</p></div>
        <Link to="/services" className="service-text-link">Explore services <ArrowUpRight size={15}/></Link>
      </div>
      <div className="mt-6 grid md:grid-cols-3 gap-4">{itServices.map((s,i)=><ServiceCard key={s.id} service={s} index={i}/>)}</div>
      <div className="my-14 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"/>
      <div className="service-pillar-heading">
        <div><span className="section-kicker"><Clapperboard size={13}/> PILLAR 02</span><h3 className="font-display mt-3 text-2xl md:text-3xl font-semibold">Content in motion</h3><p className="mt-2 text-sm text-neutral-500">Editing, storytelling, and promotional video.</p></div>
        <Link to="/portfolio" className="service-text-link">See video work <ArrowUpRight size={15}/></Link>
      </div>
      <div className="mt-6 grid md:grid-cols-3 gap-4">{videoServices.map((s,i)=><ServiceCard key={s.id} service={s} index={i} video/>)}</div>
      <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-orange-400/20 bg-orange-400/[.04] p-5 md:p-6">
        <div className="flex items-center gap-3"><span className="service-icon service-icon-small"><Zap size={17}/></span><div><p className="text-sm font-semibold">Need both web and content?</p><p className="mt-1 text-xs text-neutral-500">Keep your digital presence consistent from screen to social.</p></div></div>
        <Link to="/contact" className="btn-primary-glow inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">Let's plan it <ArrowUpRight size={15}/></Link>
      </div>
    </div>
  </section>
);
export default Services;
