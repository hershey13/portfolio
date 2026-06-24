/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        cream: {
          DEFAULT: '#FEFCF8',
          50: '#FFFDF9',
          100: '#FBF5EC',
          200: '#F4E7D6',
        },
        paper: '#FFFFFF',
        linen: '#F7EFE5',
        ink: {
          DEFAULT: '#271E2F',
          50: '#FFFDF9',
          100: '#F8F1E8',
          200: '#E9DCCA',
          300: '#CDBBA5',
          400: '#9C8977',
          500: '#716275',
          600: '#5C5063',
          700: '#423748',
          800: '#2F2635',
          900: '#1A1228',
        },
        rose: {
          DEFAULT: '#E8637A',
          light: '#F4A0B0',
          soft: '#FBE5E9',
          dark: '#BC4058',
        },
        sage: {
          DEFAULT: '#74C69D',
          light: '#BCE6CC',
          soft: '#E9F8EF',
          dark: '#3A8F67',
        },
        lavender: {
          DEFAULT: '#A594F9',
          light: '#C4B5F4',
          soft: '#F0EDFF',
          dark: '#6D5BD0',
        },
        amber: {
          DEFAULT: '#F5C36B',
          light: '#F8DA9A',
          soft: '#FFF5D9',
          dark: '#B97918',
        },
        peach: {
          DEFAULT: '#F4B7A6',
          soft: '#FFF0EA',
          dark: '#C96E57',
        },
      },
      boxShadow: {
        soft: '0 18px 60px rgba(66, 55, 72, 0.08)',
        card: '0 12px 35px rgba(66, 55, 72, 0.07)',
        glow: '0 18px 45px rgba(232, 99, 122, 0.18)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-left': 'slideLeft 0.6s ease forwards',
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'flutter': 'flutter 8s ease-in-out infinite',
        'twinkle': 'twinkle 2.8s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        flutter: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(-7deg)' },
          '35%': { transform: 'translate3d(10px, -14px, 0) rotate(8deg)' },
          '70%': { transform: 'translate3d(-8px, -4px, 0) rotate(-3deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.45', transform: 'scale(0.85) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1.12) rotate(12deg)' },
        },
      },
    },
  },
  plugins: [],
}
