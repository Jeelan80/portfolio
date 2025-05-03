import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true, // Listen on all addresses, including LAN and public addresses
    port: 5173, // Default port
    strictPort: true, // If port is in use, don't try another
    open: true // Open browser on server start
  }
});