import React, { useRef, useState } from "react";
import {
  FaPhoneAlt,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Contact() {
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    setLoading(true);

    const formData = new FormData(form);
    formData.append("access_key", "ec53946d-48f6-46cf-a493-8ee0fd55a74b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSent(true);
        form.reset();
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
      className="relative bg-[#0c0c0c] py-28 px-6 overflow-hidden"
    >
      {/* Grain */}
      <div className="absolute inset-0 bg-[url('/images/grain.png')] opacity-[0.05]" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 relative">
        {/* LEFT */}
        <div>
          <h2 className="text-5xl font-serif text-[#F5E7C4] mb-6">
            Contact Us
          </h2>

          <p className="text-[#e6dcc6] text-lg leading-relaxed mb-10">
            We approach every event with discretion, structure, and exceptional
            standards. Share your details and we’ll guide you from concept to
            execution.
          </p>

          {/* CONTACT INFO */}
          <div className="space-y-6 text-[#e6dcc6] selectable">
            <a
              href="tel:+2349133250794"
              className="flex items-center gap-4 hover:text-[#D4AF37]"
            >
              <FaPhoneAlt /> +234 913 325 0794
            </a>

            <a
              href="mailto:oluwatosinruth111@gmail.com"
              className="flex items-center gap-4 hover:text-[#D4AF37]"
            >
              <HiMail size={20} /> oluwatosinruth111@gmail.com
            </a>

            <a
              href="https://wa.me/2349133250794"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-[#D4AF37]"
            >
              <FaWhatsapp /> WhatsApp · Chat with us
            </a>
          </div>

          {/* SOCIALS */}
          <div className="mt-10 space-y-4 text-[#e6dcc6] selectable">
            <a
              href="https://www.instagram.com/ts_elite_events"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-[#D4AF37]"
            >
              <FaInstagram /> Instagram · @ts_elite_events
            </a>

            <a
              href="https://www.tiktok.com/@oluwatosinomotos7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-[#D4AF37]"
            >
              <FaTiktok /> TikTok · @oluwatosinomotos7
            </a>

            <a
              href="https://www.facebook.com/share/14Rdg9SZBBE/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-[#D4AF37]"
            >
              <FaFacebookF /> Facebook · T&S Elite Events
            </a>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-[#0a0a0a] border border-[#D4AF37]/25 rounded-3xl p-10 shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <input
              name="name"
              required
              placeholder="Full name"
              className="lux-input"
            />
            <input
              name="phone"
              placeholder="Phone number"
              className="lux-input"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email address"
              className="lux-input"
            />
            <select name="event" className="lux-input">
              <option>Event type</option>
              <option>Wedding</option>
              <option>Traditional Ceremony</option>
              <option>Birthday</option>
              <option>Engagement</option>
              <option>Anniversary</option>
              <option>Corporate Event</option>
              <option>Graduation</option>
              <option>Baby Shower</option>
              <option>Burial Ceremony</option>
              <option>Others</option>
            </select>
            <textarea
              name="message"
              rows="4"
              placeholder="Briefly describe your event"
              className="lux-input"
            />

            <button
              type="submit"
              className="w-full bg-[#D4AF37] hover:bg-[#c6a533] text-black py-4 rounded-xl font-medium transition disabled:opacity-60 flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading && (
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-black/40 border-t-black" />
              )}
              <span>{loading ? "Sending..." : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>

      {sent && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex items-center justify-center">
          <div className="bg-[#101010] border border-[#D4AF37]/40 rounded-2xl p-10 text-center max-w-md">
            <h3 className="text-2xl font-serif text-[#F5E7C4] mb-3">
              Message Sent
            </h3>
            <p className="text-[#e6dcc6] mb-6">
              We’ll contact you shortly.
            </p>
            <button
              onClick={() => setSent(false)}
              className="px-8 py-3 bg-[#D4AF37] text-black rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style>{`
        .lux-input {
          width: 100%;
          background: rgba(0,0,0,0.45);
          border: 1px solid rgba(212,175,55,0.25);
          border-radius: 12px;
          padding: 14px 16px;
          color: #F5E7C4;
        }
        .lux-input::placeholder {
          color: #bfb6a5;
        }
        .lux-input:focus {
          outline: none;
          border-color: #D4AF37;
        }
      `}</style>
    </section>
  );
}