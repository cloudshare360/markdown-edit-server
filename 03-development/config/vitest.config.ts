import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: resolve(__dirname, '../app/frontend/src/test/setup.ts'),
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '../app/frontend/src'),
    },
  },
});
