/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js", // Add this line
  ],
  theme: {
    extend: {
      colors: {
        // Base Colors
        custom: {
          dark: "#101820", // Dark Blue
          red: "#F96167", // Red
          yellow: "#FEE715", // Yellow
        },
        // Tints and Tones
        customDark: {
          50: "#e5e6e8",
          100: "#ccd1d3",
          200: "#b3bbc0",
          300: "#99a5ae",
          400: "#808e9c",
          500: "#677884",
          600: "#505f6b",
          700: "#394753",
          800: "#232e3b",
          900: "#101820",
        },
        customRed: {
          50: "#fdeef0",
          100: "#fbdadd",
          200: "#f8c4cb",
          300: "#f5adb9",
          400: "#f296a7",
          500: "#f96167", // Base
          600: "#de4152",
          700: "#b33447",
          800: "#882a3c",
          900: "#602033",
        },
        customYellow: {
          50: "#fffdee",
          100: "#fffad8",
          200: "#fff6c1",
          300: "#fff3aa",
          400: "#ffef94",
          500: "#fee715", // Base
          600: "#e4d212",
          700: "#b3a40d",
          800: "#817509",
          900: "#514805",
        },
      },
    },
  },
  plugins: [
    require("flowbite/plugin"), // Add Flowbite plugin
  ],
};
