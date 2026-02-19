import React, { useEffect, useRef, useState } from "react";

export default function About() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] py-20 md:py-32 px-4 md:px-6 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#0F5132]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className={`
          text-center mb-16
          transition-all duration-1000
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <span className="text-[#D4AF37] text-xs md:text-sm font-semibold tracking-[0.3em] uppercase">
            Who We Are
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white">
            About <span className="gradient-text">T&S Elite Events</span>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <div className="w-2 h-2 bg-[#D4AF37] rotate-45" />
            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
        </div>

        {/* Main intro */}
        <div className={`
          text-center max-w-4xl mx-auto mb-20
          transition-all duration-1000 delay-200
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            At <span className="text-[#D4AF37] font-semibold">T&S Elite Events</span>, we curate 
            refined celebrations for clients who value elegance, intention, and flawless execution. 
            Rooted in Nigeria's vibrant culture and elevated by global luxury standards, we transform 
            every event into a <span className="text-[#F5E7C4]">timeless experience</span>.
          </p>
        </div>

        {/* Story section */}
        <div className={`
          relative p-8 md:p-12 rounded-3xl
          bg-gradient-to-br from-[#1a1a1a] to-[#141414]
          border border-[#D4AF37]/20
          mb-16
          transition-all duration-1000 delay-300
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          {/* Decorative corners */}
          <div className="decorative-corner top-left" />
          <div className="decorative-corner top-right" />
          <div className="decorative-corner bottom-left" />
          <div className="decorative-corner bottom-right" />

          <h3 className="text-2xl md:text-3xl font-display font-bold text-[#F5E7C4] mb-6 text-center">
            Our Story
          </h3>

          <div className="space-y-5 text-white/75 leading-relaxed max-w-3xl mx-auto">
            <p className="text-base md:text-lg">
              T&S Elite Events was born from a deep passion for beauty, precision, and intentional celebration. 
              What started as an admiration for décor and ambience has evolved into a trusted luxury event brand, 
              recognised across Nigeria for professionalism, tasteful styling, and meticulous attention to detail.
            </p>
            <p className="text-base md:text-lg">
              We believe events should not only be visually stunning but feel effortless for our clients and 
              unforgettable for their guests. Every celebration we handle reflects our signature touch — 
              <span className="text-[#D4AF37]"> a masterpiece of elegance and excellence</span>.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className={`
            p-8 rounded-2xl
            bg-gradient-to-br from-[#D4AF37]/10 to-transparent
            border border-[#D4AF37]/30
            transition-all duration-1000 delay-400
            ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
          `}>
            <div className="w-14 h-14 rounded-xl bg-[#D4AF37] flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-xl md:text-2xl font-display font-bold text-white mb-4">
              Our Mission
            </h4>
            <p className="text-white/70 leading-relaxed">
              To design and deliver exceptional events that blend creativity, elegance, and seamless 
              execution — ensuring a stress-free experience and beautiful results for every client 
              who trusts us with their celebration.
            </p>
          </div>

          {/* Vision */}
          <div className={`
            p-8 rounded-2xl
            bg-gradient-to-br from-[#0F5132]/20 to-transparent
            border border-[#0F5132]/40
            transition-all duration-1000 delay-500
            ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
          `}>
            <div className="w-14 h-14 rounded-xl bg-[#0F5132] flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h4 className="text-xl md:text-2xl font-display font-bold text-white mb-4">
              Our Vision
            </h4>
            <p className="text-white/70 leading-relaxed">
              To become the most trusted and admired luxury event brand across Nigeria and beyond, 
              known for excellence, consistency, and timeless design that sets new standards 
              in the industry.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className={`
          mt-16 text-center
          transition-all duration-1000 delay-600
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <h4 className="text-xl font-display font-bold text-[#D4AF37] mb-8">
            Our Core Values
          </h4>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {["Excellence", "Elegance", "Integrity", "Creativity", "Precision"].map((value, index) => (
              <span 
                key={index}
                className="
                  px-6 py-3 rounded-full
                  bg-[#1a1a1a] border border-[#D4AF37]/30
                  text-white/80 text-sm font-medium tracking-wider uppercase
                  hover:border-[#D4AF37] hover:text-[#D4AF37]
                  transition-all duration-300
                "
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
