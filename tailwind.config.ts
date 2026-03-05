import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc4fa',
          400: '#36a5f5',
          500: '#1e40af',
          600: '#1e3a8a',
          700: '#172554',
          800: '#172554',
          900: '#0f172a',
        },
      },
      boxShadow: {
        card: '0 4px 24px -4px rgba(0,0,0,0.08), 0 8px 48px -8px rgba(30,58,138,0.12)',
        cardHover: '0 12px 40px -8px rgba(0,0,0,0.12), 0 16px 56px -12px rgba(30,58,138,0.18)',
      },
    },
  },
  plugins: [],
}
export default config
