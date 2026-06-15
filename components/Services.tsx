import Reveal from "./Reveal";

const SERVICES = [
  {
    name: "Bacteria & Full Chemistry",
    price: "$125–$150",
    note: "+ HST, location-dependent",
    desc: "Complete water quality analysis covering both bacteria and a full suite of chemical parameters. Recommended for homes, real estate transactions, and annual testing.",
    best: "Most popular",
  },
  {
    name: "Bacteria Analysis Only",
    price: "$125",
    note: "+ HST",
    desc: "Tests specifically for harmful bacteria such as E. coli and coliforms. Ideal for seasonal checks on wells, cottages, and rental properties.",
    best: null,
  },
  {
    name: "Re-Sample Testing",
    price: "$65",
    note: "+ HST",
    desc: "Follow-up testing after a previously unacceptable result and subsequent treatment. Confirms your water is now safe to use.",
    best: null,
  },
  {
    name: "Disinfection Services",
    price: "Call for quote",
    note: "",
    desc: "If your water tests positive for bacteria, we provide professional disinfection and remediation advice to get your water back to a safe standard.",
    best: null,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="font-bold mb-3" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", color: "var(--text)" }}>
              Services & Pricing
            </h2>
            <p className="text-sm max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
              Straightforward pricing — no hidden fees. All samples are analyzed by
              PEI Analytical Laboratories, accredited by the Standards Council of Canada.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={i * 70}>
              <div className={`relative rounded-2xl p-7 border h-full flex flex-col ${s.best ? "border-[#0077b6]" : ""}`}
                style={{ borderColor: s.best ? "var(--blue-deep)" : "var(--border)", background: s.best ? "var(--blue-pale)" : "#fff" }}>
                {s.best && (
                  <div className="absolute -top-3 left-6 text-xs font-semibold text-white px-3 py-1 rounded-full" style={{ background: "var(--blue-deep)" }}>
                    {s.best}
                  </div>
                )}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-semibold text-base" style={{ color: "var(--text)" }}>{s.name}</h3>
                  <div className="text-right shrink-0">
                    <div className="font-bold text-lg" style={{ color: "var(--blue-deep)" }}>{s.price}</div>
                    {s.note && <div className="text-xs" style={{ color: "var(--text-muted)" }}>{s.note}</div>}
                  </div>
                </div>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="text-center text-sm mt-8" style={{ color: "var(--text-muted)" }}>
            Not sure which test you need?{" "}
            <a href="#contact" className="font-medium underline underline-offset-2" style={{ color: "var(--blue-deep)" }}>
              Get in touch
            </a>{" "}
            and Dean will point you in the right direction.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
