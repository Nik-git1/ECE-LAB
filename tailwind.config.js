/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
         'hero': "url('../src/components/assests/navImage.svg')",
         'blackImage': "url('../src/components/assests/page4.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
