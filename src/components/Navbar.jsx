import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-black text-black">
      <h1 className="font-bold text-xl">T&S Elite Events</h1>
      <ul className="flex gap-6">
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>Gallery</li>
        <li>Contact</li>
        
      </ul>
    </nav>
  );
}
