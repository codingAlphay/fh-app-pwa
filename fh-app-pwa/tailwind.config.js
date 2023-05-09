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