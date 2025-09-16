/// <reference types="vitest/config" />
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import { resolve } from 'path';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
const isDemo = process.env.DEMO === 'true';
const isStorybook = process.env.STORYBOOK === 'true';
export default defineConfig({
  plugins: [
    ...(isStorybook ? [] : [mdx({ include: ['**/*.mdx', '**/*.md'] })]),
    react()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  build: isDemo ? undefined : {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'ThisGUI',
      fileName: format => `this-gui.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-dom/client', 'react/jsx-runtime', 'react-router-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-dom/client': 'ReactDOM',
          'react/jsx-runtime': 'ReactJSX',
          'react-router-dom': 'ReactRouterDOM'
        }
      }
    }
  },
  optimizeDeps: isStorybook ? {} : {
    include: ['@uiw/react-md-editor', '@uiw/react-markdown-preview']
  },
  root: isDemo ? resolve(__dirname, 'demo') : '.',
  publicDir: isDemo ? resolve(__dirname, 'demo/public') : 'public',
  server: isDemo ? {
    open: true
  } : false,
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: 'playwright',
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.js']
      }
    }]
  }
});