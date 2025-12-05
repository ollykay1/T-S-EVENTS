export default function Services() {
  const services = [
    { title: "Birthday Party", desc: "Fun, creative, and unforgettable birthday celebrations.", color: "bg-gold border border-black/40" },
    { title: "Wedding Planning", desc: "Elegant weddings with attention to every detail.", color: "bg-gold border border-black/40" },
    { title: "Burial & Memorials", desc: "Respectful and beautiful memorial events.", color: "bg-gold border border-black/40" },
    { title: "Corporate Events", desc: "Professional and polished corporate events.", color: "bg-gold border border-black/40" },
    { title: "Engagements", desc: "Romantic and luxurious engagement parties.", color: "bg-gold border border-black/40" },
    { title: "Private Parties", desc: "Exclusive, high-end private events.", color: "bg-gold border border-black/40" },
  ];

  return (
    <section id="services" className="min-h-screen py-24 px-6 bg-gray-200 fade-up">
      <h2 className="text-5xl font-display text-black text-center mb-16">Our Services Inculde</h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {services.map((service, idx) => (
          <div key={idx} className={`p-12 rounded-3xl shadow-lg hover:shadow-2xl transition ${service.color}`}>
            <h3 className="text-3xl font-display text-deepNavy mb-4">{service.title}</h3>
            <p className="text-gray-800 text-lg">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
