/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {mob : {max : "500px"} , tab : {max : "900px"}, "4k" : {max : "1920px"} },
      colors : {
        primary : "#E8E51A",
       secondary : "#000" 
      }
    },
  },
  plugins: [],
}