import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "./build"
  },
  resolve: {
    alias: 
      {
        '@': path.resolve(__dirname, './src'),
      },
  }
})
