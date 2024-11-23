/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        logoColor: "#2C036A",
        logoDot: "#FF00FF",
        primaryButton: "#5E3FDE",
        HeroColor: "#2F00A8",
        sidebarColor: "#E8F1FD",
      }
    },

  },
  plugins: [],
}