import React from "react";
import Reveal from "./Reveal";
import { process } from "../mock";

const Process = () => {
  return (
    <section className="relative bg-black py-24 md:py-15 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <span className="tag-pill px-3 py-1 rounded-full text-xs font-medium">
              How we work
            </span>
            <h2 className="font-display mt-5 text-4xl md:text-6xl font-bold tracking-tight">
              Audit. Build. <span className="hero-gradient-text">Scale.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.1}>
              <div className="card-dark rounded-2xl p-7 h-full">
                <div className="font-display text-5xl font-bold text-lime/70">
                  {p.step}
                </div>
                <h3 className="font-display text-2xl font-semibold mt-3">
                  {p.title}
                </h3>
                <p className="mt-2 text-neutral-400 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
