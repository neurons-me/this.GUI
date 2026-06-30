#!/usr/bin/env node
// Storybook's static build hardcodes a few root-absolute paths that only work
// when the build is served from the domain root. We deploy under
// /GUI/storybook/, so those paths 404 (and for index.json, silently resolve
// to a *different* site's index.json), breaking every story preview.
// This rewrites them to relative paths after the build.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = join(import.meta.dirname, '..', '..', 'storybook');

const replacements = [
  [/fetch\("\/index\.json"\)/g, 'fetch("./index.json")'],
  [/href="\/material-symbols\.css"/g, 'href="./material-symbols.css"'],
  [/href="\/favicon\.ico"/g, 'href="./favicon.ico"'],
];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      walk(full);
    } else if (entry.endsWith('.html') || entry.endsWith('.js')) {
      const original = readFileSync(full, 'utf8');
      let patched = original;
      for (const [pattern, replacement] of replacements) {
        patched = patched.replace(pattern, replacement);
      }
      if (patched !== original) {
        writeFileSync(full, patched);
        console.log(`patched: ${full.replace(root, 'storybook')}`);
      }
    }
  }
}

walk(root);
