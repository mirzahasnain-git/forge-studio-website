import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";
import { portfolio } from "../mock";
import { ArrowUpRight, Github, ExternalLink, Play, X, Layers3, Code2, Clapperboard, Sparkles } from "lucide-react";
import CTASection from "../components/CTASection";

const categories=["All","Web Development","Web Applications","Podcast Editing","Business Promotions","Product Advertisements"];
function VideoFrame({item,onClose}) {
 const portrait=item.aspect==="portrait";
 return <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-label={item.title} onClick={onClose}>
  <motion.div initial={{opacity:0,scale:.94,y:14}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:.96}} className={`relative w-full ${portrait?"max-w-sm":"max-w-5xl"}`} onClick={e=>e.stopPropagation()}>
   <button onClick={onClose} aria-label="Close video" className="absolute -top-11 right-0 rounded-full border border-white/20 bg-black/70 p-2 text-white hover:text-orange-300"><X size={20}/></button>
   <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl ${portrait?"aspect-[9/16]":"aspect-video"}`}><iframe className="absolute inset-0 h-full w-full" src={`https://www.youtube-nocookie.com/embed/${item.videoId}?autoplay=1&rel=0`} title={item.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/></div>
   <p className="mt-3 text-sm text-neutral-300">{item.title}</p>
  </motion.div>
 </motion.div>;
}
const PortfolioPage=()=>{
 const [filter,setFilter]=useState("All");
 const [activeVideo,setActiveVideo]=useState(null);
 const items=filter==="All"?portfolio:portfolio.filter(p=>p.category===filter);
 return <>
  <section className="page-hero relative overflow-hidden bg-grid noise">
   <div className="page-hero-glow"/>
   <div className="max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-14 md:pt-32 md:pb-20 relative z-10">
    <Reveal><span className="section-kicker"><Layers3 size={13}/> THE WORK / SELECTED PROJECTS</span>
     <div className="grid lg:grid-cols-[1fr_.65fr] gap-8 items-end mt-6"><h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[.98]">Proof is in<br/><span className="hero-gradient-text">the pixels.</span></h1><p className="max-w-lg text-neutral-400 text-lg leading-relaxed">A growing collection of digital builds and video edits. Explore the work, open a live project, or play a sample right here.</p></div>
    </Reveal>
    <div className="portfolio-top-meta"><span><Code2 size={13}/> WEB / INTERFACES</span><span><Clapperboard size={13}/> VIDEO / STORYTELLING</span><span><Sparkles size={13}/> MADE TO BE EXPLORED</span></div>
   </div>
  </section>
  <section className="relative overflow-hidden bg-black py-12 md:py-16">
   <div className="max-w-7xl mx-auto px-6 md:px-10">
    <Reveal><div className="portfolio-filter-shell"><div><p className="text-xs text-neutral-500">BROWSE THE COLLECTION</p><p className="mt-1 font-display text-xl font-semibold">Selected work <span className="text-neutral-500 font-normal">({items.length})</span></p></div><div className="flex flex-wrap gap-2" aria-label="Filter portfolio projects">{categories.map(c=><button key={c} onClick={()=>setFilter(c)} aria-pressed={filter===c} className="portfolio-filter rounded-full px-3.5 py-2 text-[11px] font-medium">{c}</button>)}</div></div></Reveal>
    <motion.div layout className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
     <AnimatePresence mode="popLayout">
      {items.map((p,index)=>{
       const isVideo=Boolean(p.videoId); const portrait=p.aspect==="portrait";
       return <motion.article layout key={p.id} initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} exit={{opacity:0,scale:.97}} transition={{duration:.28,delay:Math.min(index*.035,.18)}} className={`portfolio-card card-dark group overflow-hidden rounded-3xl ${index===0&&filter==="All"?"lg:col-span-2":""}`}>
        <button type="button" onClick={()=>isVideo&&setActiveVideo(p)} disabled={!isVideo} aria-label={isVideo?`Play ${p.title}`:p.title} className={`portfolio-cover relative block w-full bg-neutral-950 text-left ${portrait?"aspect-[9/13] sm:aspect-[9/14]":index===0&&filter==="All"?"aspect-[16/8]":"aspect-[16/10]"} ${isVideo?"cursor-pointer":"cursor-default"}`}>
         <img src={p.cover} alt={p.title} className="h-full w-full object-cover" loading="lazy"/>
         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"/>
         <span className="absolute left-4 top-4 tag-pill rounded-full px-3 py-1.5 text-[10px] font-medium">{p.category}</span>
         {isVideo&&<span className="absolute inset-0 flex items-center justify-center"><span className="portfolio-play"><Play size={20} fill="currentColor"/></span></span>}
         <span className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4"><span><span className="block text-[9px] uppercase tracking-[.18em] text-white/60">V-GRAPH / PROJECT {String(p.id).padStart(2,"0")}</span><span className="font-display mt-1 block text-xl md:text-2xl font-semibold text-white">{p.title}</span></span><span className="portfolio-corner-arrow"><ArrowUpRight size={18}/></span></span>
        </button>
        <div className="p-5 md:p-6"><p className="text-sm leading-6 text-neutral-400">{p.desc}</p><div className="mt-5 flex flex-wrap gap-2">
         {p.demo&&<a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-orange-400/30 px-3 py-2 text-xs font-medium text-orange-200 hover:bg-orange-400/10"><ExternalLink size={13}/> Live demo</a>}
         {p.github&&<a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-2 text-xs font-medium text-neutral-300 hover:border-white/30"><Github size={13}/> Source</a>}
         {isVideo&&<button onClick={()=>setActiveVideo(p)} className="inline-flex items-center gap-1.5 rounded-full border border-orange-400/30 px-3 py-2 text-xs font-medium text-orange-200 hover:bg-orange-400/10"><Play size={13}/> Play sample</button>}
        </div></div>
       </motion.article>;
      })}
     </AnimatePresence>
    </motion.div>
    <p className="mt-8 text-center text-xs text-neutral-600">Portfolio samples are presented to demonstrate creative direction and implementation.</p>
   </div>
  </section>
  <CTASection/>
  <AnimatePresence>{activeVideo&&<VideoFrame item={activeVideo} onClose={()=>setActiveVideo(null)}/>}</AnimatePresence>
 </>;
};
export default PortfolioPage;
