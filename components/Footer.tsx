export default function Footer() {
  return (
    <footer className="bg-[#0d1b2a] text-white py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
                <path d="M14 3C14 3 6 11 6 17a8 8 0 0016 0c0-6-8-14-8-14z" fill="#0096c7" />
                <path d="M14 10C14 10 9 15.5 9 19a5 5 0 0010 0c0-3.5-5-9-5-9z" fill="#48cae4" />
              </svg>
              <span className="font-bold text-sm">Water-Wise</span>
            </div>
            <p className="text-xs leading-relaxed text-[#7a96b0]">
              The clear choice for water sampling on Prince Edward Island.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#7a96b0] mb-3">Navigate</h4>
            <div className="flex flex-col gap-2 text-sm text-[#b0c4d4]">
              <a href="#services" className="hover:text-white transition-colors">Services & Pricing</a>
              <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              <a href="#contact" className="hover:text-white transition-colors">Book a Test</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#7a96b0] mb-3">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-[#b0c4d4]">
              <a href="tel:9024392122" className="hover:text-white transition-colors">902-439-2122</a>
              <a href="tel:8883170225" className="hover:text-white transition-colors">888-317-0225 (toll-free)</a>
              <a href="mailto:info@water-wise.ca" className="hover:text-white transition-colors">info@water-wise.ca</a>
              <span>Summerside, PE</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-xs text-[#7a96b0] flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Water-Wise. All rights reserved.</span>
          <span>Prince Edward Island, Canada</span>
        </div>
      </div>
    </footer>
  );
}
