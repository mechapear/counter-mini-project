/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./counter-tailwind.html"],
  theme: {
    extend: {
      colors:{
        'page-bg': 'var(--background-color)',
        'text-color': 'var(--text-color)',
        card: 'var(--card-color)',
        input: 'var(--input-box)',
        'button-text': 'var(--button-text-color)',
        button: 'var(--button-color)',
        'button-hover': 'var(--button-hover-color)',
      }
    },
  },
  plugins: [],
}