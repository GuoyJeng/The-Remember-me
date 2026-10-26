/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { pixel: ['"Press Start 2P"', 'monospace'], mono: ['"Space Mono"', 'monospace'] },
      boxShadow: { pixel: '6px 6px 0 #000', panel: '9px 9px 0 #000', white: '8px 8px 0 #fff' },
      backgroundImage: {
        grid: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
        stripes: 'repeating-linear-gradient(45deg, #fff 0 5px, #000 5px 10px)',
        cross: 'linear-gradient(90deg, transparent 0 28px, #000 28px 32px, transparent 32px), linear-gradient(transparent 0 28px, #000 28px 32px, transparent 32px)'
      },
      keyframes: { blink: { '50%': { opacity: '0' } }, crawl: { to: { transform: 'translateX(-50%)' } } },
      animation: { blink: 'blink 1s steps(2, start) infinite', crawl: 'crawl 26s linear infinite' }
    }
  },
  plugins: []
};
