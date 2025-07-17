import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: command === 'build' ? '/react/' : '/', // solo usa /react/ al compilar
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
}))
