import Reveal from "./Reveal";

const TRUST = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Certified Technician",
    desc: "Dean Stewart is a certified Environmental Technician with years of field experience across PEI.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Fast Results",
    desc: "Samples are delivered to PEI Analytical Laboratories — accredited by the Standards Council of Canada.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Island Owned",
    desc: "A local PEI business — not a chain. We know the Island's water, properties, and communities.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Detailed Reports",
    desc: "Every test includes a full report with collection procedures, lab results, and expert recommendations.",
  },
];

export default function TrustBar() {
  return (
    <section className="py-20 px-6" style={{ background: "var(--blue-pale)" }}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-center font-bold mb-12" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", color: "var(--text)" }}>
            Why islanders choose Water-Wise
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="bg-white rounded-2xl p-6 border h-full" style={{ borderColor: "var(--border)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "#e8f4fd", color: "var(--blue-deep)" }}>
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
