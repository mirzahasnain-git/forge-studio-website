import React from "react";
import Reveal from "./Reveal";
import { Play } from "lucide-react";
import { showreels } from "../mock";

const Showreel = () => {
  return (
    <section className="relative bg-black py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="tag-pill px-3 py-1 rounded-full text-xs font-medium">Video work</span>
            <h2 className="font-display mt-5 text-4xl md:text-6xl font-bold tracking-tight">
              Stories in <span className="hero-gradient-text">motion.</span>
            </h2>
            <p className="mt-4 text-neutral-400">A first look at our podcast and brand-promotion edits.</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {showreels.map((r) => (
            <Reveal key={r.id}>
              <article className="card-dark rounded-2xl overflow-hidden">
                <div className="relative aspect-video bg-black">
                  <iframe
                    src={r.embed}
                    title={r.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="p-5 flex items-center justify-between gap-4">
                  <div>
                    <span className="tag-pill px-2.5 py-1 rounded-md text-[11px] font-medium">{r.type}</span>
                    <h4 className="font-display text-lg font-semibold mt-2">{r.title}</h4>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs text-lime"><Play size={12} /> Watch</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showreel;
