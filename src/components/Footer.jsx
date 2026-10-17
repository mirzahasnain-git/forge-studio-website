import React from "react";
import { Link } from "react-router-dom";
import { Flame, Mail } from "lucide-react";

const Footer = () => {
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "mirzahasnainalam@gmail.com";

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
