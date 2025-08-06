/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  // Dark mode ni class orqali boshqarish
  darkMode: "class",

  theme: {
    extend: {
      // Qo'shimcha ranglar yoki stil lar
      colors: {
        primary: {
          light: "#3b82f6", // Light mode uchun
          dark: "#1e40af", // Dark mode uchun
        },
      },
    },
  },

  plugins: [],
};
