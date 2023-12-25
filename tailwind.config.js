/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#1597E4D4',
      error: '#D86161',
      dark: "#212121",
      placeholder: "#7A7A7A",
      white: "#FAFAFA",
      card: "#FFFFFF",
      border: "#E6E6E6",
      background: "#D8D8D8",
      transparent: "transparent",
      btnHover: "#0b73b1d4",
      grayText: "#646464"
    },
    fontFamily: {
      poppins: ['"Poppins"', 'sans-serif']
    }
  },
  plugins: [],
}

