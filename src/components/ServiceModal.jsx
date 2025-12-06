import React, { useEffect, useRef } from "react";

export default function ServiceModal({ service, onClose }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-4 bg-black/20 animate-fade-in">
      <div
        ref={modalRef}
        className="w-full max-w-xs md:max-w-sm bg-softWhite rounded-2xl p-6 shadow-lg transform scale-95 hover:scale-100 transition-all duration-300"
      >
        <div className="flex justify-between items-start gap-3">
          <div>
            <h3 className="text-xl md:text-2xl font-display text-deepNavy mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm md:text-base whitespace-pre-line">
              {service.writeUp}
            </p>
            <div className="mt-4">
              <h4 className="text-base font-semibold text-deepNavy mb-1">
                What we include
              </h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm md:text-base">
                {service.list.map((item, i) => (
                  <li key={i} className="mb-1">{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white font-bold flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            onClick={() => {
              onClose();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-4 py-2 md:px-6 md:py-3 bg-gold text-deepNavy rounded-full hover:bg-hoverGold transition font-semibold text-sm md:text-base"
          >
            Book This Service
          </button>
        </div>
      </div>
    </div>
  );
}
