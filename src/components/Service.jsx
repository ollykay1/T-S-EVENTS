import React, { useEffect, useRef, useState } from "react";
import ServiceModal from "./ServiceModal";

export default function Services() {
  const services = [
    {
      id: "birthday",
      title: "Birthday Celebrations",
      brief: "Stylish celebrations crafted with care.",
      writeUp: `From playful children’s parties to refined adult celebrations, we design birthday events that feel personal, joyful, and beautifully executed.

Our approach focuses on atmosphere, flow, and unforgettable guest experiences.`,
      list: [
        "Styled themed décor",
        "Custom photo moments",
        "Entertainment coordination",
        "Cake & dessert planning",
        "Full event execution",
      ],
      color: "gold",
    },
    {
      id: "wedding",
      title: "Wedding Planning",
      brief: "Elegant weddings, thoughtfully designed.",
      writeUp: `We plan and style weddings with intention, refinement, and seamless coordination — from concept development to the final celebration.

Every detail is curated to reflect your story, taste, and vision.`,
      list: [
        "Venue styling",
        "Floral installations",
        "Tablescapes & linens",
        "Lighting design",
        "Vendor coordination",
      ],
      color: "white",
    },
    {
      id: "corporate",
      title: "Corporate Events",
      brief: "Polished events with professional impact.",
      writeUp: `We deliver corporate events that align with brand values and objectives while maintaining elegance and efficiency.

Execution is precise, branding is clear, and guest experience is seamless.`,
      list: [
        "Stage & AV setup",
        "Branding elements",
        "Guest registration",
        "Catering coordination",
        "Timeline management",
      ],
      color: "gold",
    },
    {
      id: "burial",
      title: "Burial & Memorials",
      brief: "Dignified and thoughtfully managed services.",
      writeUp: `We provide calm, respectful memorial planning that supports families through smooth coordination and dignified presentation.`,
      list: [
        "Memorial layout",
        "Floral tributes",
        "Program coordination",
        "Venue liaison",
        "Guest support",
      ],
      color: "white",
    },
    {
      id: "engagement",
      title: "Engagements",
      brief: "Romantic celebrations with refined charm.",
      writeUp: `Our engagement events are intimate, elegant, and designed to celebrate meaningful moments in a beautiful setting.`,
      list: [
        "Intimate seating",
        "Mood lighting",
        "Floral styling",
        "Signature cocktails",
        "Photography setup",
      ],
      color: "gold",
    },
    {
      id: "private",
      title: "Private Parties",
      brief: "Exclusive experiences with luxury finishes.",
      writeUp: `From elegant dinners to exclusive soirées, we curate private events that feel refined, personal, and impeccably styled.`,
      list: [
        "Custom menus",
        "Exclusive venues",
        "Luxury styling",
        "Guest management",
        "Entertainment",
      ],
      color: "white",
    },
    {
      id: "ushering",
      title: "Ushering & Guest Management",
      brief: "Professional guest care services.",
      writeUp: `Our trained ushering team ensures guests feel welcomed, guided, and attended to throughout the event with professionalism and warmth.`,
      list: [
        "Trained ushers",
        "Guest seating",
        "VIP assistance",
        "Guest enquiries",
        "Event flow support",
      ],
      color: "gold",
    },
    {
      id: "anniversary",
      title: "Anniversary Celebrations",
      brief: "Milestones celebrated in style.",
      writeUp: `We design anniversary celebrations that honor memories while creating new timeless moments.`,
      list: [
        "Custom décor",
        "Memory displays",
        "Special menus",
        "Entertainment",
        "Surprise moments",
      ],
      color: "white",
    },
    {
      id: "themed",
      title: "Themed Events",
      brief: "Immersive concepts brought to life.",
      writeUp: `We transform ideas into immersive environments using bespoke styling, creative direction, and seamless execution.`,
      list: [
        "Concept development",
        "Set dressing",
        "Props & rentals",
        "Photo activations",
        "On-site direction",
      ],
      color: "gold",
    },
  ];

  const [active, setActive] = useState(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  /* scroll-linked reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        id="services"
        ref={sectionRef}
        className="
          relative bg-[#F7F5F1]
          py-24 md:py-32 px-6
        "
      >
        {/* hero → services continuity */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />

        {/* heading */}
        <div
          className={`
            text-center mb-16 transition-all duration-[900ms]
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <h2 className="text-4xl md:text-5xl font-display text-black">
            Our Signature Touch
          </h2>

          {/* underline draw */}
          <span
            className={`
              block mx-auto mt-4 h-[2px] bg-[#D4AF37]
              transition-all duration-[1200ms] ease-out
              ${visible ? "w-28" : "w-0"}
            `}
          />

          <p className="mt-6 text-gray-600 max-w-xl mx-auto text-sm md:text-base">
            Refined services designed with intention, elegance, and flawless execution.
          </p>
        </div>

        {/* grid */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-9">
          {services.map((s, index) => {
            const isGold = s.color === "gold";

            return (
              <div
                key={s.id}
                className={`
                  rounded-2xl p-7
                  border transition-all duration-[420ms] ease-out
                  shadow-[0_18px_40px_rgba(0,0,0,0.08)]
                  hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(0,0,0,0.14)]
                  focus-within:ring-1 focus-within:ring-[#D4AF37]/30
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                  ${isGold
                    ? "bg-gradient-to-br from-[#D4AF37] to-[#C8A52E] border-black/10"
                    : "bg-[#FFFDF9] border-[#D4AF37]/30"}
                `}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <h3 className="text-2xl font-display mb-2 text-black">
                  {s.title}
                </h3>

                <p className={`text-sm leading-relaxed ${isGold ? "text-black/75" : "text-gray-600"}`}>
                  {s.brief}
                </p>

                {/* ONLY trigger */}
                <button
                  onClick={() => setActive(s)}
                  className="
                    mt-6 inline-flex items-center
                    px-5 py-2 rounded-full
                    bg-black text-[#F5E7C4]
                    text-xs font-semibold tracking-wide uppercase
                    transition-all duration-300
                    hover:bg-[#1A1A1A]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/40
                  "
                >
                  View Details
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {active && (
        <ServiceModal service={active} onClose={() => setActive(null)} />
      )}
    </>
  );
}
