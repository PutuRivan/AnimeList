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
    daisyui: {
      themes: [
        {
          mytheme: {
            "primary": "#0088ff",
            "primary-content": "#000616",
            "secondary": "#915100",
            "secondary-content": "#eadbcf",
            "accent": "#0012ff",
            "accent-content": "#c7dcff",
            "neutral": "#191511",
            "neutral-content": "#cbcac9",
            "base-100": "#25292e",
            "base-200": "#1f2227",
            "base-300": "#191c1f",
            "base-content": "#ced0d1",
            "info": "#009cd7",
            "info-content": "#000911",
            "success": "#00ffbf",
            "success-content": "#00160d",
            "warning": "#c05c00",
            "warning-content": "#0e0300",
            "error": "#cc002e",
            "error-content": "#fcd6d4",
          },
        },
      ],
    },
  },
  plugins: [require("daisyui")],
};
