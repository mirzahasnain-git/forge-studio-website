import React from "react";
import { Link } from "react-router-dom";
import {
  Flame,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full border border-lime-300/40 flex items-center justify-center">
                <Flame size={16} className="text-lime" />
              </div>
              <span className="font-display text-xl font-semibold text-lime">
                Forge Studio
              </span>
            </Link>
            <p className="mt-4 text-neutral-400 max-w-md text-sm leading-relaxed">
              We build the site. We make the video. You stop juggling
              freelancers.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Linkedin, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-neutral-300 hover:border-lime-300/60 hover:text-lime transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-200 mb-4">
              Studio
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <Link
                  to="/services"
                  className="hover:text-lime transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="hover:text-lime transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-lime transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-lime transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-200 mb-4">
              Reach Us
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 text-lime" /> Remote — Noida
                &amp; Lucknow
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-lime" /> hello@forgestudio.io
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-lime" /> +91 95557 16875
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-soft my-10" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Forge Studio. All rights reserved.</p>
          <p>Where founders forge their funnel.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
