/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        'fitness-dark': '#0F1020',
        'fitness-accent': '#00FFB3'
      },
      backgroundImage: {
        'fitness-gradient': 'linear-gradient(135deg, #0F1020 0%, #1A2238 100%)'
      }
    }
  },
  plugins: []
}