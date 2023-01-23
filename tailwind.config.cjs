/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins',
        inter: 'Inter',
        inherit: 'inherit',
      },
      //
      colors: {
        white: '#fff',
        whGray: {
          100: '#fefefe',
          200: '#f0f3f5',
          300: '#9aaec6',
          400: 'rgba(164, 164, 164, 0.92)',
          500: '#5e5e5e',
          600: 'rgba(80, 80, 80, 0.92)',
        },
        blSky: {
          100: '#138ec9',
          200: '#19698e',
          300: '#4c647e',
          400: '#343f52',
          500: '#1a365b',
          600: '#0d365e',
          700: '#0b2c4d',
        },
        black: '#000',
      },
      //
      spacing: {
        6.66: '6.66%',
        '4/1': '4%',
      },
    },
    //
    screens: {
      xs: '428px',
      // => @media (min-width: 428px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 992px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
