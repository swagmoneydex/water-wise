"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      style={{ color: scrolled ? "var(--text)" : "#ffffff" }}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          {scrolled ? (
            /* Scrolled: all-blue styled logo */
            <span className="flex items-center gap-2">
              <svg width="30" height="28" viewBox="0 0 30 28" fill="none">
                {/* House */}
                <path d="M15 1L1 12h4v15h20V12h4L15 1z" fill="#0077b6" />
                {/* Faucet handle */}
                <rect x="10" y="14" width="10" height="2.5" rx="1.25" fill="white" />
                {/* Faucet spout */}
                <rect x="13.5" y="16.5" width="3" height="5" rx="1.5" fill="white" />
                {/* Water drop */}
                <circle cx="15" cy="23.5" r="1.5" fill="white" />
              </svg>
              <span className="font-bold text-base tracking-tight" style={{ color: "#0077b6" }}>
                Water-Wise
              </span>
            </span>
          ) : (
            /* Over video: real PNG in glass pill */
            <span className="flex items-center rounded-lg bg-white/90 backdrop-blur-sm px-2 py-1">
              <img src="/waterwise_logo1.png" alt="Water-Wise" className="h-8 w-auto" />
            </span>
          )}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: scrolled ? "var(--text-muted)" : "rgba(255,255,255,0.8)" }}>
          <a href="#services" className="hover:text-[#0077b6] transition-colors" style={{ color: "inherit" }}>Services</a>
          <a href="#how-it-works" className="hover:text-[#0077b6] transition-colors" style={{ color: "inherit" }}>How It Works</a>
          <a href="#faq" className="hover:text-[#0077b6] transition-colors" style={{ color: "inherit" }}>FAQ</a>
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex text-sm font-semibold text-white px-5 py-2.5 rounded-full transition-colors duration-300"
          style={{ background: "var(--blue-deep)" }}
          onMouseEnter={e => (e.currentTarget.style.background = "var(--blue-mid)")}
          onMouseLeave={e => (e.currentTarget.style.background = "var(--blue-deep)")}
        >
          Book a Test
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} style={{ background: scrolled ? "#0d1b2a" : "#ffffff" }} />
            <span className={`block h-0.5 transition-all ${menuOpen ? "opacity-0" : ""}`} style={{ background: scrolled ? "#0d1b2a" : "#ffffff" }} />
            <span className={`block h-0.5 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{ background: scrolled ? "#0d1b2a" : "#ffffff" }} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#d0e8f5] px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          <a href="#services" onClick={() => setMenuOpen(false)} className="text-[#4a6080]">Services</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="text-[#4a6080]">How It Works</a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className="text-[#4a6080]">FAQ</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-white text-center py-2.5 rounded-full font-semibold" style={{ background: "var(--blue-deep)" }}>
            Book a Test
          </a>
        </div>
      )}
    </header>
  );
}
