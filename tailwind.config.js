module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "blue-bold": "#111e6c",
        "red-bold": "#ef434e",
        "gray-bold": {
          light: "#969696",
          dark: "#323232"
        },
        background: "#e5e7ef"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
