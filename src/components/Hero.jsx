import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/src/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-20 max-w-3xl px-6 fade-up">
        <h1 className="text-5xl md:text-6xl font-display font-extrabold text-black drop-shadow-lg mb-4">
          Luxury Experiences <span className="text-black">Within Your Budget</span>
        </h1>

        <p className="text-lg md:text-xl text-ivory/95 drop-shadow-md mb-8">
          T&S Elite Events delivers bespoke weddings, corporate galas, and private parties beautifully styled and executed at their budget while ensuring full satisfaction.
        </p>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 rounded-full bg-gold text-black font-semibold hover:bg-black hover:text-white transition"
          >
            Explore Services
          </button>

          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 rounded-full bg-black text-ivory font-semibold hover:bg-gold hover:text-deepNavy transition"
          >
            Book an Event
          </button>
        </div>
      </div>
    </section>
  );
}
