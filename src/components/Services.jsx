import React, { useEffect, useRef, useState } from "react";
import ServiceModal from "./ServiceModal";

export default function Services() {
  const services = [
    {
      id: "wedding",
      title: "Wedding Planning & Design",
      brief: "Elegant weddings, thoughtfully designed with Nigerian flair.",
      icon: "💍",
      writeUp: `Your wedding day is the beginning of a beautiful journey, and at T&S Elite Events, we ensure it starts with a celebration that captures the essence of your love story.

From traditional Nigerian ceremonies rich in cultural heritage to contemporary celebrations that dazzle with modern elegance, we craft weddings that leave lasting impressions. Our meticulous attention to detail means every flower arrangement, every fabric drape, and every lighting element is perfectly orchestrated.

We understand the significance of Nigerian wedding traditions — from the engagement ceremony to the traditional wedding (Igbankwu, Nikkah, or Traditional) and the glamorous white wedding. Let us handle the logistics while you focus on the joy of your special day.`,
      list: [
        "Complete wedding planning from engagement to reception",
        "Traditional & white wedding coordination",
        "Venue selection and styling",
        "Premium floral installations and décor",
        "Vendor management and coordination",
        "Day-of coordination and execution",
        "Custom colour palette and mood boards",
      ],
      color: "gold",
    },
    {
      id: "corporate",
      title: "Corporate Events",
      brief: "Professional events that elevate your brand presence.",
      icon: "🏢",
      writeUp: `In the corporate world, every event is an opportunity to make a statement. T&S Elite Events brings the same level of excellence to your business functions that we bring to our luxury celebrations.

Whether you're hosting an award ceremony, product launch, annual conference, or executive retreat, we deliver events that reflect your brand's prestige and professionalism. Our team understands the importance of precision timing, seamless AV integration, and creating environments that foster networking and engagement.

From intimate board meetings to grand galas for hundreds, we ensure your corporate event runs flawlessly while leaving a lasting impression on every attendee.`,
      list: [
        "Conferences and seminars",
        "Award nights and galas",
        "Product and brand launches",
        "Executive retreats and team building",
        "Annual general meetings",
        "Corporate anniversary celebrations",
        "Professional staging and AV setup",
      ],
      color: "white",
    },
    {
      id: "birthday",
      title: "Birthday Celebrations",
      brief: "Milestone moments styled with joy and sophistication.",
      icon: "🎂",
      writeUp: `Every birthday marks a chapter worth celebrating, and at T&S Elite Events, we create celebrations that honour your journey in style.

From intimate gatherings to grand milestone parties — whether it's a first birthday, sweet sixteen, 30th, 40th, 50th, or any age worth celebrating — we design birthday events that reflect the personality and preferences of the celebrant.

Our Nigerian clients appreciate our ability to blend cultural elements with contemporary party trends, creating celebrations that are both meaningful and magnificently memorable. Let us craft your perfect birthday experience.`,
      list: [
        "Children's themed birthday parties",
        "Milestone birthday celebrations (30th, 40th, 50th+)",
        "Surprise party planning",
        "Custom cake and dessert coordination",
        "Entertainment and activities",
        "Photo booth and memory corners",
        "Complete décor and styling",
      ],
      color: "gold",
    },
    {
      id: "traditional",
      title: "Traditional Ceremonies",
      brief: "Cultural celebrations honoured with dignity and grace.",
      icon: "🪘",
      writeUp: `Nigeria's rich cultural heritage deserves to be celebrated with authenticity and elegance. At T&S Elite Events, we specialize in traditional ceremonies that honour customs while adding our signature touch of luxury.

Whether it's an Igbo traditional wedding (Igbankwu), Yoruba engagement (Introduction), Hausa Kamu, Edo ceremony, or any other cultural celebration, we bring deep understanding and respect for traditions while ensuring every element is executed with premium quality.

Our team works closely with families to incorporate meaningful cultural elements, from traditional attire coordination to authentic décor that tells your unique heritage story.`,
      list: [
        "Traditional wedding ceremonies",
        "Introduction ceremonies",
        "Bride price (Ime Ego) ceremonies",
        "Cultural décor and setup",
        "Traditional attire coordination",
        "Cultural entertainment arrangements",
        "Family coordination and protocol",
      ],
      color: "white",
    },
    {
      id: "engagement",
      title: "Engagements & Proposals",
      brief: "Romantic beginnings designed to perfection.",
      icon: "💐",
      writeUp: `The moment you decide to spend forever together deserves a setting as special as your love. T&S Elite Events creates engagement celebrations and proposal setups that are nothing short of magical.

From surprise proposal arrangements that leave your partner speechless to elegant engagement parties that announce your union to the world, we handle every detail with care and creativity.

Our romantic setups feature premium florals, ambient lighting, and personalized touches that make the moment truly unforgettable. Trust us to create the perfect backdrop for your "Yes!"`,
      list: [
        "Surprise proposal setups",
        "Engagement party planning",
        "Intimate romantic dinners",
        "Ring ceremony coordination",
        "Floral arrangements and décor",
        "Photography coordination",
        "Champagne and catering arrangements",
      ],
      color: "gold",
    },
    {
      id: "burial",
      title: "Burial & Memorial Services",
      brief: "Dignified farewells coordinated with sensitivity.",
      icon: "🕊️",
      writeUp: `Saying goodbye to a loved one is one of life's most difficult moments. At T&S Elite Events, we approach burial and memorial services with the utmost sensitivity, respect, and professionalism.

We understand the importance of honouring your loved one's memory with a service that reflects their life and legacy. Our team handles all logistics discreetly, allowing families to focus on grieving and celebrating the life lived.

From wake keepings to burial ceremonies and memorial services, we ensure every detail is handled with care and dignity.`,
      list: [
        "Funeral ceremony coordination",
        "Wake keeping arrangements",
        "Memorial service planning",
        "Floral tributes and décor",
        "Programme and order of service",
        "Catering coordination",
        "Venue and logistics management",
      ],
      color: "white",
    },
    {
      id: "private",
      title: "Private Parties & Celebrations",
      brief: "Exclusive gatherings styled with sophistication.",
      icon: "🥂",
      writeUp: `Some moments call for intimate celebrations with your closest circle. T&S Elite Events creates private party experiences that combine exclusivity with exceptional style.

Whether it's a housewarming party, graduation celebration, bridal shower, baby shower, or an elegant dinner party, we design events that feel personal and luxurious.

Our attention to detail ensures that even the most intimate gathering feels like a grand affair, with curated menus, stunning décor, and seamless service.`,
      list: [
        "Housewarming parties",
        "Graduation celebrations",
        "Bridal and baby showers",
        "Anniversary dinners",
        "Intimate dinner parties",
        "Family reunions",
        "VIP gathering coordination",
      ],
      color: "gold",
    },
    {
      id: "ushering",
      title: "Ushering & Guest Management",
      brief: "Professional hospitality that elevates your event.",
      icon: "👔",
      writeUp: `First impressions matter, and your guests deserve to be welcomed with warmth and professionalism. T&S Elite Events provides trained ushering and guest management services that set the tone for exceptional events.

Our ushers are professionally trained in etiquette, guest relations, and event protocols. They ensure smooth guest flow, proper seating arrangements, and attentive service throughout your event.

From greeting guests at arrival to managing VIP sections and handling enquiries, our team represents your event with poise and excellence.`,
      list: [
        "Professional trained ushers",
        "Guest reception and registration",
        "VIP and dignitary handling",
        "Seating coordination",
        "Event flow management",
        "Guest enquiry support",
        "Hospitality and service",
      ],
      color: "white",
    },
    {
      id: "themed",
      title: "Custom & Themed Events",
      brief: "Immersive concepts brought to spectacular life.",
      icon: "✨",
      writeUp: `Dream it, and we'll create it. T&S Elite Events specializes in custom and themed events that transport guests into immersive experiences beyond imagination.

Whether you desire a Gatsby-inspired soirée, a tropical paradise celebration, an all-white affair, or any unique concept you envision, our creative team brings themes to life with meticulous attention to detail.

From custom installations and bespoke props to coordinated entertainment and themed catering, we create events that are truly one-of-a-kind.`,
      list: [
        "Custom theme development",
        "Bespoke installations and props",
        "Immersive décor design",
        "Themed entertainment",
        "Custom furniture and rentals",
        "Photo activation setups",
        "Creative direction and styling",
      ],
      color: "gold",
    },
  ];

  const [active, setActive] = useState(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        id="services"
        ref={sectionRef}
        className="relative bg-gradient-to-b from-[#F5F0E6] via-[#FFFDF9] to-[#F5F0E6] py-20 md:py-32 px-4 md:px-6 overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0F5132]/5 rounded-full blur-3xl" />

        {/* Section header */}
        <div className={`
          text-center mb-16 transition-all duration-1000
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}>
          <span className="text-[#0F5132] text-xs md:text-sm font-semibold tracking-[0.3em] uppercase">
            What We Offer
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#0a0a0a]">
            Our <span className="text-[#D4AF37]">Signature</span> Services
          </h2>
          
          <div className={`
            mx-auto mt-6 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent
            transition-all duration-1000 delay-300
            ${visible ? "w-32" : "w-0"}
          `} />
          
          <p className="mt-6 text-[#4a4a4a] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Refined services designed with intention, elegance, and flawless execution 
            for Nigeria's most discerning clientele.
          </p>
        </div>

        {/* Services grid */}
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const isGold = service.color === "gold";

            return (
              <div
                key={service.id}
                className={`
                  relative group rounded-2xl p-6 md:p-8
                  border-2 transition-all duration-500 ease-out
                  cursor-pointer
                  hover:-translate-y-2 hover:shadow-2xl
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                  ${isGold
                    ? "bg-gradient-to-br from-[#D4AF37] via-[#E5C763] to-[#D4AF37] border-[#D4AF37]/50 hover:shadow-[#D4AF37]/30"
                    : "bg-white border-[#0F5132]/20 hover:border-[#0F5132]/50 hover:shadow-[#0F5132]/20"
                  }
                `}
                style={{ transitionDelay: `${index * 60}ms` }}
                onClick={() => setActive(service)}
              >
                {/* Icon */}
                <div className="text-4xl mb-4">{service.icon}</div>

                {/* Title */}
                <h3 className={`
                  text-xl md:text-2xl font-display font-bold mb-3
                  ${isGold ? "text-black" : "text-[#0a0a0a]"}
                `}>
                  {service.title}
                </h3>

                {/* Brief */}
                <p className={`
                  text-sm md:text-base leading-relaxed mb-6
                  ${isGold ? "text-black/75" : "text-[#4a4a4a]"}
                `}>
                  {service.brief}
                </p>

                {/* CTA Button */}
                <button
                  className={`
                    inline-flex items-center gap-2
                    px-6 py-2.5 rounded-full
                    text-sm font-bold tracking-wide uppercase
                    transition-all duration-300
                    ${isGold
                      ? "bg-black text-[#F5E7C4] hover:bg-[#1a1a1a]"
                      : "bg-[#0F5132] text-white hover:bg-[#0a3d26]"
                    }
                  `}
                >
                  View Details
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Decorative corner */}
                <div className={`
                  absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl
                  ${isGold ? "opacity-30" : "opacity-10"}
                `}>
                  <div className={`
                    absolute -top-8 -right-8 w-16 h-16 rotate-45
                    ${isGold ? "bg-black" : "bg-[#0F5132]"}
                  `} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`
          text-center mt-16 transition-all duration-1000 delay-500
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}>
          <p className="text-[#4a4a4a] mb-6">
            Can't find what you're looking for? We create custom solutions.
          </p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="
              px-10 py-4 rounded-full
              bg-[#0a0a0a] text-white
              font-bold tracking-wide uppercase
              hover:bg-[#D4AF37] hover:text-black
              transition-all duration-300
              shadow-lg hover:shadow-xl
            "
          >
            Contact Us Today
          </button>
        </div>
      </section>

      {active && (
        <ServiceModal service={active} onClose={() => setActive(null)} />
      )}
    </>
  );
}
