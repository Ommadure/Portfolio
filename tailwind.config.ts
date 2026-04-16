import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 80px rgba(56,189,248,0.14)',
        card: '0 24px 90px rgba(15,23,42,0.28)',
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at top, rgba(56,189,248,0.16), transparent 24%), radial-gradient(circle at 80% 18%, rgba(168,85,247,0.12), transparent 20%)',
      },
    },
  },
  plugins: [],
} satisfies Config
