import React, { useEffect, useState } from "react";

export default function Preloader({ onFinish }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Preloader finished");
      setLoading(false);
      if (onFinish) onFinish();
    }, 2500); // 2.5 seconds
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ivory">
      <div className="flex flex-col items-center gap-6">
        <svg
          width="220"
          height="120"
          viewBox="0 0 220 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-floaty"
        >
          <defs>
            <filter
              id="shadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feDropShadow
                dx="0"
                dy="6"
                stdDeviation="8"
                floodColor="#000"
                floodOpacity="0.08"
              />
            </filter>
          </defs>
          <text
            x="10"
            y="70"
            fontFamily="Cinzel, serif"
            fontSize="60"
            fill="#0B3D91"
          >
            T
          </text>
          <text
            x="120"
            y="70"
            fontFamily="Cinzel, serif"
            fontSize="60"
            fill="#0B3D91"
            opacity="0.95"
          >
            S
          </text>
          <path
            d="M48 45 C70 10, 150 10, 170 45 S200 95, 120 95"
            stroke="#D4AF37"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#shadow)"
            strokeDasharray="400"
            strokeDashoffset="400"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="400"
              to="0"
              dur="1.8s"
              fill="freeze"
            />
          </path>
        </svg>

        <div className="text-center">
          <h1 className="text-2xl font-semibold text-primary">
            T&S Event Planner
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Bespoke events & exquisite decorations
          </p>
        </div>

        <button
          onClick={() => {
            setLoading(false);
            if (onFinish) onFinish();
          }}
          className="px-4 py-2 rounded-md border border-primary text-primary text-sm hover:bg-primary hover:text-white transition"
        >
          Skip Intro
        </button>
      </div>

      <style>{`
        @keyframes floaty {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
        .animate-floaty { animation: floaty 2.5s ease-in-out; }
      `}</style>
    </div>
  );
}
