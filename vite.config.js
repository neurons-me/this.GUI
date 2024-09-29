// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

export default defineConfig({
  plugins: [
    react(),
    mdx({
      exclude: 'src/stories/**', // Keep this exclusion if Storybook handles these files
    }),
  ],
  server: {
    port: 7774,  // Default to 7774, or change this value to your desired port
    open: true,  // Automatically open the browser on server start
  },
  build: {
    lib: {
      entry: 'index.js',  // Ensure this points to the correct entry file for your library
      name: 'GUI',        // Name for the global variable in UMD builds
      sourcemap: false,
      fileName: (format) => `this-gui.${format}.js`,  // Output filenames
    },
    rollupOptions: {
      external: ['react', 'react-dom'],  // Externalize dependencies
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});