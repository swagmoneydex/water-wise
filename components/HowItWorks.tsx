import Reveal from "./Reveal";

const STEPS = [
  {
    number: "01",
    title: "Book your test",
    desc: "Fill out the contact form or give Dean a call. Tell us your location and what you'd like tested — he'll confirm the right package for you.",
  },
  {
    number: "02",
    title: "We come to you",
    desc: "Dean visits your property, collects the water sample professionally, and handles delivery to the accredited lab. You don't lift a finger.",
  },
  {
    number: "03",
    title: "Get your results",
    desc: "You receive a detailed report with your lab results, what they mean, and clear next steps — whether your water passes or needs attention.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6" style={{ background: "var(--blue-pale)" }}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center mb-14">
            <h2 className="font-bold mb-3" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", color: "var(--text)" }}>
              How it works
            </h2>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Simple, hassle-free water testing from start to finish.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-10 left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-px" style={{ background: "var(--border)" }} />

          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 100}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mb-5 relative z-10"
                  style={{ background: "var(--blue-deep)" }}>
                  {step.number}
                </div>
                <h3 className="font-semibold text-lg mb-3" style={{ color: "var(--text)" }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
