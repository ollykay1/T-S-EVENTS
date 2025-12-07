import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok, FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-deepNavy text-ivory py-3">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Left: Brand */}
        <div className="leading-tight">
          <div className="text-lg font-display font-semibold text-gold">
            T&S ELITE EVENTS
          </div>
          <div className="text-xs font-medium text-ivory/80">
            Satisfaction & Your Budget
          </div>
        </div>

        {/* Middle: copyright */}
        <div className="text-xs font-medium text-ivory/70 text-center hidden md:block">
          © {new Date().getFullYear()} T&S Elite Events
        </div>

        {/* Right: icons (Phone → Email → Instagram → TikTok → Facebook) */}
        <div className="flex items-center gap-4 pr-4">

          {/* Phone */}
          <a
            href="tel:+2349133250794"
            aria-label="Phone"
            className="group w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center transition"
          >
            <FaPhoneAlt className="text-ivory text-[20px] transition-colors duration-300 group-hover:text-gold" />
          </a>

          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=oluwatosinruth111@gmail.com"
  target="_blank"
  rel="noopener noreferrer"aria-label="Email"
            className="group w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center transition"
          >
            <HiMail className="text-ivory text-[22px] transition-colors duration-300 group-hover:text-gold" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/ts_elite_events"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center transition"
          >
            <FaInstagram className="text-ivory text-[20px] transition-colors duration-300 group-hover:text-gold" />
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@oluwatosinomotos7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="group w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center transition"
          >
            <FaTiktok className="text-ivory text-[20px] transition-colors duration-300 group-hover:text-gold" />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="group w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center transition"
          >
            <FaFacebookF className="text-ivory text-[20px] transition-colors duration-300 group-hover:text-gold" />
          </a>

        </div>
      </div>

      {/* Mobile-only copyright */}
      <div className="md:hidden text-center text-xs font-medium text-ivory/70 mt-1">
        © {new Date().getFullYear()} T&S Elite Events
      </div>
    </footer>
  );
}
