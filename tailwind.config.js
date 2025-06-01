/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-dark': '#050721',
        'cyber-darker': '#020210',
        'neon-blue': '#00f0ff',
        'neon-purple': '#bf00ff',
        'neon-green': '#00ff9d',
        'neon-pink': '#ff00f0',
        'cyber-yellow': '#f6ff00',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        cyber: ['"Orbitron"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 0.5s infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { boxShadow: '0 0 10px #00f0ff, 0 0 20px #00f0ff' },
          '50%': { boxShadow: '0 0 15px #00f0ff, 0 0 30px #00f0ff' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        }
      },
      backgroundImage: {
        'cyber-grid': "url('https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'cyber-city': "url('https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
    },
  },
  plugins: [],
};