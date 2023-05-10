/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Oswald', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'base': '1.6rem',
        '8c': '0.8rem',
        '12c': '1.2rem',
        '16c': '1.6rem',
        'time-span': '.65rem', 
        'maintitle-column': '.75rem',
        'maintitle-course': '1.125rem',
        'maintitle': '2rem',
      },
    },
    colors: {
      'black': '#1E1E1E',
      'white': '#FFFFFF',
      'red': '#FB3131',
      'green': '#008E4D',
      'blue': '#2CC5DA'
    },
    plugins: [],
  },
}