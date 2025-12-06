import React, { useState } from "react";
import ServiceModal from "./ServiceModal";

export default function Services() {
  const services = [
    {
      id: "birthday",
      title: "Birthday Party",
      brief: "Memorable celebrations for all ages.",
      writeUp: `Joyful birthday events, from playful kids parties to elegant adult lounges.

Clients love: themed photo walls, interactive stations, custom cakes, DJ/entertainment, and seamless coordination.`,
      list: ["Themed decor", "Photo walls", "Entertainment booking", "Custom cakes", "Event coordination"],
      color: "bg-babyPink",
    },
    {
      id: "wedding",
      title: "Wedding Planning",
      brief: "Elegant weddings designed to perfection.",
      writeUp: `Full-service wedding planning: concept to last dance.

Clients love: floral installations, curated tablescapes, lighting, venue transformation, vendor coordination, all within budget.`,
      list: ["Venue styling", "Floral chandeliers", "Tablescapes & linens", "Lighting design", "Vendor coordination"],
      color: "bg-ivory border border-rosePink/40",
    },
    {
      id: "corporate",
      title: "Corporate Events",
      brief: "Professional and polished gatherings.",
      writeUp: `Corporate events reflecting brand and objectives.

Clients love: strong branding, efficient AV, punctual execution, and ROI-driven planning.`,
      list: ["Stage & AV", "Branding", "Catering coordination", "Guest registration", "Timeline management"],
      color: "bg-babyPink",
    },
    {
      id: "burial",
      title: "Burial & Memorials",
      brief: "Respectful and beautiful memorial events.",
      writeUp: `Dignified memorial planning with attention to meaningful details and family comfort.

Clients appreciate: calm decor, discreet logistics, smooth timeline management, and attentive service.`,
      list: ["Memorial layout", "Floral tributes", "Program coordination", "Venue liaison", "Guest support"],
      color: "bg-ivory border border-rosePink/40",
    },
    {
      id: "engagement",
      title: "Engagements",
      brief: "Romantic and elegant engagement celebrations.",
      writeUp: `Intimate and romantic engagement events curated for meaningful moments.

Clients love: mood lighting, intimate florals, signature cocktails, and elegant settings.`,
      list: ["Intimate seating", "Mood lighting", "Floral accents", "Catering & cocktails", "Photography setup"],
      color: "bg-babyPink",
    },
    {
      id: "private",
      title: "Private Parties",
      brief: "Exclusive, luxurious private events.",
      writeUp: `From rooftop cocktail soirées to luxury dinner parties — we design private events focused on exclusivity and sophistication.`,
      list: ["Custom menus", "Exclusive venues", "Luxury styling", "Guest management", "Entertainment"],
      color: "bg-ivory border border-rosePink/40",
    },
    {
      id: "ushering",
      title: "Ushering & Guest Management",
      brief: "Professional ushering and guest care services.",
      writeUp: `Our ushering team provides professional guest guidance, seating support, and VIP care — ensuring every guest feels welcomed.

We assign trained staff, brief them on the event flow, manage seating, assist VIPs, and coordinate with the event manager.`,
      list: ["Trained ushers", "Guest seating", "VIP assistance", "Guest enquiries", "Event flow support"],
      color: "bg-babyPink",
    },
    {
      id: "anniversary",
      title: "Anniversary Celebrations",
      brief: "Celebrate milestones with style.",
      writeUp: `We craft anniversary experiences that honor your story and elevate the celebration.`,
      list: ["Custom décor", "Memory displays", "Special menus", "Entertainment", "Surprise moments"],
      color: "bg-ivory border border-rosePink/40",
    },
    {
      id: "themed",
      title: "Themed Events",
      brief: "Immersive themed parties and activations.",
      writeUp: `From concept to props and set dressing — we build themed worlds for memorable guest experiences.`,
      list: ["Concept development", "Set dressing", "Props & rentals", "Photo activations", "On-site direction"],
      color: "bg-babyPink",
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <section id="services" className="min-h-screen py-24 px-6 bg-ivory">
      <h2 className="text-5xl font-display text-deepNavy text-center mb-12">
        Our Services
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div
            key={s.id}
            className={`${s.color} rounded-2xl p-6 shadow-lg transform transition hover:scale-105 cursor-pointer relative`}
          >
            <h3 className="text-2xl font-display text-deepNavy mb-2">{s.title}</h3>
            <p className="text-textDark/80 text-sm">{s.brief}</p>
            <button
              onClick={() => setActive(s)}
              className="mt-4 inline-block px-3 py-1 text-sm font-semibold rounded-full border border-deepNavy/30 hover:bg-deepNavy hover:text-ivory transition"
            >
              More
            </button>
          </div>
        ))}
      </div>

      {active && (
        <ServiceModal
          service={active}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  );
}
