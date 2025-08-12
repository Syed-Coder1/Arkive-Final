import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // ✅ This makes assets load in the packaged .exe
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
