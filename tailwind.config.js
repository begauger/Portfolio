/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#181825",         // deep dark background
        accentPurple: "#a259f7",   // vibrant purple
        accentTeal: "#2de2e6",     // vibrant teal
        accentYellow: "#ffe066",   // vibrant yellow
        cardBg: "#232347",         // slightly lighter card background
        borderDark: "#282a36",     // dark border
      },
      fontFamily: {
        display: ['"Baloo 2"', 'cursive', 'sans-serif'],
      },
      boxShadow: {
        pop: '0 4px 24px 0 #a259f7',
      },
    },
  },
  plugins: [],
}