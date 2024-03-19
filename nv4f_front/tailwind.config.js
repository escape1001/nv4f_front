/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "color-white" : "#ffffff",
        "color-grey" : "#646464",
        "color-light-grey" : "#a7a7a7",
        "color-dark" : "#333333",
        "color-black" : "#232323",
        "color-point" : "#8068BC",
        "color-light" : "#eeeeee",
      },
      fontSize: {
        'max': '3.6rem',
        'huge': '2.8rem',
        'bigger': '2.4rem',
        'big': '2rem',
        'default': '1.6rem',
        'small': '1.4rem',
        'smaller': '1.2rem',
      },
    },
  },
  plugins: [],
}