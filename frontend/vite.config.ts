import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isProduction = process.env.NODE_ENV === "production";
const apiTarget = isProduction
  ? "https://we-buy.onrender.com"
  : "http://localhost:4000";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: apiTarget,
        changeOrigin: false,
      },
    },
  },
  // optimizeDeps: {
  //   include: ["@mui/icons-material"],
  // },
});
