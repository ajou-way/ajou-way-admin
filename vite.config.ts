import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@/pages': '/src/pages',
      '@/components': '/src/components',
      '@/hooks': '/src/hooks',
      '@/queries': '/src/queries',
      '@/apis': '/src/apis',
      '@/mocks': '/src/mocks',
      '@/utils': '/src/utils',
      '@/constants': '/src/constants',
      '@/types': '/src/types',
      '@/assets': '/src/assets',
      '@/styles': '/src/styles',
    },
  },
});
