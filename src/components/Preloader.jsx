import React, { useState, useEffect } from "react";

export default function Preloader() {
  const [phase, setPhase] = useState(0);
  const [progress, setProgress] = useState(0);

  const phrases = [
    "T&S ELITE EVENTS",
    "Elegance in Every Detail",
    "Where Vision Becomes a Masterpiece",
    "Your Event, Our Signature Touch",
    "Welcome..."
  ];

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    // Phase transitions
    const phaseTimings = [0, 1000, 2000, 3000, 4000];
    const timers = phaseTimings.map((timing, index) => {
      return setTimeout(() => setPhase(index), timing);
    });

    return () => {
      clearInterval(progressInterval);
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Rotating golden rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
          <div className="absolute inset-0 border border-[#D4AF37]/10 rounded-full animate-rotate-slow" />
          <div 
            className="absolute inset-8 border border-[#D4AF37]/20 rounded-full animate-rotate-slow"
            style={{ animationDirection: 'reverse', animationDuration: '25s' }}
          />
          <div 
            className="absolute inset-16 border border-[#D4AF37]/15 rounded-full animate-rotate-slow"
            style={{ animationDuration: '30s' }}
          />
        </div>

        {/* Floating sparkles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `sparkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}

        {/* Corner decorations */}
        <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-[#D4AF37]/40" />
        <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-[#D4AF37]/40" />
        <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-[#D4AF37]/40" />
        <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-[#D4AF37]/40" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6">
        {/* Logo mark */}
        <div className="mb-8 relative">
          <div 
            className={`
              w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full 
              border-2 border-[#D4AF37] 
              flex items-center justify-center
              transition-all duration-1000
              ${phase >= 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
            `}
            style={{
              boxShadow: '0 0 60px rgba(212, 175, 55, 0.3), inset 0 0 40px rgba(212, 175, 55, 0.1)'
            }}
          >
            <span className="text-3xl md:text-4xl font-display font-bold gradient-text">
              T&S
            </span>
          </div>
          
          {/* Pulsing glow */}
          <div className="absolute inset-0 w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full bg-[#D4AF37]/10 animate-pulse-gold" />
        </div>

        {/* Dynamic text */}
        <div className="h-32 flex flex-col items-center justify-center">
          {phrases.map((phrase, index) => (
            <div
              key={index}
              className={`
                absolute transition-all duration-700
                ${phase === index ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}
              `}
            >
              {index === 0 ? (
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-[0.2em] gradient-text">
                  {phrase}
                </h1>
              ) : index === phrases.length - 1 ? (
                <h2 className="text-4xl md:text-6xl font-display font-bold text-[#F5E7C4]">
                  {phrase}
                </h2>
              ) : (
                <p className="text-xl md:text-2xl lg:text-3xl font-serif text-[#F5E7C4]/90 italic">
                  {phrase}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-12 w-64 md:w-80 mx-auto">
          <div className="h-[2px] bg-[#D4AF37]/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#D4AF37] via-[#F5E7C4] to-[#D4AF37] transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-4 text-sm text-[#D4AF37]/60 tracking-widest uppercase font-medium">
            {progress}% Loading Excellence...
          </p>
        </div>

        {/* Decorative line */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <div className="w-2 h-2 bg-[#D4AF37] rotate-45 animate-pulse-gold" />
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-8 text-center">
        <p className="text-xs text-[#D4AF37]/40 tracking-[0.3em] uppercase">
          Premium Event Planning • Lagos, Nigeria
        </p>
      </div>
    </div>
  );
}
