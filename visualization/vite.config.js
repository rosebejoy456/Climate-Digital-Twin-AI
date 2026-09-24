import { defineConfig } from "vite";

const climateApiTarget =
    "https://hunting-decal-pulmonary.ngrok-free.dev";

export default defineConfig({
    server: {
        proxy: {
            "/api": {
                target: climateApiTarget,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, "")
            }
        }
    }
});
