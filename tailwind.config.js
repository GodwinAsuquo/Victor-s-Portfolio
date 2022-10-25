/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
     screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        //main colors
        white: 'hsla(0, 0%, 98%, 1)',
        black: 'hsla(0, 0%, 0%, 1)',
        deepBlack: 'hsla(0, 0%, 8%, 1)',
        deepGray: '#383535;',
        blue: 'hsla(201, 82%, 43%, 1)',
        deepGreen:'hsla(176, 77%, 15%, 1)',
        Gray: 'hsla(200, 10%, 30%, 1)',
        lightPurple: 'hsla(226, 46%, 46%, 1)',
        dullGreen: 'hsla(198, 82%, 23%, 1)',
        //secondary colors
        lightGray: 'hsla(160, 10%, 94%, 1)',
        lightGreenBlue: 'hsla(193, 100%, 95%, 1)',
        verylightPurple: 'hsla(225, 100%, 95%, 1)',
        veryLightGray: 'hsla(225, 100%, 95%, 1)'
      }
    },
  },
  plugins: [],
}
