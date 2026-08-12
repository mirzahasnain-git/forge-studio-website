import React from "react";
import Services from "../components/Services";
import Process from "../components/Process";
import CTASection from "../components/CTASection";
import Reveal from "../components/Reveal";
import Marquee from "../components/Marquee";

const ServicesPage = () => {
  return (
    <>
      <section className="relative bg-black bg-grid noise overflow-hidden">
        <div
          className="pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(182,255,110,0.35) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
          <Reveal>
            <span className="tag-pill px-3 py-1 rounded-full text-xs font-medium">
              Services
            </span>
            <h1 className="font-display mt-6 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight max-w-4xl">
              Engineering &amp;{" "}
              <span className="hero-gradient-text">video</span>, under one roof.
            </h1>
            <p className="mt-6 max-w-2xl text-neutral-400 text-lg">
              Pick a pillar — or run both. Founders usually start with the site,
              then turn on the traffic engine 30 days later.
            </p>
          </Reveal>
        </div>
      </section>
      <Marquee />
      <Services compact />
      <Process />
      <CTASection />
    </>
  );
};

export default ServicesPage;
