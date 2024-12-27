import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["@swc/core", "@swc/wasm"],
  },
  build: {
    rollupOptions: {
      external: ["@swc/core-win32-x64-msvc"],
    },
  },
});
