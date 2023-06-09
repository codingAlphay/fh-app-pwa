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
      colors: {
        'black': '#1E1E1E',
        'htmlblack': '#121212',
        'white': '#FFFFFF',
        'red': '#FB3131',
        'green': '#008E4D',
        'blue': '#2CC5DA',
        'gray': '#D2D2D2'
      },
      fontSize: {
        'base': '1.6rem',
        '8c': '0.8rem',
        '12c': '1.2rem',
        '16c': '1.6rem',
        'time-span': '.65rem', 
        'maintitle-column': '.75rem',
        'maintitle-course': '1.125rem',
        'menutitle': '1.25rem',
        'maintitle': '2rem', 
      },
      animation: {
        'scale-up': 'scaleUp 2s ease-in-out'
      },
      keyframes: {
        scaleUp: {
          '0%': { width: '25%' },
          '100%': { width: '33%' },
        }
      },
    },
    plugins: [],
  },
}