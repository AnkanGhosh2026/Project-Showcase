import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://project-showcase-uadg.onrender.com/',
        changeOrigin: true,
      }
    }
  }
})
