import React from "react";
import heroBg from "../images/4bg.avif";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative
        h-screen md:h-[90vh]
        flex items-center justify-center
        px-4"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center">
        {/* Headline */}
       <h1
  className="
    font-display
    text-3xl md:text-5xl lg:text-[3.2rem]
    font-semibold
    text-white
    leading-tight
    mb-6
    fade-up
  "
>
  Your Event,{" "}
  <span className="text-[#D4AF37] font-semibold">
    Our Signature Touch
  </span>
</h1>

        {/* Subheadline */}
        <p
          className="
            text-lg md:text-xl
            font-medium
            text-white/80
            tracking-wide
            max-w-xl
            mx-auto
            mb-10
            fade-up
          "
          style={{ animationDelay: "0.12s" }}
        >
          Premium designs. Flawless coordination. Timeless experiences.
        </p>

        {/* Buttons */}
        <div
          className="
            flex flex-col sm:flex-row items-center justify-center gap-5
            fade-up
          "
          style={{ animationDelay: "0.24s" }}
        >
          {/* Primary */}
          <button
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="
              px-10 py-3.5
              rounded-full
              bg-[#D4AF37]
              text-black
              font-semibold
              tracking-wide
              shadow-lg
              hover:bg-[#F5E7C4]
              hover:text-black
              hover:shadow-xl
              transition-all duration-300
            "
          >
            Explore Services
          </button>

          {/* Secondary */}
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="
              px-10 py-3.5
              rounded-full
              bg-transparent
              text-white
              font-semibold
              tracking-wide
              border border-white/70
              hover:bg-[#F5E7C4]
              hover:border-[#0F5132]
              hover:text-black
              transition-all duration-300
            "
          >
            Book an Event
          </button>
        </div>
      </div>
    </section>
  );
}
