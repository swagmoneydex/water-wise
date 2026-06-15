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
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
              d="M14 3C14 3 6 11 6 17a8 8 0 0016 0c0-6-8-14-8-14z"
              fill="#0077b6"
            />
            <path
              d="M14 10C14 10 9 15.5 9 19a5 5 0 0010 0c0-3.5-5-9-5-9z"
              fill="#48cae4"
            />
          </svg>
          <span className="font-bold text-base tracking-tight" style={{ color: "var(--text)" }}>
            Water-<span style={{ color: "var(--blue-deep)" }}>Wise</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: "var(--text-muted)" }}>
          <a href="#services" className="hover:text-[#0077b6] transition-colors">Services</a>
          <a href="#how-it-works" className="hover:text-[#0077b6] transition-colors">How It Works</a>
          <a href="#faq" className="hover:text-[#0077b6] transition-colors">FAQ</a>
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
            <span className={`block h-0.5 bg-[#0d1b2a] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-[#0d1b2a] transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-[#0d1b2a] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
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
