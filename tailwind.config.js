/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'mob':'330px',
      'sm':'640px',
      'md':'960px',
      'lg':'1200px',
    },
    extend: {},
  },
  plugins: [],
}