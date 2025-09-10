import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filePath = fileURLToPath(import.meta.url);
const __dirName = dirname(__filePath);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: path.resolve(__dirName, 'src/app'),
      pages: path.resolve(__dirName, 'src/pages'),
      modules: path.resolve(__dirName, 'src/modules'),
      services: path.resolve(__dirName, 'src/services'),
      entities: path.resolve(__dirName, 'src/entities'),
      shared: path.resolve(__dirName, 'src/shared'),
    },
  },
  server: {
    port: 3000,
  },
});
