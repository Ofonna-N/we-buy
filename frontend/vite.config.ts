import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// "https://we-buy.onrender.com"
// "http://localhost:4000"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: false,
      },
    },
  },
  // optimizeDeps: {
  //   include: ["@mui/icons-material"],
  // },
});
