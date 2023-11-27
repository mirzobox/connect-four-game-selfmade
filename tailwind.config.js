/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      grotesk: ["Space Grotesk", "Arial", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
