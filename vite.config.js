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
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Keep SVG files and other images in the root for easier path resolution
          if (assetInfo.name?.endsWith('.svg') || assetInfo.name?.endsWith('.jpg') || assetInfo.name?.endsWith('.png')) {
            return '[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
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
