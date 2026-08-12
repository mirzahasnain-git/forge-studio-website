import React from "react";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import SocialProof from "../components/SocialProof";
import { Target, Layers, Rocket } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Founder-direct",
    desc: "You talk to the people shipping the work. No account managers.",
  },
  {
    icon: Layers,
    title: "Two crafts, one team",
    desc: "Engineers and editors at the same standup. Funnel goals shared.",
  },
  {
    icon: Rocket,
    title: "Ship weekly",
    desc: "We move on a sprint cadence. Real outputs, every Friday.",
  },
];

const AboutPage = () => {
  return (
    <>
      <section className="relative bg-black bg-grid noise overflow-hidden">
        <div
          className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(182,255,110,0.35) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-20">
          <Reveal>
            <span className="tag-pill px-3 py-1 rounded-full text-xs font-medium">
              About
            </span>
            <h1 className="font-display mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl">
              A studio for founders who want{" "}
              <span className="hero-gradient-text">one bill, one team</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-neutral-400 text-lg leading-relaxed">
              Forge Studio was built by a senior engineer and a long-form editor
              who got tired of watching B2B founders glue together five
              freelancers to ship one funnel. So we merged the crafts.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-black py-24 md:py-15 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="card-dark rounded-2xl p-7 h-full">
                  <div className="w-11 h-11 rounded-xl bg-lime-300/10 border border-lime-300/30 flex items-center justify-center">
                    <v.icon size={18} className="text-lime" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mt-5">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-400">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                  Why we built <span className="hero-gradient-text">Forge</span>
                  .
                </h2>
                <p className="mt-5 text-neutral-400 leading-relaxed">
                  Most founders pay an agency for a site that doesn’t convert,
                  then pay a separate editor for videos no one watches. We do
                  both — with the same brief, the same brand voice, and the same
                  conversion goal.
                </p>
                <p className="mt-4 text-neutral-400 leading-relaxed">
                  The site and the content compound each other. That’s the whole
                  pitch.
                </p>
              </div>
              <div className="card-dark rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { v: "6 yrs", l: "Avg. team experience" },
                    { v: "120+", l: "Sites shipped" },
                    { v: "8M+", l: "Views generated" },
                    { v: "14 days", l: "Avg. site MVP" },
                  ].map((s) => (
                    <div key={s.l}>
                      <div className="font-display text-3xl font-semibold text-lime">
                        {s.v}
                      </div>
                      <div className="text-xs text-neutral-500 mt-1">{s.l}</div>
                    </div>
                  ))}
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
};

export default AboutPage;
