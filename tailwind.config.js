/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        jd: {
          green: "#367C2B",
          greenDark: "#1F4D1A",
          yellow: "#FFDE00",
          yellowSoft: "#FFF6B3",
        },
      },
    },
  },
  plugins: [],
};
