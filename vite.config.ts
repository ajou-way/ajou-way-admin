import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
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
