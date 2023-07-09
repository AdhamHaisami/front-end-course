import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://ec2-3-87-88-144.compute-1.amazonaws.com:4040',
        changeOrigin: true,
      },
    }
  }
})
