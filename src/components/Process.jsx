import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, CheckCircle2, Compass, PencilRuler, WandSparkles, MessageSquareText, Rocket } from "lucide-react";
import Reveal from "./Reveal";
import { process } from "../mock";

const icons=[Compass,PencilRuler,WandSparkles,MessageSquareText,Rocket];
const Process = () => {
 const [active,setActive]=useState(0);
 return <section className="relative overflow-hidden bg-[#0b0a09] py-24 md:py-32">
  <div className="process-glow"/>
  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
   <Reveal><div className="grid lg:grid-cols-[.9fr_1.1fr] gap-10 lg:gap-20 items-end mb-14">
    <div><span className="section-kicker"><CheckCircle2 size={13}/> THE METHOD</span><h2 className="font-display mt-5 text-4xl md:text-6xl font-bold tracking-tight">A clear path.<br/><span className="hero-gradient-text">A better outcome.</span></h2></div>
    <p className="max-w-xl text-neutral-400 text-base md:text-lg leading-relaxed">Good work doesn't happen by accident. Our process keeps the brief clear, the feedback useful, and the next step visible.</p>
   </div></Reveal>
   <div className="process-layout">
    <div className="process-list" role="tablist" aria-label="Project process">
     {process.map((item,i)=>{const Icon=icons[i];return <button key={item.step} role="tab" aria-selected={active===i} onClick={()=>setActive(i)} className={`process-step ${active===i?"is-active":""}`}>
      <span className="process-step-number">{item.step}</span><span className="process-step-title">{item.title}</span><span className="process-step-icon">{Icon&&<Icon size={17}/>}</span>
     </button>})}
    </div>
    <div className="process-detail-panel">
      <AnimatePresence mode="wait"><motion.div key={active} initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:.25}} className="relative z-10">
       <div className="process-detail-top"><span>PHASE {process[active].step}</span><span>0{active+1} / 05</span></div>
       <div className="process-illustration"><div className="process-illustration-ring ring-a"/><div className="process-illustration-ring ring-b"/><div className="process-illustration-core">{React.createElement(icons[active],{size:34,strokeWidth:1.4})}</div><span className="process-floating-label label-a">V-GRAPH / STUDIO</span><span className="process-floating-label label-b">MAKE IT MATTER</span></div>
       <h3 className="font-display text-3xl md:text-4xl font-semibold mt-6">{process[active].title}<span className="text-orange-300">.</span></h3>
       <p className="mt-3 max-w-lg text-neutral-400 leading-relaxed">{process[active].desc}</p>
       <div className="mt-8 flex items-center justify-between"><span className="text-xs text-neutral-500">Step {active+1} of {process.length}</span><div className="flex gap-2"><button disabled={active===0} onClick={()=>setActive(v=>v-1)} className="process-nav-button" aria-label="Previous step">←</button><button disabled={active===process.length-1} onClick={()=>setActive(v=>v+1)} className="process-nav-button" aria-label="Next step"><ArrowUpRight size={16}/></button></div></div>
      </motion.div></AnimatePresence>
    </div>
   </div>
  </div>
 </section>
};
export default Process;
