/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,tsx,ts,jsx}",
    "./components/**/*.{js,tsx,ts,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F3F3F3",
        itemBg: "#FFF",
      },
    },
  },
  plugins: [],
};
