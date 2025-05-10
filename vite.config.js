import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/chto-gde-cogda/',
  plugins: [react()],
  assetsInclude: ['**/*.svg'],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
