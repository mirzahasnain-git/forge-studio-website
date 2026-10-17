import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { Code2, MessageCircle, Sparkles, ArrowUpRight, ShieldCheck } from "lucide-react";

const expectations=[
 {icon:Code2,no:"01",title:"Built around your goal",desc:"We start with the business problem instead of forcing a one-size-fits-all package."},
 {icon:MessageCircle,no:"02",title:"Direct communication",desc:"Clear updates, useful feedback loops, and a process you can actually follow."},
 {icon:Sparkles,no:"03",title:"Design meets technology",desc:"Your website and content can share one visual direction and a consistent brand voice."}
];
const SocialProof=()=> <section className="relative overflow-hidden bg-[#0b0a09] py-24 md:py-32">
 <div className="why-grid-overlay"/>
 <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
  <Reveal><div className="grid lg:grid-cols-[1fr_.7fr] gap-8 items-end mb-14"><div><span className="section-kicker"><ShieldCheck size={13}/> THE V-GRAPH DIFFERENCE</span><h2 className="font-display mt-5 text-4xl md:text-6xl font-bold tracking-tight">Small by design.<br/><span className="hero-gradient-text">Intentional by default.</span></h2></div><p className="text-neutral-400 leading-relaxed md:text-lg">A focused studio built around thoughtful execution—not inflated claims or unnecessary layers.</p></div></Reveal>
  <div className="grid md:grid-cols-3 gap-4">{expectations.map((item,i)=>{const Icon=item.icon;return <Reveal key={item.no} delay={i*.1}><motion.article whileHover={{y:-6}} className="why-card h-full"><div className="flex items-center justify-between"><span className="why-number">{item.no}</span><span className="why-icon"><Icon size={19}/></span></div><h3 className="font-display mt-9 text-xl md:text-2xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-neutral-400">{item.desc}</p><div className="why-card-line"/></motion.article></Reveal>})}</div>
 </div>
</section>;
export default SocialProof;
