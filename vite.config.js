import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, 'index.html'),
        projetos: resolve(import.meta.dirname, 'projetos.html'),
        sobre: resolve(import.meta.dirname, 'sobre.html'),
        cadastro: resolve(import.meta.dirname, 'cadastro.html'),
        termos: resolve(import.meta.dirname, 'termos.html')
      }
    }
  }
});
