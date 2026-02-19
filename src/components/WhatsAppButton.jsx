import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [inHero, setInHero] = useState(true);

  useEffect(() => {
    const checkHero = () => {
      const hero = document.getElementById("hero");
      if (hero) {
        const rect = hero.getBoundingClientRect();
        // Hide only when hero section is fully visible
        setInHero(rect.bottom > 100);
      }
    };

    // Check on mount
    checkHero();

    window.addEventListener("scroll", checkHero, { passive: true });
    return () => window.removeEventListener("scroll", checkHero);
  }, []);

  // Show button everywhere except in the hero section
  const shouldShow = !inHero;

  return (
    <a
      href="https://wa.me/2349133250794"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`
        fixed z-40
        bottom-6 right-5 sm:bottom-8 sm:right-8
        group
        transition-all duration-500 ease-out
        ${shouldShow
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none"
        }
      `}
    >
      {/* Main button */}
      <div className="
        relative w-14 h-14 sm:w-16 sm:h-16
        rounded-full
        bg-gradient-to-br from-[#0F5132] to-[#25D366]
        flex items-center justify-center
        shadow-lg shadow-[#0F5132]/40
        group-hover:shadow-xl group-hover:shadow-[#25D366]/40
        group-hover:scale-110
        transition-all duration-300
      ">
        <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        
        {/* Pulse animation ring */}
        <span className="
          absolute inset-0 rounded-full
          bg-[#25D366]/40
          animate-ping
        " />
      </div>

      {/* Tooltip */}
      <div className="
        absolute right-full mr-3 top-1/2 -translate-y-1/2
        px-4 py-2 rounded-lg
        bg-[#1a1a1a] border border-[#D4AF37]/30
        text-white text-sm font-medium whitespace-nowrap
        opacity-0 group-hover:opacity-100
        translate-x-2 group-hover:translate-x-0
        transition-all duration-300
        hidden sm:block
      ">
        Chat with us!
        {/* Arrow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
          <div className="border-8 border-transparent border-l-[#1a1a1a]" />
        </div>
      </div>
    </a>
  );
}
