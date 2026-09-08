import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function classicScriptForFileProtocol() {
  return {
    name: 'classic-script-for-file-protocol',
    enforce: 'post',
    transformIndexHtml(html) {
      return html
        .replaceAll(' type="module" crossorigin', '')
        .replaceAll(' crossorigin', '')
        .replace('<script src=', '<script defer src=')
    },
  }
}

export default defineConfig({
  base: './',
  plugins: [react(), classicScriptForFileProtocol()],
  build: {
    rollupOptions: {
      output: {
        format: 'iife',
        inlineDynamicImports: true,
      },
    },
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: ['localhost', '127.0.0.1', 'terminal.local'],
  },
})
