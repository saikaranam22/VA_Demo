/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'va-blue': '#003f7f',
        'va-dark-blue': '#112e51',
        'va-red': '#e31c3d',
        'va-green': '#00a91c',
        'va-gray': '#5b616b',
        'va-light-gray': '#f1f1f1',
      },
      fontFamily: {
        'sans': ['Source Sans Pro', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

