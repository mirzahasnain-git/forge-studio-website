import React from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { Play, ArrowUpRight, Clapperboard } from "lucide-react";
import { showreels } from "../mock";

const Showreel = () => <section className="relative overflow-hidden bg-black py-24 md:py-32">
 <div className="showreel-halo"/>
 <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
  <Reveal><div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
   <div><span className="section-kicker"><Clapperboard size={13}/> SELECTED MOTION</span><h2 className="font-display mt-5 text-4xl md:text-6xl font-bold tracking-tight">Stories in <span className="hero-gradient-text">motion.</span></h2><p className="mt-4 max-w-xl text-neutral-400 md:text-lg">A few frames from the creative side of V-Graph.</p></div>
   <Link to="/portfolio" className="service-text-link">Explore all projects <ArrowUpRight size={15}/></Link>
  </div></Reveal>
  <div className="showreel-grid">
   {showreels.map((r,i)=><Reveal key={r.id} delay={i*.1}><article className={`showreel-card ${i===0?"showreel-card-featured":""}`}>
    <div className="showreel-video-frame"><iframe src={r.embed} title={r.title} loading="lazy" className="absolute inset-0 h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/><div className="showreel-frame-label"><span><Play size={11} fill="currentColor"/> SAMPLE / 0{i+1}</span><span>{r.type}</span></div></div>
    <div className="flex items-center justify-between gap-4 p-5 md:p-6"><div><span className="text-[10px] uppercase tracking-[.16em] text-orange-200">{r.type}</span><h3 className="font-display mt-2 text-lg md:text-xl font-semibold">{r.title}</h3></div><span className="showreel-arrow"><ArrowUpRight size={18}/></span></div>
   </article></Reveal>)}
  </div>
 </div>
</section>;
export default Showreel;
