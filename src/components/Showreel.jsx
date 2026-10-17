import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { Play, ArrowUpRight, Clapperboard, Radio, ExternalLink } from "lucide-react";
import { showreels } from "../mock";

const getVideoId = (embed) => embed.split("/embed/")[1]?.split(/[?&]/)[0] || "";
const ShowreelCard = ({ item, index, active, onPlay }) => {
  const videoId = getVideoId(item.embed);
  const thumbnail = videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : "";
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <motion.article whileHover={{ y: -5 }} className="showreel-card group h-full">
        <div className="showreel-video-frame">
          {active ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
              title={item.title}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button type="button" onClick={() => onPlay(item.id)} className="showreel-thumbnail" aria-label={`Play video: ${item.title}`}>
              <img src={thumbnail} alt="" loading="lazy" decoding="async" />
              <span className="showreel-thumbnail-shade" />
              <span className="showreel-play-button"><Play size={22} fill="currentColor" /></span>
              <span className="showreel-frame-label">
                <span><Radio size={11} /> SAMPLE / 0{index + 1}</span>
                <span>{item.type}</span>
              </span>
              <span className="showreel-corner-mark" aria-hidden="true">V<span>.</span></span>
            </button>
          )}
        </div>
        <div className="showreel-card-info">
          <div className="min-w-0">
            <span className="showreel-type">{item.type}</span>
            <h3 className="font-display mt-2 text-lg md:text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-xs leading-5 text-neutral-500">Selected work · V-Graph Studio</p>
          </div>
          <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noreferrer" className="showreel-arrow shrink-0" aria-label={`Open ${item.title} on YouTube`}><ExternalLink size={16} /></a>
        </div>
      </motion.article>
    </Reveal>
  );
};

const Showreel = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="showreel-halo" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="section-kicker"><Clapperboard size={13} /> SELECTED MOTION / 01—02</span>
              <h2 className="font-display mt-5 text-4xl md:text-6xl font-bold tracking-tight">Stories in <span className="hero-gradient-text">motion.</span></h2>
              <p className="mt-4 max-w-xl text-neutral-400 md:text-lg">A few frames from the creative side of V-Graph. Choose a sample to play it without leaving the page.</p>
            </div>
            <Link to="/portfolio" className="service-text-link">Explore all projects <ArrowUpRight size={15} /></Link>
          </div>
        </Reveal>
        <div className="showreel-grid">
          {showreels.map((item, index) => (
            <ShowreelCard key={item.id} item={item} index={index} active={activeVideo === item.id} onPlay={setActiveVideo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showreel;
