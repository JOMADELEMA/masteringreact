/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fondo-semuc': "url('../public/images/bg-Semuc.jpg')",
        'fondo-flower': "url('../public/images/bg-flower.jpg')",
        'fondo-flower2': "url('../public/images/bg-flower2.jpg')",
      }, 
      gridTemplateRows: {
        //grid para layout
        'joma6': '4fr 1fr 1fr',
      }
    },
  },
  plugins: [],
}
