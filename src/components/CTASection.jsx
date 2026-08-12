import React from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative bg-black py-24 md:py-15">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="relative card-dark rounded-3xl p-10 md:p-16 text-center overflow-hidden glow-lime">
            <div
              className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-25"
              style={{
                background:
                  "radial-gradient(circle, rgba(182,255,110,0.4) 0%, transparent 70%)",
              }}
            />
            <h2 className="relative font-display text-4xl md:text-6xl font-bold tracking-tight">
              Ready to <span className="hero-gradient-text">forge</span> your
              funnel?
            </h2>
            <p className="relative mt-5 text-neutral-400 max-w-xl mx-auto">
              One brief. One team. A site that converts and a content engine
              that compounds.
            </p>
            <div className="relative mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="btn-primary-glow rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center justify-center gap-2"
              >
                Book a Discovery Call <ArrowRight size={16} />
              </Link>
              <Link
                to="/portfolio"
                className="btn-outline-soft rounded-full px-7 py-3.5 text-sm font-semibold"
              >
                See Recent Work
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTASection;
