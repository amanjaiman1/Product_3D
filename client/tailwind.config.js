/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#293FCC",
        "secondry":"#63657E",
        'hero-badge':"#293FCC",
        "heading":"#090F4E"
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
