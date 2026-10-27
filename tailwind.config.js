/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        mint: '#f0f7f4',
        card: '#ffffff',
        primary: '#2f8f6f',
        primaryDark: '#1f6b53',
        textMain: '#2d3a35',
        textSub: '#6b7d75',
        borderSoft: '#d8e6de',
        chip: '#e3efe9',
      },
      boxShadow: {
        card: '0 4px 16px rgba(47,143,111,0.08)',
        cardHover: '0 8px 24px rgba(47,143,111,0.16)',
      },
    },
  },
  plugins: [],
}
