/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      black: "#000000",
      "royal-blue": "#5c2dd5",
      "electric-indigo": "#7945ff",
      "spicy-pink": "#fd6687",
      goldenrod: "#ffce67",
      white: "#ffffff",
    },
    fontFamily: {
      grotesk: ["Space Grotesk", "Arial", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
