import React from "react";
import { marqueeWords } from "../mock";
import { ArrowUpRight, Sparkles } from "lucide-react";

const Marquee = () => {
  const items = [...marqueeWords, ...marqueeWords];
  return (
    <section className="services-marquee relative overflow-hidden" aria-label="V-Graph services and capabilities">
      <div className="services-marquee-topline">
        <span className="services-marquee-kicker"><Sparkles size={12} /> WHAT WE BRING TO THE TABLE</span>
        <span className="services-marquee-note">DIGITAL <i /> CREATIVE <i /> BUILT TO MOVE</span>
      </div>
      <div className="services-marquee-stage">
        <div className="services-marquee-glow" aria-hidden="true" />
        <div className="services-marquee-track flex whitespace-nowrap">
          {items.map((word, i) => (
            <div key={i} className="services-marquee-item flex items-center shrink-0">
              <span className="services-marquee-word">{word}</span>
              <span className="services-marquee-spark" aria-hidden="true"><ArrowUpRight size={15} strokeWidth={2.2} /></span>
            </div>
          ))}
        </div>
        <span className="services-marquee-edge services-marquee-edge-left" aria-hidden="true" />
        <span className="services-marquee-edge services-marquee-edge-right" aria-hidden="true" />
      </div>
      <div className="services-marquee-bottomline"><span>DESIGN WITH INTENT</span><span className="services-marquee-progress"><i /></span><span>DETAIL IN EVERY FRAME</span></div>
    </section>
  );
};

export default Marquee;
