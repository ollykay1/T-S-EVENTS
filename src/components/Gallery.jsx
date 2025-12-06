import React, { useState, useEffect } from "react";

export default function Gallery() {
  const galleryItems = [
    {
      title: "Wedding Highlights",
      subtitle: "Bespoke ceremonies & decor",
      images: ["/images/wedding1.jpg", "/images/wedding2.jpg", "/images/wedding3.jpg"],
    },
    {
      title: "Birthday Celebrations",
      subtitle: "Joyful moments for all ages",
      images: ["/images/birthday1.jpg", "/images/birthday2.jpg", "/images/birthday3.jpg"],
    },
    {
      title: "Corporate Events",
      subtitle: "Professional and polished gatherings",
      images: ["/images/corporate1.jpg", "/images/corporate2.jpg", "/images/corporate3.jpg"],
    },
    {
      title: "Engagement Parties",
      subtitle: "Romantic and intimate settings",
      images: ["/images/engagement1.jpg", "/images/engagement2.jpg", "/images/engagement3.jpg"],
    },
    {
      title: "Private Soirées",
      subtitle: "Exclusive luxury experiences",
      images: ["/images/private1.jpg", "/images/private2.jpg", "/images/private3.jpg"],
    },
    {
      title: "Anniversary Moments",
      subtitle: "Celebrate milestones elegantly",
      images: ["/images/anniversary1.jpg", "/images/anniversary2.jpg", "/images/anniversary3.jpg"],
    },
    {
      title: "Themed Events",
      subtitle: "Immersive experiences & decor",
      images: ["/images/themed1.jpg", "/images/themed2.jpg", "/images/themed3.jpg"],
    },
    {
      title: "Fundraisers & Galas",
      subtitle: "Elegant charitable events",
      images: ["/images/fundraiser1.jpg", "/images/fundraiser2.jpg", "/images/fundraiser3.jpg"],
    },
    {
      title: "Cultural Ceremonies",
      subtitle: "Respectful & stylish arrangements",
      images: ["/images/cultural1.jpg", "/images/cultural2.jpg", "/images/cultural3.jpg"],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [transition, setTransition] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setCarouselIndex(0);
    setTransition(false);
  };
  const closeLightbox = () => setActiveIndex(null);

  const changeImage = (next) => {
    const images = galleryItems[activeIndex].images;
    setTransition(true);
    setTimeout(() => {
      setCarouselIndex((prev) => (next ? (prev + 1) % images.length : (prev - 1 + images.length) % images.length));
      setTransition(false);
    }, 300);
  };

  return (
    <section id="gallery" className="min-h-screen bg-babyPink py-24 px-6">
      <h2 className="text-5xl font-display text-deepNavy text-center mb-12">Gallery</h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {galleryItems.map((item, i) => (
          <div
            key={i}
            className={`relative h-72 rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all ${
              loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
            onClick={() => openLightbox(i)}
          >
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-full h-full object-cover rounded-2xl brightness-90 hover:brightness-100 transition"
            />
            <div className="absolute inset-0 bg-black/25 opacity-0 hover:opacity-100 transition flex flex-col justify-end p-4 rounded-2xl">
              <h3 className="text-lg font-semibold text-ivory">{item.title}</h3>
              <p className="text-sm text-ivory/80">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={closeLightbox}
        >
          <div
            className="bg-softWhite rounded-2xl max-w-3xl w-full p-6 relative flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white font-bold flex items-center justify-center"
              onClick={closeLightbox}
            >
              ✕
            </button>

            <h3 className="text-3xl font-display text-deepNavy mb-2">{galleryItems[activeIndex].title}</h3>
            <p className="text-gray-700 mb-4 text-center">{galleryItems[activeIndex].subtitle}</p>

            <div className="relative w-full h-64 flex items-center justify-center mb-4 overflow-hidden rounded-lg">
              <img
                key={carouselIndex}
                src={galleryItems[activeIndex].images[carouselIndex]}
                alt={galleryItems[activeIndex].title}
                className={`rounded-lg w-full h-full object-cover transition-opacity duration-300 ${
                  transition ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
              />

              <button
                onClick={() => changeImage(false)}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gold text-deepNavy rounded-full w-10 h-10 flex items-center justify-center hover:bg-hoverGold transition"
              >
                ‹
              </button>
              <button
                onClick={() => changeImage(true)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gold text-deepNavy rounded-full w-10 h-10 flex items-center justify-center hover:bg-hoverGold transition"
              >
                ›
              </button>
            </div>

            <div className="flex justify-center gap-2">
              {galleryItems[activeIndex].images.map((_, idx) => (
                <span
                  key={idx}
                  onClick={() => setCarouselIndex(idx)}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    idx === carouselIndex ? "bg-gold" : "bg-gray-400"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
