/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        /* Brand Colors */
        gold: "#D4AF37",
        goldHover: "#B8962E",

        /* Luxury Neutrals */
        richBlack: "#0B0B0B",
        charcoal: "#1C1C1C",
        ivory: "#FDF9F4",
        pureWhite: "#FFFFFF",

        /* Accent / Soft */
        champagne: "#F5E7C4",
        babyPink: "#F8D7E5",
        rosePink: "#E98FB1",

        /* Text */
        textPrimary: "#111111",
        textMuted: "#6B6B6B",

        /* Legacy (keep for now) */
        deepNavy: "#1A1A2E",

        /* New professional buttons */
        deepTeal: "#0E5E6F",
        deepTealHover: "#0C4B57",
        coral: "#FF6F61",
        coralHover: "#E55B50",
      },

      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Poppins", "sans-serif"],
      },
       
      
      keyframes: {
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        slideUp: "slideUp 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
