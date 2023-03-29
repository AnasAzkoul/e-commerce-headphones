/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-light': '#EFE9E7',
        primary: '#90A2D8',
        'primary-dark': '#6881ca',
        'primary-light': '#b4c0e4',
      },
      backgroundPosition: {
        hero: '20% 3.5rem',
      },
    },
  },
  plugins: [],
};
