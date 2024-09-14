/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Example primary color (green, like you mentioned)
        secondary: '#FFFFFF', // White for secondary
        dark: {
          background: '#181818', // Dark background color
          text: '#EAEAEA', // Light text on dark background
        },
        light: {
          background: '#FFFFFF', // Light background color
          text: '#333333', // Dark text on light background
        },
        // You can add more custom colors as needed
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
    },
  },
  plugins: [],
};