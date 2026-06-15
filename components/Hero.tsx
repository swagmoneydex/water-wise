import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(160deg, #e8f4fd 0%, #ffffff 60%)" }} />
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #48cae4 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />

      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 border"
              style={{ background: "#e8f4fd", borderColor: "#b3d9f0", color: "#0077b6" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0077b6]" />
              Serving Prince Edward Island since 2018
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-bold leading-tight tracking-tight mb-5" style={{ fontSize: "clamp(36px, 5.5vw, 64px)", color: "var(--text)" }}>
              Clean water you can{" "}
              <span style={{ color: "var(--blue-deep)" }}>count on.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
              Water-Wise is PEI&apos;s trusted water quality testing service — certified,
              local, and built on decades of experience. Whether it&apos;s your home,
              cottage, or business, we make sure your water is safe.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contact"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white px-7 py-3.5 rounded-full transition-colors duration-300"
                style={{ background: "var(--blue-deep)" }}>
                Book a Water Test →
              </a>
              <a href="tel:9024392122"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-7 py-3.5 rounded-full border transition-colors duration-300"
                style={{ color: "var(--blue-deep)", borderColor: "var(--blue-deep)", background: "transparent" }}>
                📞 902-439-2122
              </a>
            </div>
          </Reveal>
        </div>

        {/* Trust stats */}
        <Reveal delay={320}>
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { value: "500+", label: "Tests completed" },
              { value: "48h", label: "Avg. turnaround" },
              { value: "100%", label: "Accredited lab" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center sm:text-left">
                <div className="text-2xl font-bold" style={{ color: "var(--blue-deep)" }}>{value}</div>
                <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
