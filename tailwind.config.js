/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light': '#fafafa',
        'dark': '#18191a',
        'green': '#539E43'
      },
      fontFamily: {
        'inter': 'Inter, sans-serif'
      }
      
    },
  },
  plugins: [],
  darkMode: ['class', '[data-mode="dark"]']
}
