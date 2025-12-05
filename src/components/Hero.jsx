export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative"
      style={{
        backgroundImage: "url('/src/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-8xl fade-up">
        <h2 className="text-5xl md:text-5xl font-display text-gold font-extrabold mb-6 animate-fade-up drop-shadow-lg">
          Making Every Moment Unforgettable
        </h2>
        <p className="text-xl md:text-2xl text-softWhite mb-8 drop-shadow-md">
          Bespoke events, luxurious decorations, and memorable experiences crafted just for you.
        </p>
        <button
          onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
          className="px-7 py-3 text-white font-semibold bg-black rounded-full hover:bg-white hover:text-black transition"
        >
          Book an Event
        </button>
      </div>
    </section>
  );
}
