import React, { useState } from "react";
import Reveal from "../components/Reveal";
import { portfolio } from "../mock";
import { ArrowUpRight, Github, ExternalLink, Play, X } from "lucide-react";
import CTASection from "../components/CTASection";

const categories = ["All", "Web Development", "Web Applications", "Podcast Editing", "Business Promotions", "Product Advertisements"];

function VideoFrame({ item, onClose }) {
  const portrait = item.aspect === "portrait";
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={item.title} onClick={onClose}>
      <div className={`relative w-full ${portrait ? "max-w-sm" : "max-w-5xl"}`} onClick={(event) => event.stopPropagation()}>
        <button onClick={onClose} aria-label="Close video" className="absolute -top-11 right-0 rounded-full border border-white/20 bg-black/70 p-2 text-white hover:text-lime"><X size={20} /></button>
        <div className={`relative overflow-hidden rounded-2xl bg-black ${portrait ? "aspect-[9/16]" : "aspect-video"}`}>
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${item.videoId}?autoplay=1&rel=0`}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <p className="mt-3 text-sm text-neutral-300">{item.title}</p>
      </div>
    </div>
  );
}

const PortfolioPage = () => {
  const [filter, setFilter] = useState("All");
  const [activeVideo, setActiveVideo] = useState(null);
  const items = filter === "All" ? portfolio : portfolio.filter((p) => p.category === filter);

  return (
    <>
      <section className="relative bg-black bg-grid noise">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-20">
          <Reveal>
            <span className="tag-pill px-3 py-1 rounded-full text-xs font-medium">Selected work · V-Graph Studio</span>
            <h1 className="font-display mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              Ideas made <span className="hero-gradient-text">visible.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-neutral-400 text-lg">
              Websites, product ads, podcast edits, and cinematic promotions—selected work across code and content.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-2" aria-label="Filter portfolio projects">
            {categories.map((c) => (
              <button key={c} onClick={() => setFilter(c)} aria-pressed={filter === c} className={`px-4 py-2 rounded-full text-xs font-medium transition-colors border ${filter === c ? "bg-orange-400/15 border-orange-400/50 text-lime" : "border-white/10 text-neutral-400 hover:border-orange-400/40 hover:text-neutral-200"}`}>
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
            {items.map((p) => {
              const isVideo = Boolean(p.videoId);
              const portrait = p.aspect === "portrait";
              return (
                <Reveal key={p.id}>
                  <article className="card-dark rounded-2xl overflow-hidden group h-full">
                    <button
                      type="button"
                      onClick={() => isVideo && setActiveVideo(p)}
                      className={`relative block w-full overflow-hidden bg-neutral-950 text-left ${portrait ? "aspect-[9/13] sm:aspect-[9/14]" : "aspect-[16/10]"} ${isVideo ? "cursor-pointer" : "cursor-default"}`}
                      aria-label={isVideo ? `Play ${p.title}` : p.title}
                      disabled={!isVideo}
                    >
                      <img src={p.cover} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                      {isVideo && <span className="absolute inset-0 flex items-center justify-center"><span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/35 bg-black/55 text-white backdrop-blur-sm transition-transform group-hover:scale-110"><Play size={22} fill="currentColor" /></span></span>}
                      <span className="absolute left-4 top-4 tag-pill rounded-md px-2.5 py-1 text-[11px] font-medium">{p.category}</span>
                      {isVideo && <span className="absolute bottom-4 right-4 rounded-full bg-black/70 px-3 py-1 text-xs text-white/90">Play sample ↗</span>}
                    </button>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                        <ArrowUpRight size={18} className="shrink-0 text-neutral-500 transition-colors group-hover:text-lime" />
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-400">{p.desc}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-orange-400/30 px-3 py-1.5 text-xs font-medium text-lime hover:bg-orange-400/10"><ExternalLink size={13} /> Live Demo</a>}
                        {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:border-white/30"><Github size={13} /> GitHub</a>}
                        {isVideo && <button type="button" onClick={() => setActiveVideo(p)} className="inline-flex items-center gap-1.5 rounded-full border border-orange-400/30 px-3 py-1.5 text-xs font-medium text-lime hover:bg-orange-400/10"><Play size={13} /> Watch video</button>}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <CTASection />
      {activeVideo && <VideoFrame item={activeVideo} onClose={() => setActiveVideo(null)} />}
    </>
  );
};

export default PortfolioPage;
