import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-primary text-white">
      <h1 className="font-bold text-xl">T&S Events</h1>
      <ul className="flex gap-6">
        <li>Home</li>
        <li>Services</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
