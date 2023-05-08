/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        newblack: "#100F0F",
        teal: "#02E4E6",
        newgray: "#282828",
        graytext: "#424242",
        cancel: "#d63031",
      },
    },
    fontFamily: {
      poppins: "Poppins",
    },
  },
  plugins: [],
};
