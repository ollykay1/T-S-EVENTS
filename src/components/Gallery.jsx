import React from "react";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-ivory">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-primary mb-10">Gallery</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="h-60 bg-gray-200 rounded-lg"></div>
          <div className="h-60 bg-gray-200 rounded-lg"></div>
          <div className="h-60 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}
