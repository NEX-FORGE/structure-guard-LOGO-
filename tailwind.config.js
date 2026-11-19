/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#00BFFF',       // Electric Blue
          secondary: '#075BFF',     // Deep Royal Blue
          accent: '#00E5FF',        // Cyan
          dark: '#03060D',          // Almost Black Background
          card: '#091426',          // Dark Navy Card
          cardHover: '#0D1C36',     // Card Hover
          border: 'rgba(0, 191, 255, 0.18)',
          borderGlow: 'rgba(0, 229, 255, 0.45)',
          silver: '#CBD5E1',
          silverLight: '#E2E8F0',
          metallic: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -4px rgba(0, 229, 255, 0.35)',
        'glow-blue': '0 0 35px -5px rgba(0, 191, 255, 0.4)',
        'glow-royal': '0 0 40px -5px rgba(7, 91, 255, 0.45)',
        'glow-hero': '0 0 80px -10px rgba(0, 229, 255, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.55)',
        'card-subtle': '0 20px 40px -15px rgba(3, 6, 13, 0.7), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        'card-glow': '0 25px 50px -12px rgba(0, 191, 255, 0.2), inset 0 1px 1px 0 rgba(0, 229, 255, 0.3)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'glow-shift': 'glowShift 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'beam': 'beamFlow 10s linear infinite',
        'laser-sweep': 'laserSweep 4s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.99)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glowShift: {
          '0%, 100%': { opacity: '0.6', filter: 'hue-rotate(0deg)' },
          '50%': { opacity: '0.9', filter: 'hue-rotate(15deg)' },
        },
        laserSweep: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
