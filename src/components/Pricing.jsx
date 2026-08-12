import { Check } from "lucide-react";
import { useReveal } from "../hooks";

const TIERS = [
  {
    tag: "One-time",
    name: "The Web Build",
    desc: "Your site is costing you deals. We fix that once, properly.",
    price: "$4,800",
    suffix: "one-off",
    features: [
      "Custom design & build",
      "Up to 8 pages",
      "React + Tailwind stack",
      "CMS integration",
      "3 months of support",
      "Mobile-first & fast",
    ],
    popular: false,
  },
  {
    tag: "Monthly",
    name: "The Content Retainer",
    desc: "A full post-production team at a fraction of the cost.",
    price: "$1,200",
    suffix: "/month",
    features: [
      "4 long-form video edits",
      "12 short-form Reels/Shorts",
      "Podcast editing & show notes",
      "Custom motion graphics",
      "Dedicated Slack channel",
      "48h turnaround",
    ],
    popular: false,
  },
  {
    tag: "Complete Package",
    name: "The Digital Facelift",
    desc: "Web + content, compounding together. The full growth stack.",
    price: "$2,800",
    suffix: "/month",
    features: [
      "Everything in Web Build",
      "Everything in Content Retainer",
      "Monthly strategy call",
      "Analytics & reporting",
      "Priority support",
      "Lock in your rate",
    ],
    popular: true,
  },
];

function PricingCard({ tier, delay }) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal pricing-card rounded-[20px] p-9 relative ${tier.popular ? "pricing-featured" : ""}`}
      style={{
        background: tier.popular
          ? "linear-gradient(160deg, rgba(124,111,255,0.12), rgba(124,111,255,0.04))"
          : "#13131A",
        border: tier.popular ? undefined : "1px solid rgba(255,255,255,0.07)",
        transitionDelay: `${delay}s`,
        transition: "transform 0.3s cubic-bezier(.23,1,.32,1), box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
      }}
    >
      {/* Popular badge */}
      {tier.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-[11px] font-bold tracking-widest uppercase px-4 py-1 rounded-full whitespace-nowrap">
          Most Popular
        </div>
      )}

      <span
        className="tag mb-4 inline-flex"
        style={{
          color: tier.popular ? "#7C6FFF" : "rgba(255,255,255,0.4)",
          borderColor: tier.popular
            ? "rgba(124,111,255,0.35)"
            : "rgba(255,255,255,0.12)",
        }}
      >
        {tier.tag}
      </span>

      <h3 className="font-display font-bold text-[22px] text-white tracking-tight m-0 mb-1.5">
        {tier.name}
      </h3>
      <p className="text-white/40 text-[14px] leading-snug mb-6">{tier.desc}</p>

      {/* Price */}
      <div className="mb-7">
        <span
          className="font-display font-extrabold text-white tracking-tight"
          style={{ fontSize: 42 }}
        >
          {tier.price}
        </span>
        {tier.suffix && (
          <span className="text-[14px] text-white/40 ml-1.5">
            {tier.suffix}
          </span>
        )}
      </div>

      {/* Features */}
      <div className="mb-8">
        {tier.features.map((f) => (
          <div
            key={f}
            className="flex items-center gap-[10px] py-[9px] border-b border-white/[0.05]"
          >
            <div
              className="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
              style={{
                background: tier.popular
                  ? "rgba(124,111,255,0.2)"
                  : "rgba(255,255,255,0.07)",
              }}
            >
              <Check
                size={10}
                strokeWidth={3}
                color={tier.popular ? "#7C6FFF" : "rgba(255,255,255,0.5)"}
              />
            </div>
            <span className="text-[14px] text-white/60">{f}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="block text-center font-semibold text-[14px] py-[13px] px-6 rounded-[10px] no-underline transition-all duration-200"
        style={{
          background: tier.popular ? "#7C6FFF" : "transparent",
          color: tier.popular ? "#fff" : "rgba(255,255,255,0.7)",
          border: tier.popular ? "none" : "1px solid rgba(255,255,255,0.15)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          if (tier.popular) e.currentTarget.style.background = "#5B50CC";
          else {
            e.currentTarget.style.borderColor = "rgba(124,111,255,0.4)";
            e.currentTarget.style.color = "#fff";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "";
          if (tier.popular) e.currentTarget.style.background = "#7C6FFF";
          else {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
            e.currentTarget.style.color = "rgba(255,255,255,0.7)";
          }
        }}
      >
        Get started
      </a>
    </div>
  );
}

export default function Pricing() {
  const headRef = useReveal();
  const noteRef = useReveal();

  return (
    <section
      id="pricing"
      className="px-6 py-[120px]"
      style={{ background: "rgba(255,255,255,0.012)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <div ref={headRef} className="reveal text-center mb-[72px]">
          <span className="tag mb-5 justify-center">Pricing</span>
          <h2
            className="font-display font-extrabold text-white tracking-tight m-0 mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
          >
            Transparent. No surprises.
          </h2>
          <p className="text-white/45 text-lg max-w-[480px] mx-auto">
            Pick the package that fits where you are. We'll grow into the others
            together.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          }}
        >
          {TIERS.map((t, i) => (
            <PricingCard key={t.name} tier={t} delay={i * 0.1} />
          ))}
        </div>

        <p
          ref={noteRef}
          className="reveal text-center mt-9 text-white/30 text-[13px]"
        >
          All prices in USD. Custom enterprise quotes available — just ask.
        </p>
      </div>
    </section>
  );
}
