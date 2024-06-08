/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // O usa 'media' para habilitar el modo oscuro basado en la preferencia del sistema
  content: [

    "./src/**/*.{html,ts}", // add this line
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // add this line
  ],
}

