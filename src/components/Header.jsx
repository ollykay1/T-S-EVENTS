import React from "react";

export default function Header() {
  return (
    <header className="bg-primary text-white py-4 shadow-md fixed w-full z-40">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="font-bold text-xl">T&S Events</h1>
        <nav className="space-x-4">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#gallery" className="hover:underline">Gallery</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
}
