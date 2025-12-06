/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        babyPink: "#F8D7E5",
        rosePink: "#E98FB1",
        gold: "#D4AF37",
        hoverGold: "#c49a2f",
        hoverPink: "#d67595",
        deepNavy: "#1A1A2E",
        softWhite: "#FFF9FC",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
