/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', '"Noto Sans Thai"', 'monospace'],
      },
      colors: {
        retro: {
          /* ── Strict Black & White Pixel Art palette ── */
          bg:     '#ffffff', // page background  → white
          panel:  '#ffffff', // card / panel     → white
          alt:    '#f0f0f0', // alternating row  → off-white
          line:   '#000000', // borders / dividers → black
          yellow: '#000000', // rank 1 accent    → black (remapped)
          green:  '#000000', // rank 2 / success → black (remapped)
          red:    '#000000', // rank 3 / error   → black (remapped)
          cyan:   '#000000', // date / secondary → black (remapped)
          text:   '#000000', // body text        → black
        },
      },
      keyframes: {
        blink: { '0%,50%': { opacity: 1 }, '50.01%,100%': { opacity: 0 } },
        load:  { '0%': { width: '0%' }, '100%': { width: '100%' } },
        scanline: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      animation: {
        blink:    'blink 1s steps(1) infinite',
        load:     'load 1.6s steps(8) infinite',
        scanline: 'scanline 6s linear infinite',
      },
      boxShadow: {
        pixel:    '6px 6px 0px #000000',
        'pixel-sm': '4px 4px 0px #000000',
      },
    },
  },
  plugins: [],
};
