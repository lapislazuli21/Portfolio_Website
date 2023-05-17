/** @type {import('tailwindcss').Config} */

const {  fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        merri: ['var(--font-work)', ...fontFamily.sans]
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#F9003A",
        primaryDark: "#FF3363",
        secondary: "#00F9BF",
        secondaryDark: "#33FFCF",
        alt: "#E4DBD9",
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);',
        circularDark: 'repeating-radial-gradient(rgba(255, 255, 255, 0.8) 2px, #1b1b1b 5px, #1b1b1b 100px);'
      }
    },
    screens: {
      "2xl": { max: "1535px" },
    // => @media (max-width: 1535px) { ... }

      "xl": { max: "1279px" },
    // => @media (max-width: 1279px) { ... }

      "lg": { max: "1023px" },
    // => @media (max-width: 1023px) { ... }

      "md": { max: "767px" },
    // => @media (max-width: 767px) { ... }

      "sm": { max: "639px" },
    // => @media (max-width: 639px) { ... }

      "xs": { max: "479px" },
    }
  },
  plugins: [],
}

