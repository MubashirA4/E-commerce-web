/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
        
      },fontWeight: {
        regular: '400', // Regular weight
        medium: '500',  // Medium weight
        semibold: '600', // Semi-bold weight
        bold: '700',    // Bold weight
      },
      colors: {
        Primary: '#1C1C1C',
        lightBlue: '#E3F0FF',  // Light Blue
        tealBlue: '#55BDC3',   // Teal Blue
        orange: '#F38332',     // Orange
        customZinc: '#D1E7FF', // Add your custom color here
        customGray: '#8B96A5',
        customGray2: '#505050',
        background: '#F7FAFC',
        background2: '#EFF2F4',
        background3: '#BDC4CD',
        backgroundblue: '#005ADE',
        backgroundpink: '#FFF0DF',
        focus: '#E5F1FF',
        customborder: '#E0E0E0',
        customLblue: '#0D6EFD',
        customborder2: '#DEE2E7',
        customgreen: '#00B517',
        customorange: '#FF9017',
        customred: '#FA3434',
        lightteal :'#C6F3F1',
        gradteal: '#4CA7A7'
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(to right, #127FFF, #0067FF)',
      },
    },
  },
  plugins: [
  ],
}

