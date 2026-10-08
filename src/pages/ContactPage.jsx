import React, { useState } from "react";
import Reveal from "../components/Reveal";
import { Mail, Send, Check } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/myekebpn";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "Web Development",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company || "Not provided",
          service: form.service,
          message: form.message,
          subject: `Forge Studio project enquiry from ${form.name}`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.errors?.[0]?.message || "Something went wrong.");
      }

      setSent(true);
      setForm({
        name: "",
        email: "",
        company: "",
        service: "Web Development",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: error.message || "Please try again or contact us by email.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative bg-black bg-grid noise min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <Reveal>
            <span className="tag-pill px-3 py-1 rounded-full text-xs font-medium">Contact</span>
            <h1 className="font-display mt-6 text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Let’s <span className="hero-gradient-text">forge</span> something.
            </h1>
            <p className="mt-5 text-neutral-400 text-lg">
              Tell us what you are building, what you need help with, and what a successful project looks like.
            </p>
            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-lime-300/10 border border-lime-300/25 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-lime" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500">Email</div>
                  <div className="text-neutral-200 font-medium">mirzahasnainalam@gmail.com</div>
                </div>
              </div>
              <p className="text-sm text-neutral-500 max-w-sm">
                Submit the form and your project enquiry will be securely sent to the Forge Studio inbox.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="card-dark rounded-2xl p-8 md:p-10 glow-lime">
              {sent ? (
                <div className="flex flex-col items-center text-center py-16">
                  <div className="w-14 h-14 rounded-full bg-lime-300/15 border border-lime-300/50 flex items-center justify-center">
                    <Check className="text-lime" size={22} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mt-5">Project brief received!</h3>
                  <p className="text-neutral-400 mt-2 max-w-sm">
                    Thanks for reaching out. We’ll review your project and get back to you soon.
                  </p>
                  <button
                    type="button"
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
                      <label className="text-xs text-neutral-400">Your name</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="mt-1.5 w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-lime-300/60 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-neutral-400">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="mt-1.5 w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-lime-300/60 transition-colors"
                        placeholder="Company (optional)"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-neutral-400">Email</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-1.5 w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-lime-300/60 transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-neutral-400">What do you need?</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="mt-1.5 w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-lime-300/60 transition-colors"
                    >
                      <option>Web Development</option>
                      <option>Landing Page</option>
                      <option>Web Application</option>
                      <option>YouTube Editing</option>
                      <option>Shorts & Reels</option>
                      <option>Video Ads</option>
                      <option>Both</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-neutral-400">Project brief</label>
                    <textarea
                      required
                      rows={5}
                      name="message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="mt-1.5 w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-lime-300/60 transition-colors resize-none"
                      placeholder="Tell us what you are building, your timeline, and what you need help with..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary-glow w-full rounded-full px-6 py-3.5 text-sm font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending..." : "Send Project Brief"}
                    {!submitting && <Send size={14} />}
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
