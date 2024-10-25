/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      // Fixed typo here
      sm: '480px',
      md: '768px',
      lg: '976px', // Added 'px' to maintain consistency
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(12, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)', // Changed semicolon to comma
      },
    },
  },
  plugins: [],
};
