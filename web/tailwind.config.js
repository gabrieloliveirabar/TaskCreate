/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      screens: {
        tablet:'500px',
      },
      colors: {
        background: "#1C89C7",
        button_background: "#23ABFA",
        button_background_red: "#FA2323",
        header_background: "#11547A",
        input_background: "#11547A",
        h1: {
          color: "#ffffff",
        },
        spacing: {
          "5px": "5px",
        },
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
