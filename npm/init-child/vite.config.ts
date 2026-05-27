import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

// __APP_NAME__-gui — child library build
// Imports from this.gui are externalized (tree-shaken at the consuming app level)
export default defineConfig({
  plugins: [
    react(),
    dts({ insertTypesEntry: true, rollupTypes: true }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '__APP_NAME_PASCAL__GUI',
      formats: ['es', 'cjs'],
      fileName: (format) => `__APP_NAME__-gui.${format === 'es' ? 'es.js' : 'cjs'}`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'this.gui',
        'this.gui/atoms',
        'this.gui/molecules',
        'this.gui/compounds',
        '@mui/material',
        '@mui/system',
        '@emotion/react',
        '@emotion/styled',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        preserveModules: false,
      },
    },
  },
});
