/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors:{
        textColor:'#DCB73C',
        secondary:"#f2e7d8"

      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}