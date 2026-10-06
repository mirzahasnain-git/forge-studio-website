import React from "react";
import Reveal from "./Reveal";
import { Play } from "lucide-react";
import { showreels } from "../mock";

const Showreel = () => {
  return (
    <section className="relative bg-black py-24 md:py-15">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="tag-pill px-3 py-1 rounded-full text-xs font-medium">
              Showreel
            </span>
            <h2 className="font-display mt-5 text-4xl md:text-6xl font-bold tracking-tight">
              Recent <span className="hero-gradient-text">cuts</span>.
            </h2>
            <p className="mt-4 text-neutral-400">
              Drop-in players — your YouTube and Reels embed here.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {showreels.map((r) => (
            <Reveal key={r.id}>
              <div className="card-dark rounded-2xl overflow-hidden">
                <div className="relative aspect-video bg-black flex items-center justify-center">
                  {r.embed ? (
                    <iframe
                      src={r.embed}
                      title={r.title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="text-center px-6">
                      <Play size={28} className="mx-auto text-lime mb-3" />
                      <p className="text-sm text-neutral-400">Video link coming soon</p>
                    </div>
                  )}
                </div>
                <div className="p-5 flex items-center justify-between gap-4">
                  <div>
                    <span className="tag-pill px-2.5 py-1 rounded-md text-[11px] font-medium">{r.type}</span>
                    <h4 className="font-display text-lg font-semibold mt-2">
                      {r.title}
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs text-lime">
                    <Play size={12} /> Watch
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showreel;
