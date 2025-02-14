import { defineConfig } from 'vite'
// import { resolve } from "path";
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // input: {
      //   main: resolve(__dirname, "index.html"),
      //   widget: "./src/widget.tsx",
      // },
      output: {
        manualChunks: undefined,
        inlineDynamicImports: true,
        entryFileNames: '[name].js',   // currently does not work for the legacy bundle
        assetFileNames: '[name].[ext]', // currently does not work for images
      },
    },
  },
  server: {
    host: '127.0.0.1',
    port: 4173,
  }
});
