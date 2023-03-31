/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/*.{vue,js,ts,jsx,tsx}',
    './components/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontSize: {
        '6xl': '4rem',
      },
      lineHeight: {
        12: '3rem',
      },
    },
  },
  plugins: [require('daisyui')],
};
