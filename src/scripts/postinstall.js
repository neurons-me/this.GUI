// this.GUI/scripts/postinstall.js
import { mkdir, writeFile, access, readFile } from 'fs/promises';
import { join } from 'path';

const appRootDir = process.env.INIT_CWD || process.cwd();

// Define paths for directories at the app level
const guiDir = join(appRootDir, 'GUI');
const componentsDir = join(guiDir, 'components');
const pagesDir = join(guiDir, 'pages'); // Pages directory for JSON layouts
const configDir = join(guiDir, 'config');
const configFile = join(configDir, 'siteConfig.json');

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

// Helper function to update siteConfig.json
async function updateSiteConfig(newPages) {
  try {
    const configContent = await readFile(configFile, 'utf-8');
    const config = JSON.parse(configContent);

    // Add new pages if they don't already exist in the config
    newPages.forEach((newPage) => {
      const exists = config.pages.find((page) => page.name === newPage.name);
      if (!exists) {
        config.pages.push(newPage);
      }
    });

    await writeFile(configFile, JSON.stringify(config, null, 2));
    console.log(`Updated: ${configFile}`);
  } catch (err) {
    console.error(`Failed to update siteConfig: ${err}`);
  }
}

// Function to initialize the directory structure and files
async function initializeFiles() {
  const mdxWelcomeFile = join(pagesDir, 'Welcome.mdx');
  const samplePageFile = join(pagesDir, 'home.json'); // Sample JSON page

  // Create siteConfig.json
  await createFile(
    configFile,
    `{
      "pages": []
    }`
  );

  // Create Welcome.mdx as a sample MDX file
  await createFile(
    mdxWelcomeFile,
    `# Welcome to Your Custom GUI\n\nThis is your first MDX file. Edit it to start building your pages!`
  );

  // Create a sample JSON page layout
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

  // Update siteConfig.json with the sample pages
  await updateSiteConfig([
    { name: 'Welcome', path: '/welcome', type: 'mdx', file: './pages/Welcome.mdx' },
    { name: 'Home', path: '/home', type: 'json', file: './pages/home.json' },
  ]);
}

// Create the directory structure and initialize files at the app level
(async () => {
  await createDir(guiDir);
  await createDir(componentsDir);
  await createDir(pagesDir); // New directory for JSON and MDX pages
  await createDir(configDir); // Create config directory
  await initializeFiles();

  console.log('this.GUI setup complete at the app level!');
})();