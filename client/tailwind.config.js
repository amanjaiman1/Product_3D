/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: '#090F4E',
        custom2:" #63657E",
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
