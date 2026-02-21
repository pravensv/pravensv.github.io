// Optional: Prerendering configuration for Vite
// To use this, install: npm install --save-dev vite-plugin-prerender

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Note: You'll need to install and configure a prerendering plugin
// For now, this is a reference configuration

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/vitest.setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/main.tsx', 'src/vite-env.d.ts', 'src/**/*.test.{ts,tsx}', 'src/vitest.setup.ts'],
    },
  },
  base: '/',
  
  // Prerendering configuration (when installed)
  // Uncomment and configure when ready to use:
  /*
  plugins: [
    react(),
    prerender({
      routes: [
        '/',
        '/#experience',
        '/#education', 
        '/#skills',
        '/#projects',
        '/#contact'
      ]
    })
  ]
  */
})
