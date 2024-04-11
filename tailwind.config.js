/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,php}"],
  theme: {
    fontFamily: {
      "outfit": ['Outfit', 'sans-serif']
    },
    fontSize: {
      'sm': '0.8rem',
      'base': '1rem',
      'xl': '1.25rem',
    },
    colors: {
      'primary': '#124f22',
      'secondary': '#ffaaaa'
    },
    spacing: {
      '5px': '5px'
    },
    margin: {
      '100px': '100px',
    }
  },
  extend: {

  },
  plugins: [],
}