/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#E0E0E0",
        tertiary: "#000000",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        header: "url('/assets/men_shoe_banner.jpg')",
      },
    },
  },
  plugins: [],
};
