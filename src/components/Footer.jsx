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
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-current text-ivory hover:text-deepNavy"
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.05-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C10.07 21.5 2.5 13.93 2.5 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.05l-2.2 2.2z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="@ts_elite_events"
            aria-label="Instagram"
            className="w-7 h-7 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-gold transition"
          >
            <svg
              className="w-4 h-4 fill-current text-ivory hover:text-deepNavy"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 4a4.25 4.25 0 1 1 0 8.5a4.25 4.25 0 0 1 0-8.5Z" />
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
              viewBox="0 0 24 24"
            >
              <path d="M13.5 9H16V6h-2.5a4 4 0 0 0-4 4V12H7v3h2.5v7h3v-7H15l.5-3h-3v-2a1 1 0 0 1 1-1Z" />
            </svg>
          </a>

         
         {/* Email */}
<a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=oluwatosinruth111@gmail.com&su=Event%20Inquiry&body=Hi%20T&S%20Elite%20Events,"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Email"
  className="w-7 h-7 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-gold transition"
>
  <svg
    className="w-4 h-4 fill-current text-ivory hover:text-deepNavy"
    viewBox="0 0 24 24"
  >
    <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm2 .5v.26l8 5.07l8-5.07V6.5l-8 5.1l-8-5.1Zm0 2.24V18h16V8.74l-7.47 4.74a1 1 0 0 1-1.06 0L4 8.74Z" />
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
