/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'black': '#1E1E1E',
      'white': '#FFFFFF',
      'red': '#FB3131',
      'green': '#008E4D',
      'blue': '#2CC5DA'
    },
    fontSize: {
      base: '1.6rem',
      8: '0.8rem',
      12: '1.2rem',
      16: '1.6rem',
      20: '2rem',
      24: '2.4rem',
      32: '3.2rem'
    },
    spacing: {
      0: '0',
      4: '0.4rem',
      8: '0.8rem',
      12: '1.2rem',
      16: '1.6rem',
      20: '2rem',
      24: '2.4rem',
      32: '3.2rem',
      40: '4rem',
      48: '4.8rem',
      56: '5.6rem',
      64: '6.4rem',
      72: '7.2rem',
      80: '8rem'
    },
    plugins: [],
  },
}