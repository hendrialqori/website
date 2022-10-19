/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#f7f7f7",
        dark: "#1b1d24"
      }
    },
  },
  plugins: [],
  darkMode: ['class', '[data-mode="dark"]']
}
