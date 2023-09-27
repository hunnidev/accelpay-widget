import { defineConfig } from "vite";

import preact from "@preact/preset-vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import babel from "@rollup/plugin-babel";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    cssInjectedByJsPlugin(),
  ],

  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'notice.widget.js',
        manualChunks: undefined,
      }
    }
  },
});
