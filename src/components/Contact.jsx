import React, { useRef, useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { HiMail, HiLocationMarker } from "react-icons/hi";

export default function Contact() {
  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [eventType, setEventType] = useState("");
  const [showCustomEvent, setShowCustomEvent] = useState(false);
  const [visible, setVisible] = useState(false);

  const nigerianEvents = [
    "Wedding (White Wedding)",
    "Traditional Wedding",
    "Engagement/Introduction",
    "Birthday Party",
    "Naming Ceremony",
    "Baby Shower",
    "Bridal Shower",
    "Anniversary Celebration",
    "Graduation Party",
    "Burial/Memorial Service",
    "House Warming",
    "Corporate Event",
    "Award Ceremony",
    "Product Launch",
    "Conference/Seminar",
    "Family Reunion",
    "Church Event",
    "Mosque Event",
    "Chieftaincy Ceremony",
    "Thanksgiving Service",
    "Children's Party",
    "Others"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleEventChange = (e) => {
    const value = e.target.value;
    setEventType(value);
    setShowCustomEvent(value === "Others");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    setLoading(true);

    const formData = new FormData(form);
    formData.append("access_key", "ec53946d-48f6-46cf-a493-8ee0fd55a74b");

    // If custom event, combine with the select value
    if (showCustomEvent) {
      const customEvent = formData.get("custom_event");
      formData.set("event", `Others: ${customEvent}`);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSent(true);
        form.reset();
        setEventType("");
        setShowCustomEvent(false);
      } else {
        alert("Error: " + (data?.message || "Unable to send message."));
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] py-20 md:py-32 px-4 md:px-6 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#0F5132]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className={`
          text-center mb-16
          transition-all duration-1000
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <span className="text-[#D4AF37] text-xs md:text-sm font-semibold tracking-[0.3em] uppercase">
            Get In Touch
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white">
            Let's Create <span className="gradient-text">Magic</span> Together
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <div className="w-2 h-2 bg-[#D4AF37] rotate-45" />
            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT - Contact Info */}
          <div className={`
            transition-all duration-1000 delay-200
            ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
          `}>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
              Ready to Plan Your <span className="text-[#D4AF37]">Dream Event?</span>
            </h3>

            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10">
              We approach every event with discretion, structure, and exceptional standards. 
              Share your vision and let us guide you from concept to a flawless execution 
              that exceeds your expectations.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              <a
                href="tel:+2349133250794"
                className="flex items-center gap-4 text-white/80 hover:text-[#D4AF37] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all">
                  <FaPhoneAlt className="text-[#D4AF37] group-hover:text-black transition-colors" />
                </div>
                <div>
                  <span className="text-xs text-white/50 uppercase tracking-wider">Call Us</span>
                  <p className="font-semibold">+234 913 325 0794</p>
                </div>
              </a>

              <a
                href="mailto:oluwatosinruth111@gmail.com"
                className="flex items-center gap-4 text-white/80 hover:text-[#D4AF37] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all">
                  <HiMail className="text-[#D4AF37] text-xl group-hover:text-black transition-colors" />
                </div>
                <div>
                  <span className="text-xs text-white/50 uppercase tracking-wider">Email Us</span>
                  <p className="font-semibold">oluwatosinruth111@gmail.com</p>
                </div>
              </a>

              <a
                href="https://wa.me/2349133250794"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/80 hover:text-[#0F5132] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0F5132]/20 border border-[#0F5132]/40 flex items-center justify-center group-hover:bg-[#0F5132] group-hover:border-[#0F5132] transition-all">
                  <FaWhatsapp className="text-[#0F5132] text-xl group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-xs text-white/50 uppercase tracking-wider">WhatsApp</span>
                  <p className="font-semibold">Chat with us instantly</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                  <HiLocationMarker className="text-[#D4AF37] text-xl" />
                </div>
                <div>
                  <span className="text-xs text-white/50 uppercase tracking-wider">Location</span>
                  <p className="font-semibold">Nigeria</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-10">
              <p className="text-sm text-white/50 uppercase tracking-wider mb-4">Follow Us</p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/ts_elite_events"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-white/70 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:border-transparent hover:text-white transition-all"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://www.tiktok.com/@oluwatosinomotos7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-white/70 hover:bg-black hover:border-white/30 hover:text-white transition-all"
                >
                  <FaTiktok size={20} />
                </a>
                <a
                  href="https://www.facebook.com/share/14Rdg9SZBBE/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-white/70 hover:bg-blue-600 hover:border-transparent hover:text-white transition-all"
                >
                  <FaFacebookF size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT - Form */}
          <div className={`
            transition-all duration-1000 delay-400
            ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
          `}>
            {/* Decorative frame */}
            <div className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#D4AF37]/20">
              {/* Decorative corners */}
              <div className="decorative-corner top-left" />
              <div className="decorative-corner top-right" />
              <div className="decorative-corner bottom-left" />
              <div className="decorative-corner bottom-right" />

              {sent ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#0F5132]/20 border border-[#0F5132] flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#0F5132]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-display font-bold text-white mb-3">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-white/70 mb-6">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="px-8 py-3 rounded-full bg-[#D4AF37] text-black font-bold hover:bg-[#F5E7C4] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input
                      name="name"
                      required
                      placeholder="Your Full Name *"
                      className="lux-input"
                    />
                    <input
                      name="phone"
                      placeholder="Phone Number"
                      className="lux-input"
                    />
                  </div>

                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email Address *"
                    className="lux-input"
                  />

                  <div className="grid sm:grid-cols-2 gap-5">
                    <input
                      name="date"
                      type="date"
                      className="lux-input lux-date"
                      placeholder="Event Date"
                    />
                    <input
                      name="guests"
                      type="number"
                      placeholder="Expected Guests"
                      className="lux-input"
                    />
                  </div>

                  {/* Event Type Select */}
                  <select
                    name="event"
                    value={eventType}
                    onChange={handleEventChange}
                    className="lux-input lux-select"
                    required
                  >
                    <option value="" disabled>
                      Select Event Type *
                    </option>
                    {nigerianEvents.map((event, index) => (
                      <option key={index} value={event}>
                        {event}
                      </option>
                    ))}
                  </select>

                  {/* Custom Event Input - Only shows when "Others" is selected */}
                  {showCustomEvent && (
                    <div className="animate-fadeIn">
                      <input
                        name="custom_event"
                        required
                        placeholder="Please describe your event type *"
                        className="lux-input border-[#0F5132]/50 focus:border-[#0F5132]"
                      />
                      <p className="mt-2 text-xs text-[#0F5132]">
                        Please tell us what type of event you're planning
                      </p>
                    </div>
                  )}

                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your vision for the event..."
                    className="lux-input resize-none"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="
                      w-full py-4 rounded-xl
                      bg-gradient-to-r from-[#D4AF37] to-[#F5E7C4]
                      text-black font-bold text-lg tracking-wide
                      shadow-lg shadow-[#D4AF37]/30
                      hover:shadow-[#D4AF37]/50 hover:scale-[1.02]
                      disabled:opacity-60 disabled:cursor-not-allowed
                      transition-all duration-300
                      flex items-center justify-center gap-3
                    "
                  >
                    {loading && (
                      <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    )}
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                  <p className="text-center text-xs text-white/40">
                    We typically respond within 24 hours
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
