// Codes By Mahdi Tasha

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/index.tsx",
    "./src/components/**.tsx",
    "./src/chunks/**.tsx",
  ],
  theme: {
    extend: {
      colors: {'theme-color': '#8e68d7',},
    },
  },
  plugins: [],
}

