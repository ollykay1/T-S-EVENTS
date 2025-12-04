import React from "react";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-primary mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Event Planning</h3>
            <p>We plan your events perfectly from start to finish.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Decorations</h3>
            <p>Beautiful and unique decorations tailored to your theme.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Catering</h3>
            <p>Delicious food and drinks for every occasion.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
