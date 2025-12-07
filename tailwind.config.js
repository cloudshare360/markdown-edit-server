/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./03-development/app/index.html",
    "./03-development/app/frontend/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'editor-bg': '#1e1e1e',
        'sidebar-bg': '#252526',
        'accent': '#007acc',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
