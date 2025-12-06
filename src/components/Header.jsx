import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", target: "hero" },
    { label: "Services", target: "services" },
    { label: "Gallery", target: "gallery" },
    { label: "Contact", target: "contact" },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-deepNavy/95 backdrop-blur">
      <div className="max-w-7xl mx-auto flex items-center px-6 py-4">
        {/* Logo */}
        <div
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-12 h-12 bg-gold text-deepNavy font-bold flex items-center justify-center rounded-md">
            T&S
          </div>
          <div>
            <div className="text-2xl font-display text-gold font-extrabold">
              T&S ELITE EVENTS
            </div>
            <div className="text-xs text-babyPink/80">
              Bespoke & Luxurious
            </div>
          </div>
        </div>

        {/* RIGHT aligned nav */}
        <nav className="hidden md:flex gap-8 ml-auto">
          {menuItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="text-babyPink text-lg font-display font-semibold hover:text-gold transition"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden ml-auto text-babyPink text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-deepNavy px-6 pb-6">
          {menuItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="block w-full text-left py-3 text-babyPink font-semibold hover:text-gold transition"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
