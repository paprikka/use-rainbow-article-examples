/// <reference types="node" />

import { defineConfig } from "vite";
import { resolve } from "path";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],

  build: {
    rollupOptions: {
      input: {
        main: new URL("./index.html", import.meta.url).pathname,
        scroll: new URL("./example-scroll/index.html", import.meta.url)
          .pathname,
        // "example-scroll": resolve(__dirname, "example-scroll/index.html"),
      },
    },
  },
});
