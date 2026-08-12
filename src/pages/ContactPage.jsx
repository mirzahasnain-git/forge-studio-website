import React, { useState } from "react";
import Reveal from "../components/Reveal";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "Both",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // Save to localStorage (frontend-only mock)
    const leads = JSON.parse(localStorage.getItem("forge_leads") || "[]");
    leads.push({ ...form, ts: new Date().toISOString() });
    localStorage.setItem("forge_leads", JSON.stringify(leads));
    setSent(true);
    toast({
      title: "Brief received",
      description: "We\u2019ll reply within one business day.",
    });
    setForm({ name: "", email: "", company: "", service: "Both", message: "" });
  };

  return (
    <section className="relative bg-black bg-grid noise min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <Reveal>
            <span className="tag-pill px-3 py-1 rounded-full text-xs font-medium">
              Contact
            </span>
            <h1 className="font-display mt-6 text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Let’s <span className="hero-gradient-text">forge</span> something.
            </h1>
            <p className="mt-5 text-neutral-400 text-lg">
              Tell us what’s broken in your funnel. We’ll reply within one
              business day with next steps.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { Icon: Mail, label: "Email", value: "hello@forgestudio.io" },
                { Icon: Phone, label: "Phone", value: "+1 (415) 555-0199" },
                {
                  Icon: MapPin,
                  label: "Studio",
                  value: "Remote — Bengaluru &amp; NYC",
                },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-lime-300/10 border border-lime-300/25 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-lime" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500">{label}</div>
                    <div
                      className="text-neutral-200 font-medium"
                      dangerouslySetInnerHTML={{ __html: value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="card-dark rounded-2xl p-8 md:p-10 glow-lime">
              {sent ? (
                <div className="flex flex-col items-center text-center py-16">
                  <div className="w-14 h-14 rounded-full bg-lime-300/15 border border-lime-300/50 flex items-center justify-center">
                    <Check className="text-lime" size={22} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mt-5">
                    Brief received.
                  </h3>
                  <p className="text-neutral-400 mt-2 max-w-sm">
                    We’ll be in your inbox within one business day. In the
                    meantime, check the recent work.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="btn-outline-soft mt-6 px-5 py-2.5 rounded-full text-sm"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-neutral-400">
                        Your name
                      </label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="mt-1.5 w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-lime-300/60 transition-colors"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-neutral-400">
                        Company
                      </label>
                      <input
                        value={form.company}
                        onChange={(e) =>
                          setForm({ ...form, company: e.target.value })
                        }
                        className="mt-1.5 w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-lime-300/60 transition-colors"
                        placeholder="Northwind Inc"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-neutral-400">Email</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="mt-1.5 w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-lime-300/60 transition-colors"
                      placeholder="jane@northwind.com"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-neutral-400">
                      What do you need?
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) =>
                        setForm({ ...form, service: e.target.value })
                      }
                      className="mt-1.5 w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-lime-300/60 transition-colors"
                    >
                      <option>Web Engineering</option>
                      <option>Long-form YouTube</option>
                      <option>Shorts &amp; Reels</option>
                      <option>Video Ads</option>
                      <option>Both</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-neutral-400">Brief</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="mt-1.5 w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-lime-300/60 transition-colors resize-none"
                      placeholder="Tell us what\u2019s broken in your funnel…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary-glow w-full rounded-full px-6 py-3.5 text-sm font-semibold inline-flex items-center justify-center gap-2"
                  >
                    Send Brief <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
