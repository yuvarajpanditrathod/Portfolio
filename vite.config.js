import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // When deploying to GitHub Pages for a repository site, set base to '/<repo>/'
  // Change or remove this if deploying to a custom domain or root.
  base: '/Portfolio/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
