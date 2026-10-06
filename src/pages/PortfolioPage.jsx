import React, { useState } from "react";
import Reveal from "../components/Reveal";
import { portfolio } from "../mock";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import CTASection from "../components/CTASection";

const categories = ["All", "Web Development", "Web Applications", "YouTube Editing", "Podcast Editing", "Shorts & Reels", "Video Ads"];

const PortfolioPage = () => {
  const [filter, setFilter] = useState("All");
  const items = filter === "All" ? portfolio : portfolio.filter((p) => p.category === filter);

  return (
    <>
      <section className="relative bg-black bg-grid noise">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-20">
          <Reveal>
            <span className="tag-pill px-3 py-1 rounded-full text-xs font-medium">Portfolio</span>
            <h1 className="font-display mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              Work we’ve <span className="hero-gradient-text">built.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-neutral-400 text-lg">
              Real projects first. More client work will be added as Forge grows.
            </p>
          </Reveal>

          <div className="mt-12 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button key={c} onClick={() => setFilter(c)} className={`px-4 py-2 rounded-full text-xs font-medium transition-colors border ${filter === c ? "bg-lime-300/15 border-lime-300/50 text-lime" : "border-white/10 text-neutral-400 hover:border-white/30 hover:text-neutral-200"}`}>
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((p) => (
              <Reveal key={p.id}>
                <article className="card-dark rounded-2xl overflow-hidden group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={p.cover} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                    <span className="absolute top-4 left-4 tag-pill text-[11px] px-2.5 py-1 rounded-md font-medium">{p.category}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                      <ArrowUpRight size={18} className="text-neutral-500 group-hover:text-lime transition-colors" />
                    </div>
                    <p className="mt-2 text-sm text-neutral-400">{p.desc}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-lime-300/30 px-3 py-1.5 text-xs font-medium text-lime hover:bg-lime-300/10"><ExternalLink size={13} /> {p.linkLabel || "Live Demo"}</a>}
                      {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:border-white/30"><Github size={13} /> GitHub</a>}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
};

export default PortfolioPage;
