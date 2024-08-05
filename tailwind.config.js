/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#263238",
          100: "#E9FAFF",
          200: "#0A0B5C",
          flat: '#0000FF',
        },
        black: {
          100: "#263238",
        },
        white: {
          100: "#E9FAFF"
        },
        blue: {
          100: "#020BFF",
          200: "#0A0B5C",
          flat: "#0000FF",
        }
      },
      fontFamily: {
        sans: ['Mona Sans', 'sans-serif'], // Define Mona Sans como fonte padrão
      },
    },
  },
  plugins: [],
}