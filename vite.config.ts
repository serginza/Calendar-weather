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
      widgets: path.resolve(__dirName, 'src/widgets'),
      features: path.resolve(__dirName, 'src/features'),
      infrastructure: path.resolve(__dirName, 'src/infrastructure'),
      entities: path.resolve(__dirName, 'src/entities'),
      shared: path.resolve(__dirName, 'src/shared'),
    },
  },
  server: {
    port: 3000,
  },
});
