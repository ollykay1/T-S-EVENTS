import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000); // reset after 2s
    e.target.reset();
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-500 py-20 px-6 fade-up">
      <h2 className="text-4xl font-display text-center text-deepNavy mb-12">Contact Us</h2>
      <div className="max-w-xl mx-auto bg-babyPink p-10 rounded-xl shadow border border-rosePink/30">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" className="p-3 rounded-md border border-rosePink/40 focus:outline-none focus:border-gold" required/>
          <input type="email" placeholder="Your Email" className="p-3 rounded-md border border-rosePink/40 focus:outline-none focus:border-gold" required/>
          <textarea placeholder="Your Message" className="p-3 rounded-md border border-rosePink/40 h-32 focus:outline-none focus:border-gold" required></textarea>
          <button className="bg-gold/50 text-white py-3 rounded-full hover:bg-Gold transition">
            Send Message
          </button>
          {submitted && <p className="text-green-600 text-center mt-2">Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
}
