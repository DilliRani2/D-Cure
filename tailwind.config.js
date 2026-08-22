/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dcure-navy': '#082F6B',
        'dcure-dark': '#050814',
        'dcure-blue': '#1F51FF',
        'dcure-cyan': '#00F0FF',
        'dcure-red': '#D71920',
        'dcure-gray': '#8E9BAE',
        'dcure-light': '#F8F9FA',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(31, 81, 255, 0.15) 0%, rgba(5, 8, 20, 0) 50%)',
      }
    },
  },
  plugins: [],
}
