import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    sourcemap: false,
  },
  server: {
    proxy: {
      // '/authelia': {
      //   target: 'https://jpacock.com/authelia',
      //   changeOrigin: true,
      //   secure: true,
      // },  
      '/authelia/api': {
        target: 'https://jpacock.com', // Replace with your target base URL
        changeOrigin: true,
        secure: true, // Use this if you're connecting to an HTTPS endpoint
        rewrite: (path) => path.replace(/^\/authelia/, '/authelia'), // Adjust path if necessary
      },
      // '/api/recipes': {
      //   target: 'http://localhost:3003/',
      //   changeOrigin: true,
      //   secure: false,
      // },
    }
  }
})
