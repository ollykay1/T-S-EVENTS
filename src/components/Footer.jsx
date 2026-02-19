import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050505] overflow-hidden">
      {/* Top decorative line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-lg border-2 border-[#D4AF37] bg-[#0a0a0a] flex items-center justify-center">
                <span className="text-xl font-display font-bold gradient-text">T&S</span>
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-white tracking-wide">
                  T&S Elite Events
                </h3>
                <p className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase">
                  Elegance in Every Detail
                </p>
              </div>
            </div>
            
            <p className="text-white/60 text-sm leading-relaxed max-w-md mb-6">
              Nigeria's premier luxury event planning company. We transform your vision 
              into unforgettable celebrations with creativity, precision, and exceptional service.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/ts_elite_events"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-white/60 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:border-transparent hover:text-white transition-all"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@oluwatosinomotos7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-white/60 hover:bg-black hover:border-white/30 hover:text-white transition-all"
              >
                <FaTiktok size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/14Rdg9SZBBE/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-white/60 hover:bg-blue-600 hover:border-transparent hover:text-white transition-all"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://wa.me/2349133250794"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#0F5132] hover:border-transparent hover:text-white transition-all"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", target: "hero" },
                { label: "About Us", target: "about" },
                { label: "Our Services", target: "services" },
                { label: "Gallery", target: "gallery" },
                { label: "Contact", target: "contact" },
              ].map((link) => (
                <li key={link.target}>
                  <button
                    onClick={() => scrollTo(link.target)}
                    className="text-white/60 text-sm hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Wedding Planning",
                "Corporate Events",
                "Birthday Parties",
                "Traditional Ceremonies",
                "Private Celebrations",
              ].map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollTo("services")}
                    className="text-white/60 text-sm hover:text-[#D4AF37] transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              © {currentYear} T&S Elite Events. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <span>Designed with</span>
              <span className="text-[#D4AF37]">♥</span>
              <span>in Lagos, Nigeria</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-[#D4AF37]/20 pointer-events-none" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-[#D4AF37]/20 pointer-events-none" />
    </footer>
  );
}
