/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef3f2',
          100: '#fee4e2',
          200: '#fececa',
          300: '#fdaba5',
          400: '#fb7a70',
          500: '#f85547',
          600: '#e6392e',
          700: '#c02a21',
          800: '#9f261f',
          900: '#842620',
        },
      },
    },
  },
  plugins: [],
}
