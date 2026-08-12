import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Code2, Clapperboard } from "lucide-react";
import Reveal from "./Reveal";
import { itServices, videoServices } from "../mock";

const Pillar = ({ icon: Icon, label, color }) => (
  <div
    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full tag-pill text-xs font-medium"
    style={{ color }}
  >
    <Icon size={13} />
    {label}
  </div>
);

const ServiceCard = ({ service, big = false }) => (
  <Reveal>
    <div
      className={`card-dark rounded-2xl p-6 md:p-8 h-full flex flex-col ${big ? "md:p-10" : ""}`}
    >
      <div className="flex items-start justify-between">
        <span className="inline-flex px-2.5 py-1 rounded-md tag-pill text-[11px] font-medium">
          {service.tag}
        </span>
        <ArrowUpRight size={18} className="text-neutral-500" />
      </div>
      <h3
        className={`font-display mt-6 font-semibold text-neutral-100 ${big ? "text-3xl md:text-4xl" : "text-2xl"}`}
      >
        {service.title}
      </h3>
      <p className="mt-3 text-neutral-400 text-sm md:text-base leading-relaxed">
        {service.desc}
      </p>
      <ul className="mt-6 space-y-2.5">
        {service.points.map((p) => (
          <li
            key={p}
            className="flex items-center gap-2 text-sm text-neutral-300"
          >
            <Check size={14} className="text-lime shrink-0" /> {p}
          </li>
        ))}
      </ul>
    </div>
  </Reveal>
);

const Services = ({ compact = false }) => {
  return (
    <section id="services" className="relative bg-black py-24 md:py-15">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {!compact && (
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="tag-pill px-3 py-1 rounded-full text-xs font-medium">
                Two pillars
              </span>
              <h2 className="font-display mt-5 text-4xl md:text-6xl font-bold tracking-tight">
                One team,{" "}
                <span className="hero-gradient-text">two engines</span>.
              </h2>
              <p className="mt-4 text-neutral-400 text-base md:text-lg">
                The site that converts. The video that fills it. No more
                handoffs.
              </p>
            </div>
          </Reveal>
        )}

        {/* IT Pillar */}
        <div className="mb-16">
          <Reveal>
            <div className="flex items-center justify-between mb-8">
              <Pillar
                icon={Code2}
                label="Pillar 01 — IT Infrastructure"
                color="#b6ff6e"
              />
              <Link
                to="/services"
                className="hidden md:inline-flex text-sm text-neutral-400 hover:text-lime transition-colors"
              >
                View all →
              </Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {itServices.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>

        {/* Video Pillar */}
        <div>
          <Reveal>
            <div className="flex items-center justify-between mb-8">
              <Pillar
                icon={Clapperboard}
                label="Pillar 02 — The Traffic Engine"
                color="#b6ff6e"
              />
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {videoServices.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
