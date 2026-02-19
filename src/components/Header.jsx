import React, { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    // { label: "Contact", target: "contact" },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header 
      className={`
        fixed w-full top-0 left-0 z-50 
        transition-all duration-500
        ${scrolled 
          ? 'bg-[#0a0a0a]/95 backdrop-blur-xl shadow-lg shadow-black/30 py-3' 
          : 'bg-transparent py-5'
        }
      `}
    >
      {/* Decorative top line */}
      <div className={`
        absolute top-0 left-0 right-0 h-[2px] 
        bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent
        transition-opacity duration-500
        ${scrolled ? 'opacity-100' : 'opacity-0'}
      `} />

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div
          onClick={() => scrollTo("hero")}
          className="group flex items-center gap-3 cursor-pointer"
        >
          {/* Brand mark */}
          <div className="relative">
            <div className="
              flex h-12 w-12 md:h-14 md:w-14 items-center justify-center 
              rounded-lg border-2 border-[#D4AF37] 
              bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]
              shadow-lg shadow-[#D4AF37]/20
              group-hover:shadow-[#D4AF37]/40
              transition-all duration-500
            ">
              <span className="text-lg md:text-xl font-display font-bold gradient-text">
                T&S
              </span>
            </div>
            {/* Glow effect on hover */}
            <div className="
              absolute inset-0 rounded-lg bg-[#D4AF37]/20 
              opacity-0 group-hover:opacity-100 
              blur-xl transition-opacity duration-500
            " />
          </div>

          {/* Wordmark */}
          <div className="leading-tight hidden sm:block">
            <div className="relative">
              <span className="text-sm md:text-base font-bold tracking-[0.15em] text-white uppercase font-display">
                T&S Elite Events
              </span>
              {/* Animated underline */}
              <span className="
                absolute left-0 bottom-0 h-[2px] w-0 
                bg-gradient-to-r from-[#D4AF37] to-[#F5E7C4]
                group-hover:w-full transition-all duration-500
              " />
            </div>
            <div className="mt-1 text-[0.65rem] md:text-xs text-[#D4AF37] font-semibold tracking-[0.2em] uppercase">
              Elegance in Every Detail
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {menuItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="
                relative px-5 py-2 
                text-white/90 text-sm font-semibold tracking-[0.12em] uppercase
                transition-all duration-300
                hover:text-[#D4AF37]
                group
              "
            >
              {item.label}
              {/* Hover underline */}
              <span className="
                absolute bottom-1 left-1/2 -translate-x-1/2 
                w-0 h-[2px] bg-[#D4AF37]
                group-hover:w-3/4 transition-all duration-300
              " />
            </button>
          ))}
          
          {/* CTA Button */}
          <button
            onClick={() => scrollTo("contact")}
            className="
              ml-4 px-6 py-2.5 rounded-full
              bg-gradient-to-r from-[#D4AF37] to-[#F5E7C4]
              text-black font-bold text-sm tracking-wide uppercase
              shadow-lg shadow-[#D4AF37]/30
              hover:shadow-[#D4AF37]/50 hover:scale-105
              transition-all duration-300
            "
          >
            Book Now
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden relative w-10 h-10 flex items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          <div className="relative w-6 h-5">
            <span className={`
              absolute left-0 w-full h-0.5 bg-[#D4AF37] rounded-full
              transition-all duration-300
              ${open ? 'top-2 rotate-45' : 'top-0'}
            `} />
            <span className={`
              absolute left-0 top-2 w-full h-0.5 bg-[#D4AF37] rounded-full
              transition-all duration-300
              ${open ? 'opacity-0' : 'opacity-100'}
            `} />
            <span className={`
              absolute left-0 w-full h-0.5 bg-[#D4AF37] rounded-full
              transition-all duration-300
              ${open ? 'top-2 -rotate-45' : 'top-4'}
            `} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`
        fixed inset-0 top-0 bg-[#0a0a0a]/98 backdrop-blur-xl
        lg:hidden transition-all duration-500
        ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}>
        {/* Close button area */}
        <div className="h-20" />
        
        {/* Menu items */}
        <nav className="flex flex-col items-center justify-center h-[calc(100vh-80px)] gap-6">
          {menuItems.map((item, index) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className={`
                text-2xl font-display font-bold text-white/90 tracking-[0.15em] uppercase
                hover:text-[#D4AF37] transition-all duration-300
                ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
              style={{ 
                transitionDelay: open ? `${index * 80}ms` : '0ms'
              }}
            >
              {item.label}
            </button>
          ))}
          
          {/* Mobile CTA */}
          <button
            onClick={() => scrollTo("contact")}
            className={`
              mt-6 px-10 py-4 rounded-full
              bg-gradient-to-r from-[#D4AF37] to-[#F5E7C4]
              text-black font-bold text-lg tracking-wide uppercase
              shadow-lg shadow-[#D4AF37]/30
              transition-all duration-500
              ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: open ? '400ms' : '0ms' }}
          >
            Book Your Event
          </button>

          {/* Decorative element */}
          <div className="mt-10 flex items-center gap-3">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <div className="w-2 h-2 bg-[#D4AF37] rotate-45" />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
        </nav>
      </div>
    </header>
  );
}
