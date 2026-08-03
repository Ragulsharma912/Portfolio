/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#050816',
          light: '#0b1120',
          lighter: '#111827',
        },
        primary: {
          DEFAULT: '#2563EB',
          50: '#eff6ff',
          100: '#dbeafe',
          400: '#3b82f6',
          500: '#2563EB',
          600: '#1d4ed8',
          700: '#1e40af',
        },
        secondary: {
          DEFAULT: '#38BDF8',
          400: '#38BDF8',
          500: '#0ea5e9',
        },
        accent: {
          DEFAULT: '#22D3EE',
          400: '#22D3EE',
          500: '#06b6d4',
        },
        success: {
          DEFAULT: '#10B981',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-blueprint':
          'linear-gradient(rgba(56,189,248,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.08) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow':
          'radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(37,99,235,0.15), transparent 40%)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(37, 99, 235, 0.45)',
        'glow-cyan': '0 0 20px rgba(34, 211, 238, 0.45)',
        'glow-lg': '0 0 60px rgba(37, 99, 235, 0.35)',
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 1.5s',
        'gradient-x': 'gradient-x 10s ease infinite',
        glow: 'glow 2.5s ease-in-out infinite alternate',
        blink: 'blink 1s step-end infinite',
        'spin-slow': 'spin 12s linear infinite',
        'spin-reverse-slow': 'spin-reverse 16s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        marquee: 'marquee 30s linear infinite',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'slide-up': 'slide-up 0.7s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glow: {
          '0%': { opacity: 0.4, filter: 'brightness(1)' },
          '100%': { opacity: 1, filter: 'brightness(1.3)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'scale-in': {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        'slide-up': {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
