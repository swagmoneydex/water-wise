"use client";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const VIDEOS = ["/PEI1.mp4", "/PEI2.mp4", "/PEI3.mp4", "/PEI4.mp4"];
const FADE_MS = 1800;

export default function Hero() {
  // Two video slots crossfade between each other
  const [front, setFront] = useState<"a" | "b">("a");
  const aRef = useRef<HTMLVideoElement>(null);
  const bRef = useRef<HTMLVideoElement>(null);
  const frontRef = useRef<"a" | "b">("a"); // always in sync, avoids stale closure
  const nextIdx = useRef(2);
  const busy = useRef(false);

  useEffect(() => {
    const a = aRef.current;
    const b = bRef.current;
    if (!a || !b) return;
    // Slot A: start playing first video
    a.src = VIDEOS[0];
    a.load();
    a.play().catch(() => {});
    // Slot B: silently preload second video
    b.src = VIDEOS[1];
    b.load();
  }, []);

  function advance() {
    if (busy.current) return;
    busy.current = true;

    const from = frontRef.current;
    const to: "a" | "b" = from === "a" ? "b" : "a";
    const fromRef = from === "a" ? aRef : bRef;
    const toRef = from === "a" ? bRef : aRef;

    // Crossfade: play the preloaded back slot
    toRef.current?.play().catch(() => {});
    frontRef.current = to;
    setFront(to);

    // After the fade completes, reload the now-back slot with the next video
    setTimeout(() => {
      const next = nextIdx.current % VIDEOS.length;
      nextIdx.current++;
      if (fromRef.current) {
        fromRef.current.src = VIDEOS[next];
        fromRef.current.load();
      }
      busy.current = false;
    }, FADE_MS);
  }

  return (
    <section className="relative min-h-screen flex items-end px-6 pb-20 overflow-hidden">
      {/* Two video layers that crossfade */}
      <video ref={aRef} muted playsInline preload="auto" onEnded={advance}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: front === "a" ? 1 : 0, transition: `opacity ${FADE_MS}ms ease`, zIndex: 0 }}
      />
      <video ref={bRef} muted playsInline preload="auto" onEnded={advance}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: front === "b" ? 1 : 0, transition: `opacity ${FADE_MS}ms ease`, zIndex: 0 }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/25" style={{ zIndex: 1 }} />
      <div className="absolute inset-0" style={{
        zIndex: 1,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 35%, rgba(0,0,0,0.65) 75%, rgba(0,0,0,0.82) 100%)"
      }} />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl w-full" style={{ zIndex: 2 }}>
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 border border-white/25 bg-white/10 backdrop-blur-sm text-white/90">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--blue-light)" }} />
            Serving all of Prince Edward Island
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="font-bold leading-tight tracking-tight mb-5 text-white" style={{ fontSize: "clamp(40px, 6vw, 78px)" }}>
            Know what&apos;s in{" "}
            <span style={{ color: "#48cae4" }}>your water.</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="text-lg leading-relaxed mb-8 max-w-xl" style={{ color: "rgba(255,255,255,0.78)" }}>
            PEI&apos;s trusted water quality testing service — certified, local, and
            built on years of Island experience. We come to you.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="flex flex-col sm:flex-row gap-3 mb-14">
            <a href="#contact"
              className="inline-flex items-center justify-center text-sm font-semibold px-7 py-3.5 rounded-full transition-colors duration-300"
              style={{ background: "#ffffff", color: "var(--text)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#e8f4fd")}
              onMouseLeave={e => (e.currentTarget.style.background = "#ffffff")}
            >
              Book a Water Test →
            </a>
            <a href="tel:9024392122"
              className="inline-flex items-center justify-center text-sm font-semibold px-7 py-3.5 rounded-full border border-white/40 text-white transition-colors duration-300 hover:bg-white/10"
            >
              902-439-2122
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="grid grid-cols-3 gap-8 max-w-xs border-t border-white/20 pt-8">
            {[
              { value: "500+", label: "Tests completed" },
              { value: "48h",  label: "Avg. turnaround" },
              { value: "100%", label: "Accredited lab"  },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>{label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
