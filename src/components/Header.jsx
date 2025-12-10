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
    <header className="fixed w-full top-0 left-0 z-50 bg-[#111111]/95 backdrop-blur-md border-b border-[#D4AF37]/25">
      <div className="max-w-7xl mx-auto flex items-center px-6 py-4">
        {/* Logo */}
        <div
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-12 h-12 bg-[#D4AF37] text-black font-bold flex items-center justify-center rounded-md shadow-md shadow-black/40">
            T&S
          </div>
          <div>
            {/* Animated brand name */}
           <div className="text-2xl font-display font-extrabold tracking-wide">
  <span className="brand-name-hover-gold">T&S ELITE EVENTS</span>
</div>


            <div className="text-[0.7rem] text-[#F5E7C4] font-semibold tracking-[0.25em] uppercase">
              Bespoke &amp; Luxurious
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 ml-auto">
          {menuItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="
                text-[#F5F5F5]
                text-sm
                font-display
                font-semibold
                tracking-[0.18em]
                uppercase
                relative
                after:absolute
                after:-bottom-1
                after:left-0
                after:w-0
                after:h-[2px]
                after:bg-[#D4AF37]
                after:transition-all
                after:duration-300
                hover:after:w-full
                hover:text-gold
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
          className="md:hidden ml-auto text-[#F5F5F5] text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

    {/* Mobile menu */}
{open && (
  <div
    className="fixed inset-0 z-40 md:hidden "
    onClick={() => setOpen(false)} // click anywhere outside menu closes
  >
    {/* Menu container, pushed down below header */}
    <div
      className="
        mt-[72px]
        bg-[#111111]
        px-6 pb-6
        border-t border-[#D4AF37]/25
        shadow-lg shadow-black/60
      "
      onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
    >
      {menuItems.map((item, index) => (
        <button
          key={item.target}
          onClick={() => scrollTo(item.target)}
          className={`
            block w-full text-left py-3
            text-[#F5F5F5]
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
