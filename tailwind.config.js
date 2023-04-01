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
        secondary: '#a9b83d',
      },
      backgroundPosition: {
        hero: '20% 3.5rem',
      },
      gridTemplateColumns: {
        responsive: 'repeat(auto-fit, minmax(250px, 1fr))',
        card: '50px 1fr',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
