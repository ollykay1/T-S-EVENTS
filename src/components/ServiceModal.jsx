import React, { useEffect, useRef, useState } from "react";

export default function ServiceModal({ service, onClose }) {
  const modalRef = useRef(null);
  const [visible, setVisible] = useState(false);

  /* iOS + desktop scroll lock */
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 20);

    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) close();
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const close = () => {
    setVisible(false);
    setTimeout(onClose, 280); // slightly faster exit feels premium
  };

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center px-4
        transition-all duration-300
        backdrop-blur-[6px]
        ${visible ? "bg-black/60 opacity-100" : "bg-black/0 opacity-0"}
      `}
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        className={`
          bg-[#111111] max-w-md w-full rounded-3xl p-8
          border border-[#D4AF37]/40
          shadow-[0_40px_80px_rgba(0,0,0,0.6)]
          transform transition-all duration-[420ms] ease-out
          ${visible
            ? "translate-y-0 scale-[1] opacity-100"
            : "translate-y-4 scale-[0.985] opacity-0"}
        `}
      >
        <div className="flex justify-between items-start mb-5">
          <h3 className="text-2xl font-display text-[#F5E7C4]">
            {service.title}
          </h3>

          <button
            onClick={close}
            className="
              w-8 h-8 flex items-center justify-center rounded-full
              bg-white/10 text-white
              transition-all duration-300
              hover:bg-white hover:text-black
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/40
            "
            aria-label="Close details"
          >
            ✕
          </button>
        </div>

        <p className="text-gray-300 text-sm leading-loose whitespace-pre-line mb-7">
          {service.writeUp}
        </p>

        <h4 className="text-[#D4AF37] font-semibold text-xs tracking-wide uppercase mb-3">
          Service Highlights
        </h4>

        <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1.5 mb-8">
          {service.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="text-right">
          <button
            onClick={() => {
              close();
              setTimeout(() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }, 320);
            }}
            className="
              px-7 py-3 rounded-full
              bg-[#D4AF37] text-black text-sm font-semibold tracking-wide
              transition-all duration-400
              hover:bg-[#E5C763]
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/40
            "
          >
            Book This Service
          </button>
        </div>
      </div>
    </div>
  );
}
