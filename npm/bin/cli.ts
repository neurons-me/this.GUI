#!/usr/bin/env node
/**
 * This.GUI CLI (TypeScript)
 * 
 * Initializes a new This.GUI project using:
 * 
 *   npx thisgui my-app
 * 
 * Compiles to dist/bin/cli.js when the package is built.
 */

import { execSync } from 'child_process';
import fsExtra from 'fs-extra';
const { copySync } = fsExtra;
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const appName = process.argv[2] || 'my-app';
const templateDir = path.resolve(__dirname, '../templates');
const targetDir = path.resolve(process.cwd(), appName);
console.log(`\n🧩 Creating This.GUI project: ${appName}\n`);
try {
  copySync(templateDir, targetDir);
  console.log(`📁 Project files copied to ${targetDir}`);
  process.chdir(targetDir);
  console.log(`📦 Installing dependencies...\n`);
  execSync('npm install', { stdio: 'inherit' });
  console.log(`\n✅ Done!\n`);
  console.log(`Next steps:\n  cd ${appName}\n  npm run storybook\n`);
} catch (error) {
  console.error('❌ Error creating project:', error);
  process.exit(1);
}