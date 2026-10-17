import React from "react";
import { motion } from "framer-motion";
import { Code2, Clapperboard, ArrowDown, Sparkles } from "lucide-react";
import Services from "../components/Services";
import Process from "../components/Process";
import CTASection from "../components/CTASection";
import Reveal from "../components/Reveal";
import Marquee from "../components/Marquee";

const ServicesPage=()=> <><section className="page-hero relative overflow-hidden bg-grid noise"><div className="page-hero-glow"/><div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32 relative z-10"><Reveal><span className="section-kicker"><Sparkles size={13}/> SERVICES / CAPABILITIES</span><h1 className="font-display mt-7 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[.98]">Build the platform.<br/><span className="hero-gradient-text">Create the pull.</span></h1><p className="mt-7 max-w-2xl text-neutral-400 text-lg md:text-xl leading-relaxed">Web development that makes your business easier to trust. Video content that makes people stop scrolling. Choose one, or connect both.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#digital" className="btn-primary-glow rounded-full px-5 py-3 text-sm font-semibold inline-flex items-center gap-2"><Code2 size={15}/> Digital services <ArrowDown size={14}/></a><a href="#creative" className="btn-outline-soft rounded-full px-5 py-3 text-sm font-semibold inline-flex items-center gap-2"><Clapperboard size={15}/> Creative services <ArrowDown size={14}/></a></div></Reveal><div className="page-hero-index">CAPABILITIES / 02 PILLARS</div></div></section><Marquee/><div id="digital" className="scroll-mt-20"><Services/></div><section id="creative" className="creative-divider scroll-mt-20"><div className="max-w-7xl mx-auto px-6 md:px-10 py-8"><span className="section-kicker"><Clapperboard size={13}/> ONE STUDIO, MORE POSSIBILITIES</span><p className="font-display mt-3 text-2xl md:text-4xl font-semibold">Your digital presence should feel <span className="hero-gradient-text">connected.</span></p></div></section><Process/><CTASection/></>;
export default ServicesPage;
