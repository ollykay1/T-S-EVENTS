export default function Gallery() {
  return (
    <section id="gallery" className="min-h-screen bg-gray-300 py-24 px-6">
      <h4 className="text-5xl font-display text-gray-900 text-center mb-16">Gallery</h4>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {[1,2,3,4,5,6,7,8,9].map((img) => (
          <div key={img} className="bg-babyPink rounded-2xl h-72 shadow-lg hover:scale-105 transform transition-all"></div>
        ))}
      </div>
    </section>
  );
}
