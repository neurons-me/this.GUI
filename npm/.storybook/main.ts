import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import type { StorybookConfig } from '@storybook/react-vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const require = createRequire(import.meta.url);

function findStorybookPackageDir() {
  try {
    return path.dirname(require.resolve('storybook/package.json'));
  } catch {
    const nodePathEntries = String(process.env.NODE_PATH || '')
      .split(path.delimiter)
      .filter(Boolean);

    for (const entry of nodePathEntries) {
      const packageJson = path.join(entry, 'storybook', 'package.json');
      if (fs.existsSync(packageJson)) return path.dirname(packageJson);
    }
  }

  return null;
}

function appendAlias(currentAlias: any, find: string, replacement: string) {
  if (Array.isArray(currentAlias)) {
    return [...currentAlias, { find, replacement }];
  }

  return {
    ...(currentAlias || {}),
    [find]: replacement,
  };
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "staticDirs": [
    "../public"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "@storybook/addon-themes",
    "@storybook/addon-links",
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  viteFinal: async (viteConfig) => {
    viteConfig.plugins = viteConfig.plugins || [];
    viteConfig.plugins.push(tsconfigPaths());
    const storybookPackageDir = findStorybookPackageDir();
    if (storybookPackageDir) {
      viteConfig.resolve = viteConfig.resolve || {};
      viteConfig.resolve.alias = appendAlias(
        viteConfig.resolve.alias,
        'storybook/internal/preview/runtime',
        path.join(storybookPackageDir, 'dist/preview/runtime.js'),
      );
    }
    return viteConfig;
  },
  docs: { defaultName: 'Docs' },
  
};
export default config;
