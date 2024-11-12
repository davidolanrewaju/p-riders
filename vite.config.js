import { defineConfig } from 'vite';
import inject from '@rollup/plugin-inject';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    inject({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
  // define: {
  //   __APP_ENV__: JSON.stringify(process.env.VITE_URL_API),
  // },
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      external: ['jquery', 'bootstrap', 'owl.carousel'],
    },
  },
});