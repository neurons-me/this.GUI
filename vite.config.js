import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import dotenv from 'dotenv';

// Load .env file
dotenv.config();

export default defineConfig({
  plugins: [
    react(),
    mdx({
      // Exclude the src/stories/ directory from MDX processing
      exclude: 'src/stories/**',
    }),
  ],
  server: {
    port: process.env.VITE_PORT || 7774,  // Use VITE_PORT from .env or default to 3000
  },
  build: {
    lib: {
      entry: 'index.js',  // Entry point now in the root directory
      name: 'GUI',        // Global variable name is now 'GUI'
      sourcemap: false,   // Disable sourcemaps
      fileName: (format) => `this-gui.${format}.js`,  // Output filenames
    },
    rollupOptions: {
      external: ['react', 'react-dom'],  // Externalize React and ReactDOM
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});