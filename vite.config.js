import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Avoid native realpath failures on Windows cloud-synced workspaces.
  resolve: { preserveSymlinks: true },
  build: { manifest: true },
});
