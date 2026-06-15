"use client";
import { useState } from "react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "Who needs water testing?",
    a: "Anyone on a private well should test regularly — at least once a year. It's also required for most real estate transactions in PEI. Cottages, rental properties, and farms benefit from regular testing too.",
  },
  {
    q: "How long does it take to get results?",
    a: "Most results come back within 48 hours of sample delivery to PEI Analytical Laboratories. We'll notify you as soon as your report is ready.",
  },
  {
    q: "What if my water fails the test?",
    a: "Don't worry — it's more common than people think. Dean will walk you through your options, which may include disinfection, filtration, or a follow-up re-sample test at a reduced rate of $65 + HST.",
  },
  {
    q: "Do you serve the whole Island?",
    a: "Yes. We serve all of Prince Edward Island. Pricing may vary slightly depending on your location — typically $125–$150 + HST for bacteria and full chemistry.",
  },
  {
    q: "Is this the same as what the government used to offer?",
    a: "Yes. Water-Wise was founded specifically to fill the gap when PEI's government stopped collecting water samples for real estate transactions. We use the same accredited lab and provide the same certificates.",
  },
  {
    q: "How do I prepare for the sample collection?",
    a: "Dean will give you specific instructions when you book, but generally you'll want to avoid running water for a few hours beforehand. He handles everything else on-site.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-6 bg-white">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="font-bold mb-3" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", color: "var(--text)" }}>
              Common questions
            </h2>
          </div>
        </Reveal>

        <div className="flex flex-col divide-y" style={{ borderColor: "var(--border)" }}>
          {FAQS.map((faq, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="border-t" style={{ borderColor: "var(--border)" }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-medium text-sm" style={{ color: "var(--text)" }}>{faq.q}</span>
                  <span className="text-lg shrink-0 transition-transform duration-300" style={{
                    color: "var(--blue-deep)",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}>+</span>
                </button>
                {open === i && (
                  <p className="text-sm leading-relaxed pb-5" style={{ color: "var(--text-muted)" }}>
                    {faq.a}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
