import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // This repository deploys as a GitHub Pages project site:
  // https://guoyjeng.github.io/The-Remember-me/
  base: '/The-Remember-me/',
  plugins: [react()],
});
