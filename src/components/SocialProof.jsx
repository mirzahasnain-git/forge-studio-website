import React from "react";
import Reveal from "./Reveal";
import { Code2, MessageCircle, Sparkles } from "lucide-react";

const expectations = [
  { icon: Code2, title: "Built around your goal", desc: "We start with the business problem instead of forcing a one-size-fits-all package." },
  { icon: MessageCircle, title: "Direct communication", desc: "Clear updates, quick feedback loops, and no unnecessary account-management layers." },
  { icon: Sparkles, title: "Design + technology", desc: "Your website and content can share the same visual direction and brand voice." },
];

const SocialProof = () => (
  <section className="relative bg-black py-24 md:py-28">
    <div className="max-w-7xl mx-auto px-6 md:px-10">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="tag-pill px-3 py-1 rounded-full text-xs font-medium">Why Forge</span>
          <h2 className="font-display mt-5 text-4xl md:text-5xl font-bold tracking-tight">A lean studio, <span className="hero-gradient-text">focused on the work.</span></h2>
          <p className="mt-4 text-neutral-400 text-base md:text-lg">No inflated team structure. No made-up case studies. Just clear scope and quality execution.</p>
        </div>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-5">
        {expectations.map((item, i) => {
          const Icon = item.icon;
          return <Reveal key={item.title} delay={i * 0.1}><div className="card-dark rounded-2xl p-7 h-full"><div className="w-11 h-11 rounded-xl bg-lime-300/10 border border-lime-300/30 flex items-center justify-center"><Icon size={18} className="text-lime" /></div><h3 className="font-display text-xl font-semibold mt-5">{item.title}</h3><p className="mt-2 text-sm text-neutral-400 leading-relaxed">{item.desc}</p></div></Reveal>;
        })}
      </div>
    </div>
  </section>
);

export default SocialProof;
