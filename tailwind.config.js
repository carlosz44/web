const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      gray: colors.warmGray,
      purple: colors.violet,
      green: colors.emerald,
    },
    extend: {},
    fontFamily: {
      sans: "GillSans",
      heading: ["Coolvetica", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
