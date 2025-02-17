/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['selector'],
  theme: {
    extend: {
      colors: {
        cream: '#E8E6D3',
        'cream-dark': '#D3D1C1',
        'cream-light': '#F5F4E8',
        'cream-lighter': '#F9F8F2',
        'cream-lightest': '#FCFCFA',
        'blue-dark': '#1F2937',
        'blue-light': '#E8EEF9',
        'blue-lighter': '#F5F7FA',
        'blue-lightest': '#FAFBFF',
        gray: '#E8E6D3',
        green: '#2ECC71',
        red: '#E74C3C',
        'white-rock': {
          50: '#f7f6ef',
          100: '#e8e6d3',
          200: '#d7d2b1',
          300: '#bfb585',
          400: '#ad9d62',
          500: '#9e8b54',
          600: '#877147',
          700: '#6d583b',
          800: '#5d4b36',
          900: '#514132',
          950: '#2e231a',
        },
        mandy: {
          50: '#fef2f3',
          100: '#fde6e7',
          200: '#fbd0d5',
          300: '#f7aab2',
          400: '#f27a8a',
          500: '#ea546c',
          600: '#d5294d',
          700: '#b31d3f',
          800: '#961b3c',
          900: '#811a39',
          950: '#48091a',
        },
      },
    },
  },
  plugins: [],
};
