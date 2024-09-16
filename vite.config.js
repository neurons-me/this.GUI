import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

// Ensure the defineConfig function is correctly used here
export default defineConfig({
  plugins: [react(), mdx()],
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