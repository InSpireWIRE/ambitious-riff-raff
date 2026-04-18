import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FAF7F2',
        fg: '#1A1A1A',
        accent: '#C85A3A',
        muted: '#8A8680',
        surface: '#FFFFFF',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config