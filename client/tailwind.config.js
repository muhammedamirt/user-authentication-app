/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient': 'linear-gradient(to bottom, #ffeb90, #f9f2aa, #f6f8c3, #f6fcdc, #fbfff3)',
      })
    },
  },
  plugins: [],
} 

