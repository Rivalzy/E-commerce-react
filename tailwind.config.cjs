/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
        Kelly: ["Kelly Slab"],
      },
      container : {
        center: true,
        padding: '1rem'
      }
    },
  },
  plugins: [],
}
