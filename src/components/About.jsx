import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-gray-200 py-28 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-5xl font-display text-black mb-6">
          About T&amp;S Elite Events
        </h2>

        <p className="text-lg text-black/80 leading-relaxed max-w-3xl mx-auto">
          At <span className="text-[#D4AF37] font-semibold">T&amp;S Elite Events</span>, we curate refined celebrations for clients who value elegance,
          intention, and flawless execution. Rooted in Nigeria’s vibrant culture and elevated by global
          luxury standards, we transform every events into a timeless experience.
        </p>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto my-12"></div>

        {/* Brand Story */}
        <div className="space-y-6 max-w-4xl mx-auto text-black/80 leading-relaxed">
          <h3 className="text-3xl font-display text-black">
            Our Story
          </h3>

          <p>
            T&amp;S Elite Events was born from a passion for beauty, precision, and intentional celebration.
            What started as an admiration for décor and ambience has evolved into a trusted luxury event brand,
            recognised for professionalism, tasteful styling, and attention to detail.
          </p>

          <p>
            We believe events should not only be visually stunning but feel effortless for our clients and
            unforgettable for their guests. Every celebration we handle reflects our signature touch.
          </p>
        </div>

        {/* Divider */}
        <div className="w-12 h-[2px] bg-black mx-auto my-12 opacity-20"></div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 text-left mt-10">
          <div>
            <h4 className="text-2xl font-display text-black mb-4">
              Our Mission
            </h4>
            <p className="text-black/80 leading-relaxed">
              To design and deliver exceptional events that blend creativity, elegance,
              and seamless execution — ensuring a stress-free experience and beautiful results for every client.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-display text-black mb-4">
              Our Vision
            </h4>
            <p className="text-black/80 leading-relaxed">
              To become the most trusted and admired luxury event brand across Nigeria and beyond,
              known for excellence, consistency, and timeless design.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
