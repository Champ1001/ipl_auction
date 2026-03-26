/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ipl: {
          blue: '#003478',
          gold: '#F5A623',
          dark: '#0a0e1a',
          card: '#111827',
          border: '#1f2937',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'cursive'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'pulse-fast': 'pulse 0.8s cubic-bezier(0.4,0,0.6,1) infinite',
        'slide-up': 'slideUp 0.3s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
        'bounce-in': 'bounceIn 0.5s cubic-bezier(0.68,-0.55,0.27,1.55)',
      },
      keyframes: {
        slideUp: { from: { opacity: 0, transform: 'translateY(12px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeIn:  { from: { opacity: 0 }, to: { opacity: 1 } },
        bounceIn: { from: { opacity: 0, transform: 'scale(0.7)' }, to: { opacity: 1, transform: 'scale(1)' } },
      },
    },
  },
  plugins: [],
}
