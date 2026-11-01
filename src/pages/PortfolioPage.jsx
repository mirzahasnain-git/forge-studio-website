import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Reveal from "../components/Reveal";
import { portfolio } from "../mock";
import { ArrowUpRight, Github, ExternalLink, Play, X, Layers3, Code2, Clapperboard, Sparkles } from "lucide-react";
import CTASection from "../components/CTASection";

const categories=["All","Web Development","Web Applications","Podcast Editing","Business Promotions","Product Advertisements","Food & Beverage Ads","Fashion & Apparel Ads","Lifestyle Product Ads"];

function VideoFrame({item,onClose}) {
 const portrait=item.aspect==="portrait";

 React.useEffect(()=>{
  const body=document.body;
  const previousOverflow=body.style.overflow;
  const previousPaddingRight=body.style.paddingRight;
  const scrollbarWidth=window.innerWidth-document.documentElement.clientWidth;
  body.style.overflow="hidden";
  if(scrollbarWidth>0) body.style.paddingRight=`${scrollbarWidth}px`;

  const handleKeyDown=(event)=>{
   if(event.key==="Escape") onClose();
  };
  window.addEventListener("keydown",handleKeyDown);

  return ()=>{
   body.style.overflow=previousOverflow;
   body.style.paddingRight=previousPaddingRight;
   window.removeEventListener("keydown",handleKeyDown);
  };
 },[onClose]);

 return <motion.div
  initial={{opacity:0}}
  animate={{opacity:1}}
  exit={{opacity:0}}
  transition={{duration:.2}}
  className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black/95 p-3 sm:p-5 backdrop-blur-md"
  role="dialog"
  aria-modal="true"
  aria-label={item.title}
  onClick={onClose}
 >
  <motion.div
   initial={{opacity:0,scale:.97,y:10}}
   animate={{opacity:1,scale:1,y:0}}
   exit={{opacity:0,scale:.98,y:6}}
   transition={{duration:.24,ease:[.22,1,.36,1]}}
   className={`relative flex w-full flex-col items-center ${portrait?"max-w-[min(420px,92vw)]":"max-w-5xl"}`}
   onClick={e=>e.stopPropagation()}
  >
   <button onClick={onClose} aria-label="Close video" className="portfolio-modal-close absolute -top-11 right-0 rounded-full border border-white/20 bg-black/80 p-2 text-white hover:text-orange-300"><X size={20}/></button>
   <div style={portrait?{width:"min(420px, 44dvh)"}:undefined} className={`relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl ${portrait?"aspect-[9/16]":"w-full max-w-5xl aspect-video max-h-[78dvh]"}`}>
    {item.videoSrc
     ? <video className="absolute inset-0 block h-full w-full bg-black object-contain" src={item.videoSrc} title={item.title} poster={item.cover} controls autoPlay playsInline preload="auto" controlsList="nodownload" onError={e=>{e.currentTarget.parentElement.dataset.videoError="true";}}/>
     : <iframe className="absolute inset-0 block h-full w-full" src={`https://www.youtube-nocookie.com/embed/${item.videoId}?autoplay=1&rel=0&playsinline=1`} title={item.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
    }
   </div>
   <p className="mt-2 text-center text-sm text-neutral-300">{item.title}</p>
  </motion.div>
 </motion.div>;
}

const PortfolioPage=()=>{
 const reduceMotion=useReducedMotion();
 const [filter,setFilter]=useState("All");
 const [activeVideo,setActiveVideo]=useState(null);
 const items=filter==="All"?portfolio:portfolio.filter(p=>p.category===filter);
 return <>
  <section className="page-hero relative overflow-hidden bg-grid noise">
   <div className="page-hero-glow"/><div className="portfolio-orbit portfolio-orbit-one"/><div className="portfolio-orbit portfolio-orbit-two"/>
   <div className="max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-14 md:pt-32 md:pb-20 relative z-10">
    <Reveal><span className="section-kicker"><Layers3 size={13}/> THE WORK / SELECTED PROJECTS</span>
     <div className="grid lg:grid-cols-[1fr_.65fr] gap-8 items-end mt-6"><h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[.98]">Proof is in<br/><span className="hero-gradient-text">the pixels.</span></h1><p className="max-w-lg text-neutral-400 text-lg leading-relaxed">Digital builds with a purpose. Creative edits with a point of view. Explore the V-Graph work, play a sample, and see how ideas become experiences.</p></div>
    </Reveal>
    <div className="portfolio-top-meta"><span><Code2 size={13}/> WEB / INTERFACES</span><span><Clapperboard size={13}/> VIDEO / STORYTELLING</span><span><Sparkles size={13}/> MADE TO BE EXPLORED</span></div>
   </div>
  </section>
  <section className="relative overflow-hidden bg-black py-12 md:py-16">
   <div className="portfolio-section-glow" aria-hidden="true"/>
   <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
    <Reveal><div className="portfolio-filter-shell"><div><p className="text-xs text-neutral-500 tracking-[.16em]">BROWSE THE COLLECTION</p><p className="mt-1 font-display text-xl font-semibold">Selected work <span className="text-neutral-500 font-normal">({items.length})</span></p></div><div className="flex flex-wrap gap-2" aria-label="Filter portfolio projects">{categories.map(c=><button key={c} onClick={()=>setFilter(c)} aria-pressed={filter===c} className="portfolio-filter rounded-full px-3.5 py-2 text-[11px] font-medium">{c}</button>)}</div></div></Reveal>
    <motion.div layout className="portfolio-grid mt-8" variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.075, delayChildren: reduceMotion ? 0 : 0.04 } } }} initial="hidden" animate="visible">
     <AnimatePresence mode="popLayout" initial={false}>
      {items.map((p,index)=>{
       const isVideo=Boolean(p.videoId || p.videoSrc);
       return <motion.article
        layout
        key={p.id}
        variants={{
          hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 42, scale: .965, filter: "blur(8px)" },
          visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: .16, margin: "0px 0px -45px 0px" }}
        exit={reduceMotion ? undefined : { opacity: 0, y: 18, scale: .97, filter: "blur(4px)" }}
        transition={{ duration: reduceMotion ? 0 : .72, delay: reduceMotion ? 0 : Math.min(index * .055, .32), ease: [.22, 1, .36, 1], layout: { duration: .48, ease: [.22, 1, .36, 1] } }}
        whileHover={reduceMotion ? undefined : { y: -8, transition: { duration: .28, ease: [.22, 1, .36, 1] } }}
        className={`portfolio-card portfolio-card-uniform card-dark group ${isVideo ? "portfolio-card-video" : "portfolio-card-web"}`}>
        <div className="portfolio-cover-wrap">\n         <span className="portfolio-motion-rail" aria-hidden="true"/>
         {isVideo?<button type="button" onClick={()=>setActiveVideo(p)} aria-label={`Play ${p.title}`} className="portfolio-cover portfolio-cover-button">
          <img src={p.cover} alt={p.title} loading="lazy" decoding="async" onError={e=>{e.currentTarget.style.opacity="0";}}/>
          <span className="portfolio-image-shade"/><span className="portfolio-cover-grid"/><span className="portfolio-cover-sheen" aria-hidden="true"/>
          <span className="tag-pill portfolio-category">{p.category}</span>
          <span className="portfolio-play"><Play size={19} fill="currentColor"/></span>
          <span className="portfolio-cover-caption"><span className="portfolio-project-index">V-GRAPH / PROJECT {String(p.id).padStart(2,"0")}</span><span className="portfolio-cover-title">{p.title}</span></span>
          <span className="portfolio-corner-arrow"><ArrowUpRight size={18}/></span>
         </button>:<div className="portfolio-cover portfolio-cover-static">
          <img className="portfolio-cover-image" src={p.cover} alt={p.title} loading="lazy" decoding="async" onError={e=>{e.currentTarget.style.display="none";e.currentTarget.parentElement.classList.add("portfolio-cover-fallback");}}/>
          <span className="portfolio-image-shade"/><span className="portfolio-cover-grid"/>
          <span className="tag-pill portfolio-category">{p.category}</span>
          <span className="portfolio-cover-caption"><span className="portfolio-project-index">V-GRAPH / PROJECT {String(p.id).padStart(2,"0")}</span><span className="portfolio-cover-title">{p.title}</span></span>
          <span className="portfolio-corner-arrow"><ArrowUpRight size={18}/></span>
         </div>}
        </div>
        <div className="portfolio-card-body"><p className="portfolio-card-description">{p.desc}</p><div className="portfolio-card-actions">
         {p.demo&&<a href={p.demo} target="_blank" rel="noreferrer" className="portfolio-action portfolio-action-primary"><ExternalLink size={13}/> Live demo</a>}
         {p.github&&<a href={p.github} target="_blank" rel="noreferrer" className="portfolio-action"><Github size={13}/> Source</a>}
         {isVideo&&<button onClick={()=>setActiveVideo(p)} className="portfolio-action portfolio-action-primary"><Play size={13}/> Play sample</button>}
         {isVideo&&<span className="portfolio-video-note">VIDEO SAMPLE <span>↗</span></span>}
        </div></div>
       </motion.article>;
      })}
     </AnimatePresence>
    </motion.div>
    <p className="mt-9 text-center text-xs text-neutral-600">Portfolio samples are presented to demonstrate creative direction and implementation.</p>
   </div>
  </section>
  <CTASection/>
  <AnimatePresence>{activeVideo&&<VideoFrame item={activeVideo} onClose={()=>setActiveVideo(null)}/>}</AnimatePresence>
 </>;
};
export default PortfolioPage;
