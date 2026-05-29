/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans TC', 'Microsoft JhengHei', 'PingFang TC', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(34,211,238,.35)',
        card: '0 20px 70px rgba(2,8,23,.35)',
      },
    },
  },
  plugins: [],
}
