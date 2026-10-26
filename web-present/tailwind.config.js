/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        mono: ['"Space Mono"', 'monospace']
      },
      boxShadow: {
        pixel: '6px 6px 0 #000000',
        panel: '9px 9px 0 #000000',
        white: '6px 6px 0 #FFFFFF'
      },
      backgroundImage: {
        grid: 'linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)',
        whiteGrid: 'linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)',
        stripes: 'repeating-linear-gradient(90deg, #000000 0 4px, #FFFFFF 4px 8px)'
      },
      keyframes: {
        blink: { '50%': { opacity: '0' } },
        crawl: { to: { transform: 'translateX(-50%)' } }
      },
      animation: {
        blink: 'blink 1.1s steps(2, start) infinite',
        crawl: 'crawl 28s linear infinite'
      }
    }
  },
  plugins: []
};
