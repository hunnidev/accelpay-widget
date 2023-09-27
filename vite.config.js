import { defineConfig } from "vite";

import preact from "@preact/preset-vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    cssInjectedByJsPlugin(),
  ],

  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'accelpay.notice.widget.js',
        manualChunks: undefined,
      }
    }
  },
});
