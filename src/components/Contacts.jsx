import React, { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <section id="contact" className="min-h-screen bg-softWhite py-24 px-6">
      <h2 className="text-5xl font-display text-deepNavy text-center mb-12">
        Contact Us
      </h2>

      <div className="max-w-xl mx-auto bg-babyPink p-10 rounded-2xl shadow-lg border border-rosePink/30">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
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

         <input
  name="date"
  type="text"
  placeholder="Event date"
  onFocus={(e) => (e.target.type = "date")}
  onBlur={(e) => {
    if (!e.target.value) e.target.type = "text";
  }}
  className="p-4 rounded-lg border border-rosePink/40 text-gray-400 focus:text-deepNavy focus:font-medium focus:outline-none focus:border-gold"
/>


          {/* Event type — light until focused */}
          <select
            name="type"
            className="p-4 rounded-lg border border-rosePink/40 text-gray-400 focus:text-deepNavy focus:font-medium focus:outline-none focus:border-gold"
            defaultValue=""
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

          {/* Actions */}
          <div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gold text-deepNavy rounded-full font-semibold tracking-wide
                         hover:bg-hoverGold hover:shadow-lg hover:-translate-y-[1px]
                         transition-all duration-300"
            >
              Send Message
            </button>
          </div>

          {sent && (
            <p className="text-green-700 mt-2 text-center font-medium">
              Thanks — your message has been sent. We’ll be in touch shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
