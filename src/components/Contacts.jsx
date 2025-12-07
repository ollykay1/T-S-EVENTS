import React, { useState, useRef } from "react";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [eventSelected, setEventSelected] = useState(false);
  const formRef = useRef(null);
  const startTimeRef = useRef(Date.now());

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;

    // Honeypot
    if (form.website?.value) return;

    // Time-based check
    if (Date.now() - startTimeRef.current < 2000) return;

    try {
      await addDoc(collection(db, "messages"), {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        date: form.date.value,
        type: form.type.value,
        message: form.message.value,
        createdAt: serverTimestamp(),
      });

      setSent(true);
      form.reset();
      setEventSelected(false);
      startTimeRef.current = Date.now();
      setTimeout(() => setSent(false), 2500);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-softWhite py-24 px-6">
      <h2 className="text-5xl font-display text-deepNavy text-center mb-12">
        Contact Us
      </h2>

      <div className="max-w-xl mx-auto bg-babyPink p-10 rounded-2xl shadow-lg border border-rosePink/30">
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          {/* Honeypot */}
          <input type="text" name="website" autoComplete="off" className="hidden" />

          <input
            name="name"
            required
            className="p-4 rounded-lg border border-rosePink/40 focus:outline-none focus:border-gold font-medium text-deepNavy"
            placeholder="Full name"
          />

          <input
            name="phone"
            type="tel"
            className="p-4 rounded-lg border border-rosePink/40 focus:outline-none focus:border-gold font-medium text-deepNavy"
            placeholder="Phone number"
          />

          <input
            name="email"
            type="email"
            required
            className="p-4 rounded-lg border border-rosePink/40 focus:outline-none focus:border-gold font-medium text-deepNavy"
            placeholder="Email address"
          />

          {/* Event Date */}
          <input
            name="date"
            type="text"
            placeholder="Event date"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
            onChange={(e) => {
              e.target.classList.remove("text-gray-400");
              e.target.classList.add("text-deepNavy", "font-medium");
            }}
            className="p-4 rounded-lg border border-rosePink/40 text-gray-400 focus:outline-none focus:border-gold"
          />

          {/* Event Type */}
          <select
            name="type"
            defaultValue=""
            onChange={() => setEventSelected(true)}
            className={`p-4 rounded-lg border border-rosePink/40 focus:outline-none focus:border-gold ${
              eventSelected
                ? "text-deepNavy font-medium"
                : "text-gray-400"
            }`}
          >
            <option value="" disabled>
              Select event type
            </option>
            <option>Wedding</option>
            <option>Birthday</option>
            <option>Corporate</option>
            <option>Social</option>
            <option>Fundraiser</option>
            <option>Festival</option>
            <option>Conference</option>
            <option>Product Launch</option>
            <option>Holiday Party</option>
            <option>Anniversary</option>
            <option>Reunion</option>
            <option>Engagement</option>
            <option>Bridal Shower</option>
            <option>Baby Shower</option>
            <option>Graduation</option>
            <option>Religious Ceremony</option>
            <option>Cultural Event</option>
            <option>Outdoor Event</option>
            <option>House Warming</option>
            <option>Hybrid Event</option>
            <option>Team Building</option>
            <option>Award Ceremony</option>
            <option>Press Event</option>
            <option>Exhibition / Trade Show</option>
            <option>Private</option>
            <option>Burial Ceremony</option>
            <option>Other</option>
          </select>

          <textarea
            name="message"
            required
            className="p-4 rounded-lg border border-rosePink/40 h-36 focus:outline-none focus:border-gold font-medium text-deepNavy"
            placeholder="Tell us about your vision"
          />

          <button
            type="submit"
            className="w-full px-6 py-3 bg-gold text-deepNavy rounded-full font-semibold tracking-wide
                       hover:bg-hoverGold hover:shadow-lg hover:-translate-y-[1px]
                       transition-all duration-300"
          >
            Send Message
          </button>

          {sent && (
            <p className="text-green-700 text-center font-medium">
              Thanks — your message has been sent. We’ll be in touch shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
