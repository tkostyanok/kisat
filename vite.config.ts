import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'src': '/src',
      'assets': '/src/assets',
      'components': '/src/components',
      'constants': '/src/constants',
      'hooks': '/src/hooks',
      'layouts': '/src/layouts',
      'pages': '/src/pages',
      'services': '/src/services',
      'types': '/src/types',
    },
  },
});
