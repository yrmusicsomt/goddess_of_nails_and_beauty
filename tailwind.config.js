/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0EB',
        brown: '#8B6F4E',
        charcoal: '#3D2B1F',
      },
      fontFamily: {
        sans: ['Cormorant Garamond', 'Georgia', 'serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
