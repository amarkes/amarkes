import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use root '/' for Cloudflare or dev, and '/amarkes/' for GitHub Pages builds
  base: process.env.CF_PAGES || process.env.CF_WORKER ? '/' : (command === 'build' ? '/amarkes/' : '/'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}));
