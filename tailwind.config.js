/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      gray: colors.stone,
      purple: colors.violet,
      green: colors.emerald,
    },
    fontFamily: {
      sans: "GillSans",
      heading: ["Coolvetica", "sans-serif"],
    },
  },
  plugins: [],
};
