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
        "secondary":"#63657E",
        'hero-badge-color':"#293FCC",
        'hero-badge-bg':"#F8FAFF",
        "heading":"#090F4E",
        "Card1Color" : "#FFF0E9",
        "Card2Color" : "#E9EDFF",
        "Card3Color" : "#FFF6DD"
      }
    },
    fontFamily: {
      'Pop': ['ui-Poppins'],
      'Osans': ['ui-Open-Sans'],
    },
    fontWeight:{
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    
  },
  plugins: [require('tailwind-scrollbar')],
};
