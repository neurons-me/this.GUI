#!/usr/bin/env node

/**
 * This.GUI CLI (ESM version)
 *
 * Usage:
 *   npx this.gui my-app
 *
 * Notes:
 *   - The generated app includes Storybook by default.
 */

import { execSync } from "node:child_process";
import fsExtra from "fs-extra";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const args = process.argv.slice(2);
if (args.includes("--help") || args.includes("-h")) {
  console.log(`This.GUI CLI

Usage:
  npx this.gui <project-name>

What you get:
  - Vite + React app pre-wired with this.gui
  - Storybook included by default

Docs:
  https://neurons-me.github.io/GUI/

Examples:
  npx this.gui my-app

Next:
  cd <project-name>
  npm run dev
  npm run storybook
`);
  process.exit(0);
}
const appName = args[0] || "my-app";
const distTemplateDir = path.resolve(__dirname, "../../init");
const srcTemplateDir = path.resolve(__dirname, "../init");
const templateDir = fsExtra.existsSync(distTemplateDir)
  ? distTemplateDir
  : srcTemplateDir;
const targetDir = path.resolve(process.cwd(), appName);
console.log(`
      ▗▄▄▖▗▖ ▗▖▗▄▄▄▖
     ▐▌   ▐▌ ▐▌  █  
     ▐▌▝▜▌▐▌ ▐▌  █  
this.▝▚▄▞▘▝▚▄▞▘▗▄█▄▖

🧩 Creating: ${appName}`);
try {
  if (!fsExtra.existsSync(templateDir)) {
    throw new Error(`init directory not found at: ${templateDir}`);
  }
  fsExtra.copySync(templateDir, targetDir);
  console.log(`📁 Project @ ${targetDir}`);
  process.chdir(targetDir);
  console.log(`✅ Success!\n`);
  console.log(
    `Next steps:\n  cd ${appName}\n  npm install\n  npm run dev\n\nStorybook:\n  npm run storybook\n  # or: npm run build-storybook\n\nDocs:\n  https://neurons-me.github.io/GUI/\n`
  );
} catch (error) {
  console.error("❌ Error creating project:", error);
  process.exit(1);
}
