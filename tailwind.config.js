/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  // Enable class-based dark mode
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Scan your src files
    './.storybook/**/*.{js,jsx}',  // Include Storybook stories
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#1E3A8A',  // Primary color
        secondary: '#FFDD67',  // Secondary color
        // Text colors for light and dark mode
        text: {
          light: '#333',  // Light mode text
          dark: '#fff',  // Dark mode text
        },
        // Background colors for light and dark mode
        background: {
          light: '#f0f0f0',  // Light mode background
          dark: '#121212',  // Dark mode background
        },
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
      },
    },
  },
  plugins: [],
};