import defaultTheme from "tailwindcss/defaultTheme";
 
import colors from "tailwindcss/colors";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";
 
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#263238',
          100: '#E9FAFF',
          200: '#0A0B5C',
          flat: '#0000FF'
        },
        black: {
          100: '#263238'
        },
        white: {
          100: '#E9FAFF'
        },
        blue: {
          100: '#020BFF',
          200: '#0A0B5C',
          flat: '#0000FF'
        }
      },
      fontFamily: {
        sans: ['Mona Sans', 'sans-serif'] // Define Mona Sans como fonte padrão
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        }
      }
    }
  },
  plugins: [addVariablesForColors]
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
