import React, { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/4bg.avif')`,
        }}
      />

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F5132]/20 via-transparent to-[#D4AF37]/10" />
      
      {/* Animated particles/sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#D4AF37] rounded-full opacity-60"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-24 left-6 md:left-12 w-16 md:w-24 h-16 md:h-24 border-l-2 border-t-2 border-[#D4AF37]/50" />
      <div className="absolute top-24 right-6 md:right-12 w-16 md:w-24 h-16 md:h-24 border-r-2 border-t-2 border-[#D4AF37]/50" />
      <div className="absolute bottom-12 left-6 md:left-12 w-16 md:w-24 h-16 md:h-24 border-l-2 border-b-2 border-[#D4AF37]/50" />
      <div className="absolute bottom-12 right-6 md:right-12 w-16 md:w-24 h-16 md:h-24 border-r-2 border-b-2 border-[#D4AF37]/50" />

      {/* Emerald accent glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F5132]/30 to-transparent" />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Pre-headline */}
        <div 
          className={`
            mb-6 flex items-center justify-center gap-4
            transition-all duration-1000
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <div className="w-12 md:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <span className="text-[#D4AF37] text-xs md:text-sm font-semibold tracking-[0.3em] uppercase">
            Luxury Event Planning
          </span>
          <div className="w-12 md:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>

        {/* Main headline */}
        <h1
          className={`
            font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            font-bold leading-tight mb-6
            transition-all duration-1000 delay-200
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <span className="text-white">Your Event,</span>
          <br />
          <span className="gradient-text">Our Signature Touch</span>
        </h1>

        {/* Decorative line */}
        <div 
          className={`
            flex items-center justify-center gap-3 mb-8
            transition-all duration-1000 delay-300
            ${loaded ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <div className="w-16 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]" />
          <div className="w-3 h-3 bg-[#D4AF37] rotate-45 animate-pulse-gold" />
          <div className="w-16 md:w-24 h-[2px] bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]" />
        </div>

        {/* Subheadline */}
        <p
          className={`
            text-base sm:text-lg md:text-xl font-medium
            text-white/85 tracking-wide
            max-w-2xl mx-auto mb-10 leading-relaxed
            transition-all duration-1000 delay-400
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <span className="text-[#F5E7C4]">Premium designs.</span> Flawless coordination.{" "}
          <span className="text-[#F5E7C4]">Timeless experiences</span> for weddings, 
          corporate events, and private celebrations across Nigeria.
        </p>

        {/* CTA Buttons */}
        <div
          className={`
            flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6
            transition-all duration-1000 delay-500
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          {/* Primary Button */}
          <button
            onClick={() =>
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
            }
            className="
              relative group px-8 sm:px-10 py-4
              bg-gradient-to-r from-[#D4AF37] to-[#F5E7C4]
              rounded-full text-black font-bold
              text-sm sm:text-base tracking-wide uppercase
              shadow-lg shadow-[#D4AF37]/40
              hover:shadow-[#D4AF37]/60 hover:scale-105
              transition-all duration-300
              overflow-hidden
            "
          >
            <span className="relative z-10">Explore Services</span>
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>

          {/* Secondary Button */}
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="
              relative px-8 sm:px-10 py-4
              bg-transparent rounded-full
              text-white font-bold
              text-sm sm:text-base tracking-wide uppercase
              border-2 border-white/50
              hover:border-[#0F5132] hover:bg-[#0F5132]
              hover:shadow-lg hover:shadow-[#0F5132]/40
              transition-all duration-300
            "
          >
            Book Your Event
          </button>
        </div>

        {/* Trust indicators */}
        <div 
          className={`
            mt-14 flex flex-wrap items-center justify-center gap-6 md:gap-10
            transition-all duration-1000 delay-700
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          {[
            { number: "500+", label: "Events Delivered" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "5★", label: "Average Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-display font-bold text-[#D4AF37]">
                {stat.number}
              </div>
              <div className="text-xs text-white/60 tracking-wider uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`
          absolute bottom-8 left-1/2 -translate-x-1/2
          transition-all duration-1000 delay-1000
          ${loaded ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce-gentle">
          <span className="text-xs text-white/50 tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-[#D4AF37] rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
