import React, { useEffect, useState } from "react";

export default function WhatsAppButton({ hide }) {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [inHero, setInHero] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      // hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);

      // hide while hero is in view
      const hero = document.getElementById("hero");
      if (hero) {
        const rect = hero.getBoundingClientRect();
        setInHero(rect.bottom > 100);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  const shouldShow = visible && !hide && !inHero;

  return (
    <a
      href="https://wa.me/2349133250794"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`
        fixed z-40
        bottom-6 right-5 sm:bottom-8 sm:right-8
        w-14 h-14
        rounded-full
        flex items-center justify-center
        bg-[#1F3D2B]
        border border-[#D4AF37]/40
        shadow-[0_14px_34px_rgba(0,0,0,0.45)]
        transition-all duration-500 ease-out
        hover:scale-[1.06]
        hover:bg-[#274E37]
        active:scale-95
        ${
          shouldShow
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }
      `}
    >
      <span className="absolute inset-0 rounded-full bg-[url('/images/grain.png')] opacity-[0.04]" />

      <svg
        className="w-6 h-6 text-[#F5E7C4]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20.52 3.48A11.924 11.924 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.114.553 4.088 1.52 5.84L0 24l6.384-1.496A11.938 11.938 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.195-1.244-6.14-3.48-8.52z" />
      </svg>
    </a>
  );
}
