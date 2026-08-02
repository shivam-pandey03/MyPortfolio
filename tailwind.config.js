/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B1120', // Deep slate
        surface: '#0F172A',    // Slightly lighter slate for cards/navbar
        primary: '#3B82F6',    // Electric Blue
        secondary: '#8B5CF6',  // Neon Purple
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}