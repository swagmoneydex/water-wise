"use client";
import { useState } from "react";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      address: (form.elements.namedItem("address") as HTMLInputElement).value,
      testType: (form.elements.namedItem("testType") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 px-6" style={{ background: "var(--blue-pale)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left */}
          <Reveal>
            <div>
              <h2 className="font-bold mb-4" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", color: "var(--text)" }}>
                Book a water test
              </h2>
              <p className="text-sm leading-relaxed mb-10" style={{ color: "var(--text-muted)" }}>
                Fill out the form and Dean will get back to you within one business
                day to confirm your appointment and answer any questions.
              </p>

              <div className="flex flex-col gap-5">
                {[
                  { icon: "📞", label: "Phone", value: "902-439-2122", href: "tel:9024392122" },
                  { icon: "📞", label: "Toll-free", value: "888-317-0225", href: "tel:8883170225" },
                  { icon: "✉️", label: "Email", value: "info@water-wise.ca", href: "mailto:info@water-wise.ca" },
                  { icon: "📍", label: "Location", value: "P.O. Box 41, Summerside, PE C1N 4P6", href: null },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="text-base mt-0.5">{icon}</span>
                    <div>
                      <div className="text-xs font-medium uppercase tracking-wide mb-0.5" style={{ color: "var(--text-muted)" }}>{label}</div>
                      {href ? (
                        <a href={href} className="text-sm font-medium hover:underline" style={{ color: "var(--blue-deep)" }}>{value}</a>
                      ) : (
                        <span className="text-sm" style={{ color: "var(--text)" }}>{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right — Form */}
          <Reveal delay={120}>
            {status === "success" ? (
              <div className="bg-white rounded-2xl p-8 border flex flex-col items-start gap-3" style={{ borderColor: "var(--border)" }}>
                <div className="text-3xl">✅</div>
                <h3 className="text-xl font-semibold" style={{ color: "var(--text)" }}>Request received!</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  Thanks for reaching out. Dean will be in touch within one business
                  day to confirm your appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-7 border flex flex-col gap-5" style={{ borderColor: "var(--border)" }}>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { name: "name", label: "Your name", type: "text", placeholder: "Jane Smith", required: true },
                    { name: "email", label: "Email address", type: "email", placeholder: "jane@example.com", required: true },
                  ].map((f) => (
                    <div key={f.name} className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>{f.label}</label>
                      <input name={f.name} type={f.type} required={f.required} placeholder={f.placeholder}
                        className="border rounded-lg px-3.5 py-2.5 text-sm outline-none transition-colors"
                        style={{ borderColor: "var(--border)", color: "var(--text)" }}
                        onFocus={e => e.target.style.borderColor = "var(--blue-mid)"}
                        onBlur={e => e.target.style.borderColor = "var(--border)"}
                      />
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>Phone (optional)</label>
                    <input name="phone" type="tel" placeholder="902-555-0100"
                      className="border rounded-lg px-3.5 py-2.5 text-sm outline-none transition-colors"
                      style={{ borderColor: "var(--border)", color: "var(--text)" }}
                      onFocus={e => e.target.style.borderColor = "var(--blue-mid)"}
                      onBlur={e => e.target.style.borderColor = "var(--border)"}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>Test type</label>
                    <select name="testType"
                      className="border rounded-lg px-3.5 py-2.5 text-sm outline-none transition-colors bg-white"
                      style={{ borderColor: "var(--border)", color: "var(--text)" }}
                      onFocus={e => e.target.style.borderColor = "var(--blue-mid)"}
                      onBlur={e => e.target.style.borderColor = "var(--border)"}
                    >
                      <option value="">Not sure yet</option>
                      <option value="bacteria-chemistry">Bacteria & Full Chemistry ($125–$150)</option>
                      <option value="bacteria">Bacteria Only ($125)</option>
                      <option value="resample">Re-Sample ($65)</option>
                      <option value="disinfection">Disinfection Services</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>Property address</label>
                  <input name="address" type="text" placeholder="123 Main St, Summerside, PE"
                    className="border rounded-lg px-3.5 py-2.5 text-sm outline-none transition-colors"
                    style={{ borderColor: "var(--border)", color: "var(--text)" }}
                    onFocus={e => e.target.style.borderColor = "var(--blue-mid)"}
                    onBlur={e => e.target.style.borderColor = "var(--border)"}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>Anything else we should know?</label>
                  <textarea name="message" rows={3} placeholder="e.g. We're buying a property and need a certificate for closing..."
                    className="border rounded-lg px-3.5 py-2.5 text-sm outline-none transition-colors resize-none"
                    style={{ borderColor: "var(--border)", color: "var(--text)" }}
                    onFocus={e => e.target.style.borderColor = "var(--blue-mid)"}
                    onBlur={e => e.target.style.borderColor = "var(--border)"}
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-500">Something went wrong — please call us directly at 902-439-2122.</p>
                )}

                <button type="submit" disabled={status === "sending"}
                  className="w-full py-3 rounded-full text-sm font-semibold text-white transition-colors duration-300 disabled:opacity-60"
                  style={{ background: "var(--blue-deep)" }}>
                  {status === "sending" ? "Sending…" : "Send booking request →"}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
