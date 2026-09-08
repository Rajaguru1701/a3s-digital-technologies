/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#17A1AB',
          'teal-dark': '#12828b',
          'teal-light': '#2cc2cd',
          mint: '#4DC3B7',
          'mint-light': '#6be3d8',
          purple: '#403458',
          'purple-light': '#5a497c',
          blue: '#0065AB',
          'blue-light': '#0083dd',
          navy: '#0A0E1A',
          'navy-light': '#121829',
          'navy-card': '#161F36',
          'navy-border': '#222D47',
          light: '#F7F9FA',
          'light-card': '#FFFFFF',
          'light-border': '#E2E8F0',
          dark: '#1A1F2C',
          muted: '#B8C0CC',
          'muted-dark': '#64748B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(23, 161, 171, 0.25), rgba(77, 195, 183, 0.08), transparent 70%)',
        'cta-glow': 'radial-gradient(circle at center, rgba(23, 161, 171, 0.2), transparent 70%)',
        'brand-gradient': 'linear-gradient(135deg, #17A1AB 0%, #4DC3B7 100%)',
        'purple-gradient': 'linear-gradient(135deg, #403458 0%, #0065AB 100%)',
      },
      boxShadow: {
        'glow-teal': '0 0 25px -5px rgba(23, 161, 171, 0.4)',
        'glow-mint': '0 0 25px -5px rgba(77, 195, 183, 0.4)',
        'card-soft': '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 20px 40px -15px rgba(23, 161, 171, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
