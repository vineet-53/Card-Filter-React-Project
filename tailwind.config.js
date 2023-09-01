/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow : { 
        '3xl': '4px 2px 60px -20px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

