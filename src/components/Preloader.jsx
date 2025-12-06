import React, { useEffect, useState } from "react";

export default function Preloader({ onFinish }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false);
      if (onFinish) onFinish();
    }, 2200);
    return () => clearTimeout(t);
  }, [onFinish]);

  if (!loading) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ background: "linear-gradient(135deg, rgba(27,31,59,0.95), rgba(20,26,50,0.88))" }}
    >
      <div className="flex flex-col items-center gap-6 text-center scale-in">
        <svg width="260" height="140" viewBox="0 0 260 140" xmlns="http://www.w3.org/2000/svg" className="block">
          <defs>
            <filter id="shadow2" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#000" floodOpacity="0.25"/>
            </filter>
            <linearGradient id="goldGrad" x1="0" x2="1">
              <stop offset="0%" stopColor="#F7D88A" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
          </defs>

          {/* Single text element for T&S */}
          <text
            x="30"
            y="90"
            fontFamily="Cinzel, serif"
            fontSize="76"
            fill="none"
            stroke="url(#goldGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="220"
            strokeDashoffset="220"
            filter="url(#shadow2)"
          >
            T&S
            <animate attributeName="stroke-dashoffset" from="220" to="0" dur="2.0s" fill="freeze" />
          </text>

          {/* Optional decorative ribbon/path */}
          <path
            d="M60 42 C88 6, 170 6, 200 42 S230 110, 150 110"
            stroke="url(#goldGrad)"
            strokeWidth="7"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="420"
            strokeDashoffset="420"
          >
            <animate attributeName="stroke-dashoffset" from="420" to="0" dur="1.6s" fill="freeze" />
          </path>
        </svg>

        <div>
          <h1 className="text-2xl font-display text-gold" style={{ letterSpacing: "1px" }}>T&S ELITE EVENTS</h1>
          <p className="mt-1 text-sm text-gold">Bespoke Events & Exquisite Decorations Luxury At Your Budget</p>
        </div>
      </div>
    </div>
  );
}
