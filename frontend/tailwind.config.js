/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        mynerve: ['Mynerve', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        secondaryColor: "#146fe6",
        sidebarColor: "#e8f1fd",
      }
    },
  },
  plugins: [],
}