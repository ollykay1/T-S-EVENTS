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
    <header className="fixed w-full top-0 left-0 bg- z-40 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-5xl font-display text-black font-extrabold">T&S Events</h1>

        <nav className="hidden md:flex gap-8 font-display text-babyPink font-semibold">
          {menuItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="hover:text-gold transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button className="md:hidden text-babyPink text-3xl" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-deepNavy px-6 py-4 flex flex-col gap-4 animate-fade-up">
          {menuItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="py-2 text-left text-babyPink hover:text-gold transition-colors duration-300 font-display font-semibold"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
