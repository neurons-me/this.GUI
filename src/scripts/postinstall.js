// this.GUI/scripts/postinstall.js
import { mkdir, writeFile, access } from 'fs/promises';
import { join } from 'path';

const appRootDir = process.env.INIT_CWD || process.cwd();

// Define paths for directories at the app level
const guiDir = join(appRootDir, 'GUI');
const componentsDir = join(guiDir, 'components');
const pagesDir = join(guiDir, 'pages'); // Pages directory for JSON layouts
const builderDir = join(guiDir, 'builder'); // Builder directory for site builder UI
const mdxDir = join(guiDir, 'mdx');
const stylesDir = join(guiDir, 'styles');

// Helper function to create directories only if they don't already exist
async function createDir(dirPath) {
  try {
    await access(dirPath);
    console.log(`Directory already exists: ${dirPath}`);
  } catch {
    await mkdir(dirPath, { recursive: true });
    console.log(`Created: ${dirPath}`);
  }
}

// Helper function to create initial files only if they don't already exist
async function createFile(filePath, content) {
  try {
    await access(filePath);
    console.log(`File already exists: ${filePath}`);
  } catch {
    await writeFile(filePath, content);
    console.log(`Created: ${filePath}`);
  }
}

// Function to initialize the directory structure and files
async function initializeFiles() {
  const mdxWelcomeFile = join(mdxDir, 'Welcome.mdx');
  const stylesFile = join(stylesDir, 'global.css');
  const samplePageFile = join(pagesDir, 'home.json'); // Sample JSON page
  const builderIndexFile = join(builderDir, 'index.html'); // Entry point for builder UI

  await createFile(
    mdxWelcomeFile,
    `# Welcome to Your Custom GUI\n\nThis is your first MDX file. Edit it to start building your pages!`
  );

  await createFile(
    stylesFile,
    `/* Add your custom styles here */\nbody { font-family: 'Roboto', sans-serif; }`
  );

  await createFile(
    samplePageFile,
    `{
      "layout": [
        {
          "type": "Card",
          "props": { "variant": "solid", "color": "primary-color", "width": "300px" },
          "children": [
            {
              "type": "Paragraph",
              "props": { "text": "Welcome to our site!" }
            }
          ]
        }
      ]
    }`
  );

  await createFile(
    builderIndexFile,
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>GUI Builder</title>
    </head>
    <body>
      <div id="builder-root"></div>
      <script src="/path-to-your-builder-script.js"></script> <!-- Placeholder for the actual builder script -->
    </body>
    </html>`
  );
}

// Create the directory structure and initialize files at the app level
(async () => {
  await createDir(guiDir);
  await createDir(componentsDir);
  await createDir(mdxDir);
  await createDir(stylesDir);
  await createDir(pagesDir); // New directory for JSON-based pages
  await createDir(builderDir); // Directory for builder UI
  await initializeFiles();

  console.log('this.GUI setup complete at the app level!');
})();