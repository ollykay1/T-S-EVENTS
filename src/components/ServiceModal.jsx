import React, { useEffect, useRef, useState } from "react";

export default function ServiceModal({ service, onClose }) {
  const modalRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 20);

    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) close();
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const close = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  const scrollToContact = () => {
    close();
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 350);
  };

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center p-4
        transition-all duration-300
        ${visible ? "bg-black/70 backdrop-blur-md" : "bg-black/0 backdrop-blur-none"}
      `}
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        className={`
          relative bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] 
          w-full max-w-2xl max-h-[90vh] overflow-y-auto
          rounded-3xl border border-[#D4AF37]/30
          shadow-2xl shadow-black/50
          transform transition-all duration-400 ease-out
          ${visible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-8 scale-95 opacity-0"
          }
        `}
      >
        {/* Decorative corners */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#D4AF37]/50" />
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#D4AF37]/50" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#D4AF37]/50" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#D4AF37]/50" />

        {/* Header */}
        <div className="relative p-6 md:p-8 pb-0">
          {/* Close button */}
          <button
            onClick={close}
            className="
              absolute top-4 right-4 z-10
              w-10 h-10 rounded-full
              bg-white/10 border border-white/20
              flex items-center justify-center
              text-white text-xl font-light
              hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black
              transition-all duration-300
            "
            aria-label="Close modal"
          >
            ×
          </button>

          {/* Icon and Title */}
          <div className="flex items-start gap-4 mb-6 pr-12">
            <div className="
              w-16 h-16 rounded-2xl 
              bg-gradient-to-br from-[#D4AF37] to-[#F5E7C4]
              flex items-center justify-center
              text-3xl shadow-lg shadow-[#D4AF37]/20
              flex-shrink-0
            ">
              {service.icon}
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                {service.title}
              </h3>
              <p className="mt-1 text-[#D4AF37] text-sm tracking-wide uppercase">
                Premium Service
              </p>
            </div>
          </div>

          {/* Decorative line */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#D4AF37]/50 to-transparent" />
            <div className="w-2 h-2 bg-[#D4AF37] rotate-45" />
            <div className="flex-1 h-[1px] bg-gradient-to-l from-[#D4AF37]/50 to-transparent" />
          </div>
        </div>

        {/* Content */}
        <div className="px-6 md:px-8 pb-6">
          {/* Write-up */}
          <div className="prose prose-invert max-w-none">
            {service.writeUp.split('\n\n').map((paragraph, index) => (
              <p 
                key={index}
                className="text-white/80 text-base md:text-lg leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Service highlights */}
          <div className="mt-8 p-6 rounded-2xl bg-[#D4AF37]/5 border border-[#D4AF37]/20">
            <h4 className="flex items-center gap-2 text-[#D4AF37] font-bold text-sm tracking-wide uppercase mb-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              What's Included
            </h4>

            <ul className="space-y-3">
              {service.list.map((item, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 text-white/75"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 bg-[#D4AF37] rounded-full flex-shrink-0" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why choose us */}
          <div className="mt-6 p-6 rounded-2xl bg-[#0F5132]/10 border border-[#0F5132]/30">
            <h4 className="flex items-center gap-2 text-[#0F5132] font-bold text-sm tracking-wide uppercase mb-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              The T&S Elite Difference
            </h4>
            <p className="text-white/70 text-sm leading-relaxed">
              When you choose T&S Elite Events, you're not just getting a service provider — 
              you're partnering with a team that treats your celebration as their own. 
              Our commitment to excellence, attention to detail, and passion for creating 
              memorable experiences sets us apart in Nigeria's event industry.
            </p>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="sticky bottom-0 p-6 md:p-8 pt-4 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f] to-transparent">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={scrollToContact}
              className="
                flex-1 px-8 py-4 rounded-full
                bg-gradient-to-r from-[#D4AF37] to-[#F5E7C4]
                text-black font-bold tracking-wide uppercase
                shadow-lg shadow-[#D4AF37]/30
                hover:shadow-[#D4AF37]/50 hover:scale-[1.02]
                transition-all duration-300
              "
            >
              Book This Service
            </button>
            <button
              onClick={close}
              className="
                px-8 py-4 rounded-full
                bg-transparent border-2 border-white/30
                text-white font-bold tracking-wide uppercase
                hover:border-white/50 hover:bg-white/5
                transition-all duration-300
              "
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
