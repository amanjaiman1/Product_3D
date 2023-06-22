/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../src/assets/svg/customizer.svg')",
      },
      colors: {
        primary: "#293FCC",
        secondary: "#63657E",
        "hero-badge-color": "#293FCC",
        "hero-badge-bg": "#F8FAFF",
        heading: "#090F4E",
      },
    },
  },

  plugins: [require("tailwind-scrollbar")],
};
