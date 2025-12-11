import React, { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const menuItems = [
    { label: "Home", target: "hero" },
    { label: "About", target: "about" },
    { label: "Services", target: "services" },
    { label: "Gallery", target: "gallery" },
    { label: "Contact", target: "contact" },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-black/90 backdrop-blur-md border-b border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto flex items-center px-6 py-4">
        {/* Logo – left aligned, simple & classic */}
        <div
          onClick={() => scrollTo("hero")}
          className="group flex items-center gap-3 cursor-pointer"
        >
          {/* Brand mark (no animation) */}
          <div className="flex h-11 w-11 items-center justify-center rounded-md border border-[#D4AF37] bg-black shadow-lg shadow-black/40">
            <span className="text-sm font-semibold tracking-[0.18em] text-[#D4AF37]">
              T&amp;S
            </span>
          </div>

          {/* Wordmark with clean hover underline */}
          <div className="leading-tight">
            <div className="relative inline-block">
              <span className="text-[0.8rem] font-semibold tracking-[0.24em] text-white uppercase">
                T&amp;S Elite Events
              </span>
              {/* underline only appears smoothly on hover – no initial line */}
              <span className="pointer-events-none absolute left-0 top-full mt-1 block h-[2px] w-0 bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />
            </div>

            <div className="mt-1 text-[0.65rem] text-[#F5E7C4] font-semibold tracking-[0.28em] uppercase">
              Bespoke &amp; Luxurious
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 ml-auto">
          {menuItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="
                text-white/90
                text-xs
                font-display
                font-semibold
                tracking-[0.18em]
                uppercase
                relative
                pb-1
                after:absolute
                after:-bottom-0.5
                after:left-0
                after:w-0
                after:h-[2px]
                after:bg-[#D4AF37]
                after:transition-all
                after:duration-300
                hover:after:w-full
                hover:text-[#D4AF37]
                transition-colors
                duration-300
              "
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden ml-auto text-white text-3xl"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setOpen(false)}
        >
          {/* Menu container, pushed down below header */}
          <div
            className="
              mt-[72px]
              bg-black
              px-6 pb-6
              border-t border-[#D4AF37]/30
              shadow-lg shadow-black/60
            "
            onClick={(e) => e.stopPropagation()}
          >
            {menuItems.map((item, index) => (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className={`
                  block w-full text-left py-3
                  text-white/90
                  font-semibold
                  tracking-[0.18em]
                  uppercase
                  mobile-nav-item
                `}
                style={{ animationDelay: `${index * 0.04}s` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}