/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  "darkMode": 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'cursive': ['Cedarville Cursive', 'cursive'],
        'bebas': ['Bebas Neue', 'cursive'],
        'sofia': ['Sofia', 'cursive'],
      },
      colors: {
        'custom-black': '#000000c2',
        'custom-white': '#ffffffc2',
      }
    },
  },
  plugins: [function({ addUtilities }) {
    addUtilities({
      '.text-gradient': {
        background: 'linear-gradient(to bottom, #2F5A19, #527C39)', //#2F5A19, #527C39 //#247043, #778F43
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        'background-clip': 'text',
        'text-fill-color': 'transparent',
      },
    });
  }, require('tailwindcss-animated')], 
}

