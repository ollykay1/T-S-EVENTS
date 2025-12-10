import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#D4AF37]/20 px-6 py-2">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <div className="text-lg font-serif text-[#F5E7C4]">
            T&S Elite Events
          </div>
          <div className="text-xs text-[#bfb6a5]">
            Satisfaction & Your Budget
          </div>
        </div>

        <div className="text-xs text-[#bfb6a5]">
          © {new Date().getFullYear()} T&S Elite Events. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
