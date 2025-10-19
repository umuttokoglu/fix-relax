/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#cef240',
        'primary-dark': '#3f5363',
        'text-primary': '#212121',
        'text-secondary': '#616161',
        'bg-light': '#f2f4f7',
      },
      fontFamily: {
        'rethink': ['"Rethink Sans"', 'sans-serif'],
        'sofia': ['Sofia', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


