import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Templates from '../stories/Templates/meta_Templates.js';  // Import the Templates constant

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper function to check if a file exists relative to the script's directory
const fileExists = (relativeFilePath) => {
  const fullPath = path.resolve(__dirname, relativeFilePath);
  return fs.existsSync(fullPath);
};

// Default CSS template for Templates
const createDefaultCSSTemplate = (componentName) => `
.${componentName.toLowerCase()} {
  padding: 16px;
  border-radius: 8px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
}
`;

// Default JSX template for Templates
const createDefaultJSX = (componentName) => `
import React from 'react';
import PropTypes from 'prop-types';
import './${componentName}.css';

/**
 * ${componentName} template component
 */
export const ${componentName} = ({ children, ...props }) => {
  return (
    <div className="${componentName.toLowerCase()}" {...props}>
      {children}
    </div>
  );
};

${componentName}.propTypes = {
  /**
   * Children components to be rendered inside the template
   */
  children: PropTypes.node.isRequired,
};

export default ${componentName};
`;

// Default Storybook template for Templates
const createDefaultStorybookTemplate = (componentName, category) => `
import { ${componentName} } from './${componentName}';

// Storybook configuration for ${componentName} template
export default {
  title: 'Templates/${category}/${componentName}',
  component: ${componentName},
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = {
  args: {
    children: 'This is a default ${componentName} template.',
  },
};
`;

// Helper function to write files and create directories if needed
const writeFile = (filePath, content) => {
  const fullPath = path.resolve(__dirname, filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`✅ Created: ${filePath}`);
};

// Function to verify each path and create missing files with default content
async function verifyPaths(component, paths, category) {
  const missingFiles = [];  // Initialize missingFiles array

  for (const [key, filePath] of Object.entries(paths)) {
    const componentName = component.name.trim();
    const basePath = path.join('..', 'stories', 'Templates', category, componentName);
    
    const adjustedPath = path.join(basePath, path.basename(filePath));

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

  return missingFiles;  // Return missingFiles array
}

// Main function to handle installation and verification of Templates
async function installAndVerifyTemplates(Templates) {
  const missingFilesReport = [];

  // Loop through each category (LandingPages, DashboardLayouts, etc.)
  for (const category of Object.keys(Templates.Templates)) {
    console.log(`\nVerifying category: ${category}`);

    // Loop through each component in the category
    for (const component of Templates.Templates[category]) {
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
    console.log("\nInstallation or verification required for the following components:");
    missingFilesReport.forEach((report) => {
      console.log(`\nComponent: ${report.component}`);
      report.missingFiles.forEach((file) => {
        console.log(`  ❌ Missing file: ${file}`);
      });
    });
  } else {
    console.log("\nAll components verified successfully! ✅");
  }
}

// Run the verification script
installAndVerifyTemplates(Templates);