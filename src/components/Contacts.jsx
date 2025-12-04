import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-primary mb-10">Contact Us</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
          <textarea placeholder="Message" className="w-full p-3 border rounded"></textarea>
          <button type="submit" className="bg-primary text-white px-6 py-3 rounded hover:bg-blue-800 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
