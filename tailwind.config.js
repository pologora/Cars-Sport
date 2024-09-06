/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '600px',
          md: '800px',
          lg: '1000px',
          xl: '1200px',
          '2xl': '1200px',
        },
      },
      colors: {
        brand: '#0147FF',
        'light-primary': '#F7F7F7',
        'light-secondary': '#FFFFFF',
        'dark-primary': '#282828',
        'dark-secondary': '1D1D1B',
        'gallery-dots': '#EDEDED',
        decorative: '#D9DCD5',
      },
      fontFamily: {
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        'roboto-flex': ['Roboto Flex', 'sans-serif'],
      },
      fontSize: {
        sm: ['14px', '21px'],
        medium: ['15px', '23px'],
        h1: ['79px', '84px'],
        h2: ['40px', '48px'],
        h3: ['25px', '38px'],
        h4: ['21.5px', '32px'],
      },

      backgroundImage: {
        hero: 'url("/src/assets/images/cars/hero2.jpeg")',
      },
      keyframes: {
        'image-fade': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'image-fade': 'image-fade 0.5s linear',
      },
    },
  },
  plugins: [],
};
