#!/usr/bin/env node

/**
 * This.GUI CLI (ESM version)
 *
 * Usage:
 *   npx this.gui my-app
 *   npx this.gui child netget        ← child library package (lib mode + Storybook)
 *   npx this.gui --main-server-ui
 *   npx this.gui --html
 */

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
  npx this.gui child <app-name>
  npx this.gui main-server-ui
  npx this.gui <project-name> --main-server-ui
  npx this.gui <dir> --html
  npx this.gui --html

Commands:
  child <name>   Scaffold a child library package (<name>-gui) with atoms/molecules/compounds
                 and its own Storybook, ready to extend this.gui.

Flags:
  --html             Generate a plain HTML runtime with a basic GUI.mount() (no Vite, no Storybook)
  --main-server-ui   Generate the NetGet Main Server UI starter, wired to all.this

What you get (default):
  - Vite + React app pre-wired with this.gui
  - Storybook included by default

What you get (child):
  - Vite lib-mode package extending this.gui
  - atoms / molecules / compounds structure with stub examples
  - Own Storybook with this.gui Theme decorator
  - Ready to publish as <name>-gui

Docs:
  https://neurons-me.github.io/GUI/

Examples:
  npx this.gui my-app
  npx this.gui child netget        → creates netget-gui/
  npx this.gui child monad         → creates monad-gui/
`);
  process.exit(0);
}

// ─── Detect subcommand: "child" ───────────────────────────────────────────────
const isChild = args[0] === "child";
const effectiveArgs = isChild ? args.slice(1) : args;

// ─── Determine app name ────────────────────────────────────────────────────────
const templateFlagIndex = effectiveArgs.indexOf("--template");
const appName =
  effectiveArgs.find((arg, index) => {
    if (arg.startsWith("-")) return false;
    if (templateFlagIndex >= 0 && index === templateFlagIndex + 1) return false;
    return true;
  }) || (isChild ? "my-app-gui" : "my-app");

const wantsHtml = effectiveArgs.includes("--html");
const templateName = templateFlagIndex >= 0 ? effectiveArgs[templateFlagIndex + 1] : "";
const wantsMainServerUi =
  effectiveArgs.includes("--main-server-ui") ||
  templateName === "main-server-ui" ||
  appName === "main-server-ui";

// ─── HTML mode ────────────────────────────────────────────────────────────────
const firstArg = effectiveArgs[0];
const htmlDirName = firstArg && !firstArg.startsWith("-") ? firstArg : ".";
const htmlTargetDir = path.resolve(process.cwd(), htmlDirName);
const htmlOutPath = path.join(htmlTargetDir, "index.html");
const htmlTemplate = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>this.GUI — Minimal Mount</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://cdn.jsdelivr.net/npm/react@18/umd/react.production.min.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.production.min.js" crossorigin="anonymous"></script>
    <script>
      window.process = window.process || { env: { NODE_ENV: 'production' } };
    </script>
    <script src="https://cdn.jsdelivr.net/npm/this.gui@latest/dist/this.gui.umd.js" crossorigin="anonymous"></script>
    <script>
      (function () {
        const GUI = window.GUI;
        if (!GUI) {
          document.body.innerHTML = '<pre style="padding:16px">Missing window.GUI (this.gui.umd.js not loaded)</pre>';
          return;
        }
        if (typeof GUI.mount !== 'function') {
          document.body.innerHTML = '<pre style="padding:16px">window.GUI.mount is not available in this build</pre>';
          return;
        }
        const spec = { type: 'Home', props: {} };
        const ctx = {};
        GUI.mount(spec, '#root', { ctx });
        console.log('[this.GUI] mounted via GUI.mount');
      })();
    </script>
  </body>
</html>
`;

// ─── Template selection ────────────────────────────────────────────────────────
const templateFolder = wantsMainServerUi
  ? "init-main-server-ui"
  : isChild
  ? "init-child"
  : "init";

const distTemplateDir = path.resolve(__dirname, `../../${templateFolder}`);
const srcTemplateDir  = path.resolve(__dirname, `../${templateFolder}`);
const templateDir = fsExtra.existsSync(distTemplateDir) ? distTemplateDir : srcTemplateDir;

// For child mode, the output directory is <appName>-gui
const targetDirName = isChild ? `${appName}-gui` : appName;
const targetDir = path.resolve(process.cwd(), targetDirName);

// ─── Banner ────────────────────────────────────────────────────────────────────
console.log(`
      ▗▄▄▖▗▖ ▗▖▗▄▄▄▖
     ▐▌   ▐▌ ▐▌  █
     ▐▌▝▜▌▐▌ ▐▌  █
this.▝▚▄▞▘▝▚▄▞▘▗▄█▄▖
${isChild
  ? `🧩 Scaffolding child lib: ${targetDirName}`
  : wantsHtml
  ? `🧩 Creating HTML runtime (${htmlDirName})`
  : wantsMainServerUi
  ? `🧩 Creating: ${appName} (main-server-ui)`
  : `🧩 Creating: ${appName}`}`);

// ─── Token replacement helper (for child template) ────────────────────────────
/**
 * Replace app-name tokens in all text files
 * under targetDir after copying the template.
 */
function applyTokens(dir: string, kebab: string): void {
  const pascal = kebab
    .split(/[-_]/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
  const title = kebab
    .split(/[-_]/)
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");

  const TEXT_EXTS = new Set([
    ".ts", ".tsx", ".js", ".jsx", ".json", ".md",
    ".html", ".css", ".gitignore", ".storybook",
  ]);

  function walk(current: string) {
    const entries = fsExtra.readdirSync(current);
    for (const entry of entries) {
      const full = path.join(current, entry);
      const stat = fsExtra.statSync(full);
      if (stat.isDirectory()) {
        walk(full);
      } else {
        const ext = path.extname(full);
        if (TEXT_EXTS.has(ext) || entry.startsWith(".")) {
          try {
            const content = fsExtra.readFileSync(full, "utf8");
            if (
              content.includes("__APP_NAME__") ||
              content.includes("__APP_NAME_PASCAL__") ||
              content.includes("__APP_NAME_TITLE__")
            ) {
              const replaced = content
                .replace(/__APP_NAME_TITLE__/g, title)
                .replace(/__APP_NAME_PASCAL__/g, pascal)
                .replace(/__APP_NAME__/g, kebab);
              fsExtra.writeFileSync(full, replaced, "utf8");
            }
          } catch {
            // skip binary files silently
          }
        }
      }
    }
  }

  walk(dir);
}

// ─── Execute ────────────────────────────────────────────────────────────────────
try {
  if (wantsHtml) {
    fsExtra.ensureDirSync(htmlTargetDir);
    fsExtra.writeFileSync(htmlOutPath, htmlTemplate, "utf8");
    console.log(`\n🧩 this.GUI HTML runtime created:`);
    console.log(`📄 ${htmlOutPath}\n`);
    console.log(`Next steps:\n  - Open index.html in a browser (or serve the folder)\n  - Edit the spec in the script tag to build your GUI tree\n`);
    process.exit(0);
  }

  if (!fsExtra.existsSync(templateDir)) {
    throw new Error(`Template directory not found: ${templateDir}`);
  }

  fsExtra.copySync(templateDir, targetDir);

  applyTokens(targetDir, appName);

  console.log(`📁 Project @ ${targetDir}`);

  if (isChild) {
    console.log(`\n✅ Child library scaffolded!\n`);
    console.log(`Next steps:
  cd ${targetDirName}
  npm install
  npm run storybook       ← develop components
  npm run build           ← build the lib

Structure:
  src/atoms/       ← domain primitives (wrap/extend this.gui atoms)
  src/molecules/   ← compositions with domain layout
  src/compounds/   ← feature panels (may fetch data)

Import in your app:
  import { ExampleAtom } from '${appName}-gui/atoms'
  import { ExampleMolecule } from '${appName}-gui/molecules'
`);
  } else {
    console.log(`\n✅ Success!\n`);
    console.log(
      `Next steps:\n  cd ${targetDirName}\n  npm install\n  npm run dev\n\nStorybook:\n  npm run storybook\n\nDocs:\n  https://neurons-me.github.io/GUI/\n`
    );
  }
} catch (error) {
  console.error("❌ Error creating project:", error);
  process.exit(1);
}
