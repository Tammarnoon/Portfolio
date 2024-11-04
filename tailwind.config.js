/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        primaryA : "#79717A",
        primaryB : "#A68F97",
        primaryC : "#4B4952",
        primaryD : "#004F4D",
        primaryBase : "#e8ebed",
        primaryBG : "#1F2024",
        primarySubBG : "#22232b"
      }
    },
  },
  plugins: [],
};
