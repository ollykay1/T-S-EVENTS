import React from "react";

export default function Footer() {
  return (
    <footer className="bg-deepNavy text-ivory py-2">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Left: Brand */}
        <div className="leading-tight">
          <div className="text-lg font-display font-semibold text-gold">
            T&S ELITE EVENTS
          </div>
          <div className="text-xs font-medium text-ivory/80">
            satisfaction & your budget
          </div>
        </div>

        {/* Middle: copyright */}
        <div className="text-xs font-medium text-ivory/70 text-center hidden md:block">
          © {new Date().getFullYear()} T&S Elite Events
        </div>

        {/* Right: icons */}
        <div className="flex items-center gap-2 pr-4">
 {/* Phone call */}
          <a
            href="tel:+2349133250794"
            aria-label="Phone"
            className="w-7 h-7 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-gold transition"
          >
              <svg
      className="w-4 h-4 fill-white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M493.4 24.6l-104-24c-11.4-2.6-23 2.5-28.7 12.9L304 115.2c-5.2 9.5-3.2 21.4 4.9 29.1l60.6 60.6c-36.1 76.8-99.2 139.9-176 176l-60.6-60.6c-7.8-8.1-19.6-10.1-29.1-4.9L12.5 398.3c-10.4 5.7-15.5 17.3-12.9 28.7l24 104c2.9 12.8 14 22.1 27 22.1 256.1 0 464-207.9 464-464 0-13-9.3-24.1-22.1-27z"/>
    </svg>
          </a>

          {/* Instagram */}
          <a
             href="https://www.instagram.com/ts_elite_events/"
             target="_blank"
             rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-gold transition"
          >
             <svg
      className="w-4 h-4 fill-white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M224.1 141c-63.6 0-115 51.4-115 115 0 63.6 51.4 115 115 115 63.6 0 115-51.4 115-115 0-63.6-51.4-115-115-115zm0 190c-41.6 0-75-33.4-75-75s33.4-75 75-75 75 33.4 75 75-33.4 75-75 75zm146.4-194.3c0 14.9-12 26.9-26.9 26.9-14.9 0-26.9-12-26.9-26.9s12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-.2-54.3-4.9-102.7-28.1-140.7-23.2-37.9-54-66.2-91.5-91.5C315.8 5.5 267.4.8 213.1.6 158.9.4 110.5 5.1 72.5 28.3 34.6 51.5 6.3 82.3-17 119.8-40.2 157.4-44.9 205.7-45.1 259.9c-.2 54.3 4.5 102.7 27.7 140.7 23.2 37.9 54 66.2 91.5 91.5 38 23.2 86.3 27.9 140.5 28.1 54.3.2 102.7-4.5 140.7-27.7 37.9-23.2 66.2-54 91.5-91.5 23.2-38 27.9-86.3 28.1-140.5.2-54.3-4.5-102.7-27.7-140.7zM398.8 388c-19.5 30.8-45.2 56.5-76 76-30.8 19.5-66.9 28.2-106.8 28.4-39.9-.2-76-8.9-106.8-28.4-30.8-19.5-56.5-45.2-76-76-19.5-30.8-28.2-66.9-28.4-106.8.2-39.9 8.9-76 28.4-106.8 19.5-30.8 45.2-56.5 76-76 30.8-19.5 66.9-28.2 106.8-28.4 39.9.2 76 8.9 106.8 28.4 30.8 19.5 56.5 45.2 76 76 19.5 30.8 28.2 66.9 28.4 106.8-.2 39.9-8.9 76-28.4 106.8z"/>
    </svg>

          </a>

          {/* TikTok */}
          <a
            href="#"
            aria-label="TikTok"
            className="w-7 h-7 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-gold transition"
          >
            <svg
              className="w-4 h-4 fill-current text-ivory hover:text-deepNavy"
              viewBox="0 0 24 24"
            >
              <path d="M16.5 2a5.5 5.5 0 0 0 5.5 5.5v3.5a8.93 8.93 0 0 1-5.5-1.86V15a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6.03.88.08v3.76a2 2 0 1 0 1.12 1.82V2h3.5Z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="#"
            aria-label="Facebook"
            className="w-7 h-7 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-gold transition"
          >
            <svg
    className="w-4 h-4 fill-current text-ivory hover:text-deepNavy"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
  >
    <path d="M279.14 288l14.22-92.66h-88.91V127.78c0-25.35 12.42-50.06 52.24-50.06H293V6.26S277.43 0 256.36 0C180.27 0 140.11 44.39 140.11 124.09V195.3H51.47V288h88.64v224h107.42V288z"/>
  </svg>
          </a>

         
         {/* Email */}
<a
    href="mailto:oluwatosinruth111@gmail.com?subject=Event%20Inquiry&body="
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Email"
  className="w-7 h-7 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-gold transition"
>
   <svg
      className="w-4 h-4 fill-white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M502.3 190.8L327.4 338c-17.3 14.6-43.1 14.6-60.4 0L9.7 190.8C3.6 185.4 0 177.9 0 170V48c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48v122c0 7.9-3.6 15.4-9.7 20.8zM512 208v224c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V208l210.7 178c28.1 23.7 69.1 23.7 97.2 0L512 208z"/>
    </svg>
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
