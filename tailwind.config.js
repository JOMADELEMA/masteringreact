/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fondo-semuc': "url('../public/images/bg-Semuc.jpg')",
      }, 
      gridTemplateRows: {
        //grid para layout
        'joma6': '4fr 1fr 1fr',
      }
    },
  },
  plugins: [],
}
