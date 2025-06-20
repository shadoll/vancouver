import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: process.env.NODE_ENV === 'production' ? '/vancouver/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
  },
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
      interval: 1000,
    },
    hmr: {
      port: 5173,
    },
  }
})
