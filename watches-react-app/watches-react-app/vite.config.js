import svgr from "vite-plugin-svgr";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    outDir: "dist", // 👈 ensures Netlify knows where to find the build
  }
});
