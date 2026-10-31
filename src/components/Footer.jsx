import React from "react";
import { Link } from "react-router-dom";
import { Flame, Mail, Instagram, Facebook, Linkedin, MessageCircle, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "vgraph.co@gmail.com";

  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl border border-orange-400/50 flex items-center justify-center">
                <Flame size={17} className="text-lime" />
              </div>
              <span className="font-display text-xl font-semibold text-lime">V-Graph <span className="text-white">Studio</span></span>
            </Link>
            <p className="mt-4 text-neutral-400 max-w-md text-sm leading-relaxed">
              Thoughtful websites and scroll-stopping video content for businesses, creators, and ambitious brands.
            </p>
            <a href={`mailto:${contactEmail}`} className="inline-flex items-center gap-2 mt-5 text-sm text-neutral-300 hover:text-lime transition-colors">
              <Mail size={14} className="text-lime" /> {contactEmail}
            </a>
            <a href="https://wa.me/919555716875" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-3 text-sm text-neutral-300 hover:text-lime transition-colors">
              <MessageCircle size={14} className="text-lime" /> +91 95557 16875 <ArrowUpRight size={13}/>
            </a>
            <div className="mt-6 flex items-center gap-3" aria-label="V-Graph Studio social media links">
              {[
                { label: "Instagram", href: "https://www.instagram.com/vgraphstudio?exln=ZHdldzBqNXoyOHhp", Icon: Instagram },
                { label: "Facebook", href: "https://www.facebook.com/share/1A45mEuro4/", Icon: Facebook },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/v-graph-studio-230489448", Icon: Linkedin },
              ].map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/60 hover:bg-orange-400/10 hover:text-orange-300">
                  <Icon size={17}/>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-200 mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li><Link to="/services" className="hover:text-lime transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-lime transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-lime transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-lime transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="divider-soft my-10" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} V-Graph Studio. All rights reserved.</p>
          <p>Where Code Meets Creativity.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
