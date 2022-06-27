/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fondo-semuc': "url('../public/images/bg-Semuc.jpg')",
      }
    },
  },
  plugins: [],
}
