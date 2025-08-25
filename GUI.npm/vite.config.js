// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import { resolve } from 'path';

const isDemo = process.env.DEMO === 'true';

export default defineConfig({
  plugins: [
    mdx({
      include: ['**/*.mdx', '**/*.md'],
    }),
    react(),
  ],
  build: isDemo
    ? undefined
    : {
        lib: {
          entry: resolve(__dirname, 'src/index.js'),
          name: 'ThisGUI',
          fileName: (format) => `this-gui.${format}.js`,
        },
        rollupOptions: {
          external: [
            'react',
            'react-dom',
            'react-dom/client',
            'react/jsx-runtime',
            'react-router-dom',
            'react-helmet-async',
          ],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
              'react-dom/client': 'ReactDOM',
              'react/jsx-runtime': 'ReactJSX',
              'react-router-dom': 'ReactRouterDOM',
              'react-helmet-async': 'ReactHelmetAsync',
            },
          },
        },
      },
  optimizeDeps: {
    include: [
      '@uiw/react-md-editor',
      '@uiw/react-markdown-preview',
    ],
  },
  root: isDemo ? resolve(__dirname, 'demo') : '.',
  publicDir: isDemo ? resolve(__dirname, 'demo/public') : 'public',
  server: isDemo
    ? {
        open: true,
      }
    : false,
});