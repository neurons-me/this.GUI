// verifyMolecules.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Molecules from '../stories/Molecules/Molecules.js'; // Import the Molecules constant

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper function to check if a file exists relative to the script's directory
const fileExists = (relativeFilePath) => {
  const fullPath = path.resolve(__dirname, relativeFilePath);
  return fs.existsSync(fullPath);
};

// Default CSS template
const createDefaultCSSTemplate = (componentName) => `
.${componentName.toLowerCase()} {
  /* Default styles for ${componentName} */
}
`;

// Default JSX template
const createDefaultJSX = (componentName) => `
import React from 'react';
import PropTypes from 'prop-types';
import './${componentName}.css';

/**
 * ${componentName} component
 */
export const ${componentName} = (props) => {
  return (
    <div className="${componentName.toLowerCase()}" {...props}>
      {/* Component implementation */}
    </div>
  );
};

${componentName}.propTypes = {
  // Define prop types here
};

${componentName}.defaultProps = {
  // Define default props here
};

export default ${componentName};
`;

// Default Storybook template
const createDefaultStorybookTemplate = (componentName, category) => `
import { ${componentName} } from './${componentName}';

// Storybook configuration for ${componentName} component
export default {
  title: 'Molecules/${category}/${componentName}',
  component: ${componentName},
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // Define argTypes here
  },
};

export const Default = {
  args: {
    // Define default args here
  },
};
`;

// Helper function to write files
const writeFile = (filePath, content) => {
  const fullPath = path.resolve(__dirname, filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`✅ Created: ${filePath}`);
};

// Function to verify each path and create missing files with default content
async function verifyPaths(component, paths, category) {
  const missingFiles = []; // Initialize missingFiles array

  for (const [key, filePath] of Object.entries(paths)) {
    const componentName = component.name.trim();
    const adjustedPath = path.join(
      '..',
      'stories',
      'Molecules',
      componentName,
      filePath.replace('./', '')
    );

    if (!fileExists(adjustedPath)) {
      console.log(`❌ Missing: ${adjustedPath}`);
      missingFiles.push(adjustedPath);

      // Automatically create the missing file with default content
      if (key === 'css') {
        writeFile(adjustedPath, createDefaultCSSTemplate(componentName));
      } else if (key === 'jsx') {
        writeFile(adjustedPath, createDefaultJSX(componentName));
      } else if (key === 'stories') {
        writeFile(adjustedPath, createDefaultStorybookTemplate(componentName, category));
      }
    } else {
      console.log(`✅ Exists: ${adjustedPath}`);
    }
  }

  return missingFiles; // Return missingFiles array
}

// Main function to handle installation and verification
async function installAndVerifyMolecules(Molecules) {
  const missingFilesReport = [];

  // Loop through each category (Navigation, FormElements, etc.)
  for (const category of Object.keys(Molecules.Molecules)) {
    console.log(`\nVerifying category: ${category}`);

    // Loop through each component in the category
    for (const component of Molecules.Molecules[category]) {
      console.log(`\nVerifying component: ${component.name.trim()}`);

      // Verify each path for the component and get missing files
      const missingFiles = await verifyPaths(component, component.paths, category);

      // If files are missing, report them
      if (missingFiles.length > 0) {
        missingFilesReport.push({
          component: component.name.trim(),
          missingFiles,
        });
      }
    }
  }

  // If there are missing files, summarize the report
  if (missingFilesReport.length > 0) {
    console.log('\nInstallation or verification required for the following components:');
    missingFilesReport.forEach((report) => {
      console.log(`\nComponent: ${report.component}`);
      report.missingFiles.forEach((file) => {
        console.log(`  ❌ Missing file: ${file}`);
      });
    });
  } else {
    console.log('\nAll components verified successfully! ✅');
  }
}

// Run the verification script
installAndVerifyMolecules(Molecules);