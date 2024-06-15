/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      color :{
        'white' : '#FDFFFF',
        'CelestianBlue' : '#20A4F3',
        'Zaffre' : '#0D21A1',
        'EerieBlack' : '#242423',
        'Jet' : '#333533'
      }
    },
  },
  plugins: [
    
  ],
};
