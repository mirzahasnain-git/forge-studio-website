import React from "react";
import { marqueeWords } from "../mock";

const Marquee = () => {
  const items = [...marqueeWords, ...marqueeWords];
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-black/40 py-6 md:py-8">
      <div className="flex marquee-track whitespace-nowrap gap-12">
        {items.map((w, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span className="font-display text-3xl md:text-5xl font-semibold text-neutral-200">
              {w}
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-lime-300/80" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
