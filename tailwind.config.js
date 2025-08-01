/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bebas: ["Bebas Neue", "cursive"],
        cairo: ["Cairo", "sans-serif"],
        rubik: ["Rubik", "poppins", "sans-serif"],
      },
      colors: {
        "custom-black": "#000000c2",
        "custom-white": "#ffffffc2",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-gradient": {
          color: "#1B5931", // Color sólido
        },
      });
    },
    require("tailwindcss-animated"),
  ],
};
