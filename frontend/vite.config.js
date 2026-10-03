import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The browser calls /api, while Vite forwards those requests to FastAPI.
// Keeping this same-origin avoids CORS failures for the embedded terrain viewer.
const apiTarget = process.env.VITE_API_PROXY_TARGET || 'http://127.0.0.1:8000';
const apiProxy = {
  '/api': {
    target: apiTarget,
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api/, '')
  }
};

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: false,
    proxy: apiProxy
  },
  preview: {
    proxy: apiProxy
  }
});
