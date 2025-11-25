import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/newsletter-sign-up-with-success-message/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        success: resolve(__dirname, "success.html"),
      },
    },
  },
});
