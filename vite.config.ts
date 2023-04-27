import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsConfigPaths(), solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
  test: {
    globals: true,
    environment: "jsdom",
    transformMode: {
      web: [/\.jsx?$/],
    },
    setupFiles: "./vitest/setupVitest.js",
  },
});
