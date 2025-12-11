import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from "path"
import { config } from 'dotenv';

config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

 define: {
    "process.env.ADSREACHER_SECRET": JSON.stringify(process.env.ADSREACHER_SECRET),
    "process.env.ADSREACHER_APP_ID": JSON.stringify(process.env.ADSREACHER_APP_ID),
  },
});