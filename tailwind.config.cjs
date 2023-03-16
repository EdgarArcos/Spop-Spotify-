/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'newblack': '#2B2B2B',
        'teal': '#02E4E6',
      }
    },
  },
  plugins: [],
}
