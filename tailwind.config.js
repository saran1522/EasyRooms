/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E1E8EF",
          100: "#D4DEE7",
          200: "#B7C7D7",
          300: "#99B0C7",
          400: "#7C99B6",
          500: "#5E82A6",
          600: "#4C6B8A",
          700: "#3C546C",
          800: "#2C3D4F",
          900: "#1B2631",
          950: "#141C24",
        },
        accent: {
          50: "#FAF5F0",
          100: "#cce3de",
          200: "#E8D6BF",
          300: "#DDC2A2",
          400: "#98c1d9",
          500: "#98c1d9",
          600: "#3d5a80",
          700: "#3d5a80",
          800: "#3d5a80",
          900: "#003049",
          950: "#226f54",
        },
        btn: {
          500: "#293241",
          600: "#293241",
          700: "#415a77",
          750: "#3d5a80",
          800: "#006d77",
        },
      },
    },
  },
  plugins: [],
};
