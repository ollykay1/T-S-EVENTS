/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        babyPink: "#F4C2D7",
        rosePink: "#E8BFD4",
        gold: "#D4AF37",
        hoverGold: "#C69F2B",
        deepNavy: "#1B1F3B",
        softWhite: "#FFF9F4",
        accentBlue: "#0B3D91",
      },
      fontFamily: {
        display: ["Cinzel", "serif"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
