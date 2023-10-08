/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        body: '#EFF0FF',
      },
      colors: {
        story: '#5E6B74',
      }
    },
  },
  plugins: [],
}