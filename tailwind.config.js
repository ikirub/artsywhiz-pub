/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'artsy-brown': '#625D53',
        'artsy-yellow': '#F5D018',
        'artsy-pink': '#FFB0C5',
        'artsy-cream': '#FEFEFE',
        'artsy-gray': '#DEDEDE',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
