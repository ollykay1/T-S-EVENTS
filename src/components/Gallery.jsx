import React, { useState, useEffect, useRef } from "react";

export default function Gallery() {
  const galleryItems = [
    {
      title: "Wedding Ceremonies",
      subtitle: "Elegant celebrations styled with timeless restraint",
      images: ["/images/wedding1.jpg", "/images/wedding2.jpg", "/images/wedding3.jpg"],
    },
    {
      title: "Traditional Weddings",
      subtitle: "Culturally rooted ceremonies delivered with refined coordination",
      images: ["/images/traditional1.jpg", "/images/traditional2.jpg", "/images/traditional3.jpg"],
    },
    {
      title: "Engagement & Introduction",
      subtitle: "Meaningful beginnings honoured with beauty and respect",
      images: ["/images/engagement1.jpg", "/images/engagement2.jpg", "/images/engagement3.jpg"],
    },
    {
      title: "Birthday Celebrations",
      subtitle: "Personal milestone moments styled to feel intimate and joyful",
      images: ["/images/birthday1.jpg", "/images/birthday2.jpg", "/images/birthday3.jpg"],
    },
    {
      title: "Naming Ceremonies",
      subtitle: "Warm, family-centred gatherings handled with care",
      images: ["/images/naming1.jpg", "/images/naming2.jpg", "/images/naming3.jpg"],
    },
    {
      title: "Anniversary Celebrations",
      subtitle: "Years of love honoured in an atmosphere of quiet elegance",
      images: ["/images/anniversary1.jpg", "/images/anniversary2.jpg", "/images/anniversary3.jpg"],
    },
    {
      title: "Burial & Memorial Events",
      subtitle: "Dignified farewells coordinated with sensitivity and grace",
      images: ["/images/burial1.jpg", "/images/burial2.jpg", "/images/burial3.jpg"],
    },
    {
      title: "Certifications & Accreditations",
      subtitle: "Professional certifications validating our event standards",
      images: ["../images/cert1.pdf", "/images/4bg.avif", "/images/cert3.jpg"],
    },
    {
      title: "Our Event Specialists",
      subtitle: "The planners, designers, and coordinators behind every detail",
      images: ["/images/team1.jpg", "/images/team2.jpg", "/images/team3.jpg"],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);

  const autoSlideRef = useRef(null);
  const touchStartX = useRef(null);
  const revealRefs = useRef([]);

  /* Lock body scroll when modal is open */
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [activeIndex]);

  /* Reveal on scroll */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("reveal-active");
        }),
      { threshold: 0.12 }
    );

    revealRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* Auto slide */
  useEffect(() => {
    if (activeIndex === null || userInteracted) return;

    autoSlideRef.current = setInterval(() => {
      setCarouselIndex(
        p => (p + 1) % galleryItems[activeIndex].images.length
      );
    }, 3000);

    return () => clearInterval(autoSlideRef.current);
  }, [activeIndex, userInteracted]);

  const openLightbox = i => {
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
    setCarouselIndex(
      p => (p + 1) % galleryItems[activeIndex].images.length
    );
  };

  const prevImage = () => {
    setUserInteracted(true);
    setCarouselIndex(
      p =>
        (p - 1 + galleryItems[activeIndex].images.length) %
        galleryItems[activeIndex].images.length
    );
  };

  const onTouchStart = e => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = e => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? nextImage() : prevImage();
    touchStartX.current = null;
  };

  return (
    <section
      id="gallery"
      className="relative py-28 px-6 bg-[#0B0D10] overflow-hidden"
    >
      {/* Grain overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/grain.png')] opacity-[0.06] mix-blend-overlay" />

      <h2 className="text-5xl font-serif text-[#F5F0E6] text-center mb-16">
        Our Signature Moments
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {galleryItems.map((item, i) => (
          <div
            key={i}
            ref={el => (revealRefs.current[i] = el)}
            onClick={() => openLightbox(i)}
            className="reveal-card relative h-80 rounded-3xl overflow-hidden cursor-pointer bg-[#12141A]"
          >
            <img
              loading="lazy"
              src={item.images[0]}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-[900ms] hover:scale-[1.04]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-serif text-[#F5F0E6] mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-[#CFC7B8] leading-relaxed">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center px-4"
          onClick={closeLightbox}
        >
          <div
            className="bg-[#12141A] max-w-4xl w-full rounded-3xl p-8 border border-[#D6B46A]/30"
            onClick={e => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <h3 className="text-3xl font-serif text-[#F5F0E6] mb-2 text-center">
              {galleryItems[activeIndex].title}
            </h3>
            <p className="text-[#CFC7B8] text-center mb-6">
              {galleryItems[activeIndex].subtitle}
            </p>

            <div className="relative h-72 rounded-2xl overflow-hidden">
              <img
                src={galleryItems[activeIndex].images[carouselIndex]}
                alt=""
                className="w-full h-full object-cover transition-all duration-700"
              />

              <button onClick={prevImage} className="modal-arrow left-4">
                ‹
              </button>
              <button onClick={nextImage} className="modal-arrow right-4">
                ›
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .reveal-card {
          opacity: 0;
          transform: translateY(28px);
          transition: all 700ms ease;
        }
        .reveal-card.reveal-active {
          opacity: 1;
          transform: translateY(0);
        }
        .modal-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 42px;
          height: 42px;
          border-radius: 9999px;
          background: #D6B46A;
          color: #111;
          font-size: 22px;
        }
      `}</style>
    </section>
  );
}
