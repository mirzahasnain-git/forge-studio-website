import React from "react";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import SocialProof from "../components/SocialProof";
import { Target, Layers, Rocket } from "lucide-react";

const values = [
  { icon: Target, title: "Goal-first", desc: "Every project starts with the outcome, audience, and scope—not a template." },
  { icon: Layers, title: "Two capabilities", desc: "Web development and video editing under one creative direction." },
  { icon: Rocket, title: "Built to ship", desc: "Focused execution, practical timelines, and a clear review process." },
];

const AboutPage = () => (
  <>
    <section className="relative bg-black bg-grid noise overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <Reveal>
          <span className="tag-pill px-3 py-1 rounded-full text-xs font-medium">About Forge</span>
          <h1 className="font-display mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl">One studio for <span className="hero-gradient-text">web + content.</span></h1>
          <p className="mt-6 max-w-2xl text-neutral-400 text-lg leading-relaxed">Forge Studio is a lean digital studio focused on building modern websites and creating video content for businesses and creators.</p>
        </Reveal>
      </div>
    </section>
    <section className="bg-black py-24 md:py-28 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-5">
          {values.map((v, i) => { const Icon=v.icon; return <Reveal key={v.title} delay={i*0.1}><div className="card-dark rounded-2xl p-7 h-full"><div className="w-11 h-11 rounded-xl bg-lime-300/10 border border-lime-300/30 flex items-center justify-center"><Icon size={18} className="text-lime" /></div><h3 className="font-display text-xl font-semibold mt-5">{v.title}</h3><p className="mt-2 text-sm text-neutral-400">{v.desc}</p></div></Reveal>; })}
        </div>
        <Reveal>
          <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Why <span className="hero-gradient-text">Forge</span>?</h2>
              <p className="mt-5 text-neutral-400 leading-relaxed">Businesses often need both a strong website and consistent visual content, but those jobs are usually split across different freelancers. Forge brings both capabilities under one studio so the brand stays consistent from the website to the social feed.</p>
              <p className="mt-4 text-neutral-400 leading-relaxed">We are intentionally keeping the studio lean while we build a portfolio of real client work. That means clear communication, focused execution, and no inflated claims.</p>
            </div>
            <div className="card-dark rounded-2xl p-8">
              <div className="font-display text-3xl font-semibold text-lime">Web + Video</div>
              <p className="text-sm text-neutral-400 mt-2">Two complementary services. One consistent creative direction.</p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                {["React|Modern web builds","Responsive|Mobile-first experience","YouTube|Long-form editing","Short-form|Reels & Shorts"].map(x=>{const [v,l]=x.split("|");return <div key={v}><div className="font-display text-2xl font-semibold text-neutral-100">{v}</div><div className="text-xs text-neutral-500 mt-1">{l}</div></div>})}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
    <SocialProof />
    <CTASection />
  </>
);

export default AboutPage;
