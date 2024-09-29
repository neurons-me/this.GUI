// this.GUI/scripts/postinstall.js
import { mkdir, writeFile, access } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';

// Get the current directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..', '..');

// Define paths for directories
const guiDir = join(__dirname, '..', 'GUI');
const componentsDir = join(guiDir, 'components');
const mdxDir = join(guiDir, 'mdx');
const stylesDir = join(guiDir, 'styles');

// Helper function to create directories
async function createDir(dirPath) {
  try {
    await access(dirPath);
    console.log(`Directory already exists: ${dirPath}`);
  } catch {
    await mkdir(dirPath, { recursive: true });
    console.log(`Created: ${dirPath}`);
  }
}

// Helper function to create initial files if they don't exist
async function initializeFiles() {
  const mdxWelcomeFile = join(mdxDir, 'Welcome.mdx');
  const stylesFile = join(stylesDir, 'global.css');

  try {
    await access(mdxWelcomeFile);
    console.log(`File already exists: ${mdxWelcomeFile}`);
  } catch {
    await writeFile(
      mdxWelcomeFile,
      `# Welcome to Your Custom GUI\n\nThis is your first MDX file. Edit it to start building your pages!`
    );
    console.log(`Created: ${mdxWelcomeFile}`);
  }

  try {
    await access(stylesFile);
    console.log(`File already exists: ${stylesFile}`);
  } catch {
    await writeFile(
      stylesFile,
      `/* Add your custom styles here */\nbody { font-family: 'Roboto', sans-serif; }`
    );
    console.log(`Created: ${stylesFile}`);
  }
}

// Create the directory structure and initialize files
(async () => {
  await createDir(guiDir);
  await createDir(componentsDir);
  await createDir(mdxDir);
  await createDir(stylesDir);
  await initializeFiles();

  console.log('this.GUI setup complete!');
})();
