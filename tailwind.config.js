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
    extend: {
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0088ff",
          "secondary": "#915100",
          "accent": "#0012ff",
          "neutral": "#191511",
          "base-100": "#25292e",
          "info": "#009cd7",
          "success": "#00ffbf",
          "warning": "#c05c00",
          "error": "#cc002e",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
};
