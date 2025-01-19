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
        customZinc: '#D1E7FF', // Add your custom color here
        customGray: '#8B96A5',
        background: '#F7FAFC',
        background2: '#EFF2F4',
        background3: '#BDC4CD',
        focus: '#E5F1FF',
        customborder: '#E0E0E0',
      }

    },
  },
  plugins: [],
}

