/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0F8B8D",   // teal (from your screenshot)
          dark: "#0C6F71",
        },
      },
    },
  },
  plugins: [],
};
