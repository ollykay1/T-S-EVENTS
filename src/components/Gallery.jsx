import React, { useState, useEffect, useRef } from "react";

export default function Gallery() {
  const galleryItems = [
    {
      title: "Wedding Ceremonies",
      subtitle: "Elegant celebrations styled with timeless beauty",
      images: ["wecd1.jpeg", "wc1.jpeg", "/wc2.jpeg", "/wc4.jpeg"],
    },
    {
      title: "Traditional Weddings",
      subtitle: "Culturally rooted ceremonies with refined coordination",
      images: ["/tw5.jpeg", "/tw1.jpeg", "/tw2.jpeg", "/tw4.jpeg"],
    },
    {
      title: "Engagement & Introduction",
      subtitle: "Meaningful beginnings honoured with beauty",
      images: ["/en4.jpeg", "/en2.jpeg", "/en3.jfif", "/en5.jpeg", "/en1.jfif"],
    },
    {
      title: "Birthday Celebrations",
      subtitle: "Personal milestones styled with joy and elegance",
      images: ["/bd4.jfif", "/bd2.jfif", "/bd3.jfif", "/bd1.jfif", "/bd5.jfif"],
    },
    {
      title: "Naming Ceremonies",
      subtitle: "Family-centred gatherings with warmth and care",
      images: ["/nc1.jpg", "/nc2.jpg"],
    },
    {
      title: "Anniversary Celebrations",
      subtitle: "Years of love honoured in quiet elegance",
      images: ["/ac1.jfif", "/ac2.jfif", "/ac3.jfif"],
    },
    {
      title: "Burial & Memorial Events",
      subtitle: "Dignified farewells coordinated with grace",
      images: ["/bm.jfif", "/bm2.jfif", "/bm3.jfif"],
    },
    {
      title: "Certifications & Accreditations",
      subtitle: "Professional certifications validating our standards",
      images: ["/ca1.png"],
    },
    {
      title: "Our Event Specialists",
      subtitle: "The team behind every exceptional detail",
      images: ["/es1.jpeg"],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);

  const autoSlideRef = useRef(null);
  const touchStartX = useRef(null);
  const revealRefs = useRef([]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  // Reveal on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("reveal-active");
        }),
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Auto slide every 4 seconds
  useEffect(() => {
    if (activeIndex === null || userInteracted) return;

    autoSlideRef.current = setInterval(() => {
      setCarouselIndex((p) => (p + 1) % galleryItems[activeIndex].images.length);
    }, 4000);

    return () => clearInterval(autoSlideRef.current);
  }, [activeIndex, userInteracted, galleryItems]);

  const openLightbox = (i) => {
    setActiveIndex(i);
    setCarouselIndex(0);
    setUserInteracted(false);
  };

  const closeLightbox = () => {
    clearInterval(autoSlideRef.current);
    setActiveIndex(null);
  };

  const nextImage = () => {
    setUserInteracted(true);
    setCarouselIndex((p) => (p + 1) % galleryItems[activeIndex].images.length);
  };

  const prevImage = () => {
    setUserInteracted(true);
    setCarouselIndex(
      (p) =>
        (p - 1 + galleryItems[activeIndex].images.length) %
        galleryItems[activeIndex].images.length
    );
  };

  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? nextImage() : prevImage();
    touchStartX.current = null;
  };

  return (
    <section
      id="gallery"
      className="relative py-20 md:py-32 px-4 md:px-6 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#0F5132]/10 rounded-full blur-3xl" />
      </div>

      {/* Section header */}
      <div className="text-center mb-16 relative z-10">
        <span className="text-[#D4AF37] text-xs md:text-sm font-semibold tracking-[0.3em] uppercase">
          Our Portfolio
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white">
          Our <span className="gradient-text">Signature</span> Moments
        </h2>
        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <div className="w-2 h-2 bg-[#D4AF37] rotate-45" />
          <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>
        <p className="mt-6 text-white/60 max-w-2xl mx-auto text-base md:text-lg">
          A curated showcase of celebrations we've had the privilege to design and execute.
        </p>
      </div>

      {/* Gallery grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
        {galleryItems.map((item, i) => (
          <div
            key={i}
            ref={(el) => (revealRefs.current[i] = el)}
            onClick={() => openLightbox(i)}
            className="reveal-card group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-[#1a1a1a]"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {/* Image */}
            <img
              loading="lazy"
              src={item.images[0]}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Border glow on hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4AF37]/50 rounded-2xl transition-all duration-300" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-display font-bold text-white mb-1 group-hover:text-[#F5E7C4] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {item.subtitle}
              </p>
              
              {/* View indicator */}
              <div className="mt-3 flex items-center gap-2 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-semibold tracking-wide uppercase">View Gallery</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>

            {/* Image count badge */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs text-white/80">
              {item.images.length} {item.images.length === 1 ? 'image' : 'images'}
            </div>
          </div>
        ))}
      </div>

      {/* MODAL / LIGHTBOX */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative bg-gradient-to-br from-[#141414] to-[#0a0a0a] max-w-5xl w-full rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#D4AF37]/50 z-20" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#D4AF37]/50 z-20" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#D4AF37]/50 z-20" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#D4AF37]/50 z-20" />

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-30 h-10 w-10 rounded-full bg-black/60 backdrop-blur-sm border border-[#D4AF37]/50 text-white flex items-center justify-center text-xl hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
              aria-label="Close"
            >
              ×
            </button>

            {/* Header */}
            <div className="p-6 pb-4 text-center">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                {galleryItems[activeIndex].title}
              </h3>
              <p className="text-[#D4AF37] mt-1">
                {galleryItems[activeIndex].subtitle}
              </p>
            </div>

            {/* Image container */}
            <div className="relative aspect-[16/10] md:aspect-[16/9] mx-4 md:mx-6 rounded-2xl overflow-hidden bg-black">
              <img
                src={galleryItems[activeIndex].images[carouselIndex]}
                alt=""
                className="w-full h-full object-contain transition-all duration-500"
              />

              {/* Navigation arrows */}
              {galleryItems[activeIndex].images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="modal-arrow left-3 md:left-4"
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextImage}
                    className="modal-arrow right-3 md:right-4"
                    aria-label="Next image"
                  >
                    ›
                  </button>
                </>
              )}

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/70 backdrop-blur-sm rounded-full text-white text-sm">
                {carouselIndex + 1} / {galleryItems[activeIndex].images.length}
              </div>
            </div>

            {/* Thumbnail dots */}
            <div className="flex justify-center gap-2 p-4">
              {galleryItems[activeIndex].images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setUserInteracted(true);
                    setCarouselIndex(idx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === carouselIndex
                      ? "bg-[#D4AF37] w-6"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
