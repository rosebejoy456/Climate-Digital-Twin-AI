import { defineConfig } from "vite";

const climateApiTarget = "http://127.0.0.1:8000";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: climateApiTarget,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});