import React from "react";
import Reveal from "./Reveal";
import { process } from "../mock";

const Process = () => (
  <section className="relative bg-black py-24 md:py-28 border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6 md:px-10">
      <Reveal>
        <div className="max-w-2xl mb-14">
          <span className="tag-pill px-3 py-1 rounded-full text-xs font-medium">How we work</span>
          <h2 className="font-display mt-5 text-4xl md:text-6xl font-bold tracking-tight">
            From idea to <span className="hero-gradient-text">launch.</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-lg">
            A straightforward process with clear communication and no unnecessary layers.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-5 gap-4">
        {process.map((p, i) => (
          <Reveal key={p.step} delay={i * 0.08}>
            <div className="card-dark rounded-2xl p-6 h-full">
              <div className="font-display text-4xl font-bold text-lime/70">{p.step}</div>
              <h3 className="font-display text-xl font-semibold mt-3">{p.title}</h3>
              <p className="mt-2 text-neutral-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
