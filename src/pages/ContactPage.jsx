import React, { useState } from "react";
import Reveal from "../components/Reveal";
import { Mail, Send, Check, ArrowUpRight } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/myekebpn";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "Web Development", message: "" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name, email: form.email, company: form.company || "Not provided",
          service: form.service, message: form.message,
          subject: `V-Graph Studio project enquiry from ${form.name}`,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.errors?.[0]?.message || "Something went wrong.");
      setSent(true);
      setForm({ name: "", email: "", company: "", service: "Web Development", message: "" });
    } catch (error) {
      toast({ title: "Submission failed", description: error.message || "Please try again or contact us by email." });
    } finally { setSubmitting(false); }
  };

  return (
    <section className="relative bg-black bg-grid noise min-h-[80vh] overflow-hidden">
      <div className="hero-ambient hero-ambient-one" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <Reveal>
            <span className="tag-pill px-3 py-1 rounded-full text-xs font-medium">Let’s talk</span>
            <h1 className="font-display mt-6 text-5xl md:text-6xl font-bold tracking-tight leading-[1.02]">
              Have a good idea?<br /><span className="hero-gradient-text">Let’s make it real.</span>
            </h1>
            <p className="mt-5 text-neutral-400 text-lg leading-relaxed">
              Tell us what you’re building or creating. We’ll help shape the next step—from a sharp digital experience to content that gets noticed.
            </p>
            <div className="mt-10 space-y-5">
              <a href="mailto:mirzahasnainalam@gmail.com" className="contact-email-link flex items-center gap-4 group">
                <span className="w-12 h-12 rounded-2xl bg-orange-400/10 border border-orange-400/25 flex items-center justify-center shrink-0 text-orange-300"><Mail size={18} /></span>
                <span><span className="block text-xs text-neutral-500">Email the studio</span><span className="block mt-1 text-neutral-100 font-medium group-hover:text-orange-300 transition-colors">mirzahasnainalam@gmail.com</span></span>
                <ArrowUpRight size={16} className="ml-2 text-neutral-600 group-hover:text-orange-300 transition-colors" />
              </a>
              <p className="text-sm text-neutral-500 max-w-sm">Share a little about your goals, timeline, and the kind of result you have in mind. We’ll take it from there.</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {["Websites & apps", "Brand videos", "Short-form content"].map((item) => <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-neutral-400">{item}</span>)}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="contact-panel card-dark rounded-3xl p-6 md:p-9">
              {sent ? (
                <div className="flex flex-col items-center text-center py-16">
                  <div className="w-14 h-14 rounded-full bg-orange-400/10 border border-orange-400/40 flex items-center justify-center"><Check className="text-orange-300" size={22} /></div>
                  <h3 className="font-display text-2xl font-semibold mt-5">Brief received.</h3>
                  <p className="text-neutral-400 mt-2 max-w-sm">Thanks for reaching out. We’ll review your project and get back to you soon.</p>
                  <button type="button" onClick={() => setSent(false)} className="btn-outline-soft mt-6 px-5 py-2.5 rounded-full text-sm">Send another</button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="flex items-center justify-between gap-4 mb-2"><div><p className="text-sm font-semibold text-white">Start a project</p><p className="text-xs text-neutral-500 mt-1">Usually takes less than a minute</p></div><span className="text-[10px] uppercase tracking-[0.18em] text-orange-300">New brief ↗</span></div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><label htmlFor="contact-name" className="text-xs text-neutral-400">Your name</label><input id="contact-name" required type="text" name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="form-field mt-1.5 w-full" placeholder="Your name" autoComplete="name" /></div>
                    <div><label htmlFor="contact-company" className="text-xs text-neutral-400">Company <span className="text-neutral-600">(optional)</span></label><input id="contact-company" type="text" name="company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="form-field mt-1.5 w-full" placeholder="Your company" autoComplete="organization" /></div>
                  </div>
                  <div><label htmlFor="contact-email" className="text-xs text-neutral-400">Email address</label><input id="contact-email" required type="email" name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="form-field mt-1.5 w-full" placeholder="you@company.com" autoComplete="email" /></div>
                  <div><label htmlFor="contact-service" className="text-xs text-neutral-400">What can we help with?</label><select id="contact-service" name="service" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="form-field mt-1.5 w-full"><option>Web Development</option><option>Landing Page</option><option>Web Application</option><option>YouTube Editing</option><option>Shorts & Reels</option><option>Video Ads</option><option>Both</option></select></div>
                  <div><label htmlFor="contact-message" className="text-xs text-neutral-400">A little about your project</label><textarea id="contact-message" required rows={5} name="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="form-field mt-1.5 w-full resize-none" placeholder="Goals, timeline, features, references—anything that helps us understand your idea." /></div>
                  <button type="submit" disabled={submitting} className="btn-primary-glow w-full rounded-full px-6 py-3.5 text-sm font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">{submitting ? "Sending your brief…" : "Send project brief"}{!submitting && <Send size={14} />}</button>
                  <p className="text-center text-[11px] text-neutral-600">Your project details are used only to respond to your enquiry.</p>
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
