/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#0e2f67ff',
        'midnight-dark': '#061c48ff',
        'electric': '#113d69ff',
        'accent-red': '#4d0507ff',
        'slate-text': '#94A3B8',
        'ice-blue': '#EAF3FF',
        // Keep legacy colors mapped to the new ones or similar to avoid completely breaking things while transitioning
        'dcure-navy': '#0c2a5eff',
        'dcure-red': '#6b0f12ff',
        'dcure-cyan': '#09345fff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.1) 0%, rgba(6, 16, 28, 0) 50%)',
      }
    },
  },
  plugins: [],
}
