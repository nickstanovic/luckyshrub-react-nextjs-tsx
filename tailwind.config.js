/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        'container': '0 8px 12px rgba(0, 0, 0, 0.5)',
        'image': '0 3px 8px rgba(0, 0, 0, 0.74)',
        'nav': '0 8px 12px rgba(0, 0, 0, 0.2)',
      },
      colors: {
        'clay': '#C3B091',
        'grass': '#26877F',
      }
    }
  }
}
