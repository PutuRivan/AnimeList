/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
