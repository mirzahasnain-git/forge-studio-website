import React from "react";
import Reveal from "./Reveal";
import { testimonials, brandLogos } from "../mock";
import { Quote } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="relative bg-black py-24 md:py-15">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="tag-pill px-3 py-1 rounded-full text-xs font-medium">
              Trusted by
            </span>
            <h2 className="font-display mt-5 text-4xl md:text-5xl font-bold tracking-tight">
              Founders who stopped{" "}
              <span className="hero-gradient-text">stitching freelancers</span>.
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {testimonials.map((t) => (
            <Reveal key={t.name}>
              <div className="card-dark rounded-2xl p-7 h-full">
                <Quote size={22} className="text-lime" />
                <p className="mt-5 text-neutral-200 leading-relaxed text-[15px]">
                  “{t.quote}”
                </p>
                <div className="mt-6 border-t border-white/5 pt-4">
                  <div className="font-semibold text-sm text-neutral-100">
                    {t.name}
                  </div>
                  <div className="text-xs text-neutral-500">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
            {brandLogos.map((b) => (
              <div
                key={b}
                className="bg-black/60 py-8 flex items-center justify-center hover:bg-black/40 transition-colors"
              >
                <span className="font-display text-xl text-neutral-500 hover:text-lime transition-colors">
                  {b}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SocialProof;
