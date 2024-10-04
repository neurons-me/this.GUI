import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Layout from '../stories/Layouts/meta_Layouts.js';  // Import the Layout constant

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper function to check if a file exists relative to the script's directory
const fileExists = (relativeFilePath) => {
  const fullPath = path.resolve(__dirname, relativeFilePath);
  return fs.existsSync(fullPath);
};

// Default CSS template for Layouts
const createDefaultCSSTemplate = (componentName) => `
.${componentName.toLowerCase()} {
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  gap: 8px;
  border: 1px solid #ddd;
}

.${componentName.toLowerCase()}--primary {
  background-color: #e3f2fd;
}

.${componentName.toLowerCase()}--secondary {
  background-color: #fff;
}
`;

// Default JSX template for Layouts
const createDefaultJSX = (componentName) => `
import React from 'react';
import PropTypes from 'prop-types';
import './${componentName}.css';

/**
 * ${componentName} layout component
 */
export const ${componentName} = ({ children, primary, ...props }) => {
  const mode = primary ? '${componentName.toLowerCase()}--primary' : '${componentName.toLowerCase()}--secondary';
  return (
    <div className={['${componentName.toLowerCase()}', mode].join(' ')} {...props}>
      {children}
    </div>
  );
};

${componentName}.propTypes = {
  /**
   * Primary style for the layout
   */
  primary: PropTypes.bool,
  /**
   * Children components to be rendered inside the layout
   */
  children: PropTypes.node.isRequired,
};

${componentName}.defaultProps = {
  primary: false,
};
`;

// Default Storybook template for Layouts
const createDefaultStorybookTemplate = (componentName) => `
import { ${componentName} } from './${componentName}';

// Storybook configuration for ${componentName} component
export default {
  title: 'Layouts/${componentName}',
  component: ${componentName},
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Primary = {
  args: {
    primary: true,
    children: 'This is a primary ${componentName} layout.',
  },
};

export const Secondary = {
  args: {
    primary: false,
    children: 'This is a secondary ${componentName} layout.',
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
async function verifyPaths(component, paths) {
  const missingFiles = [];  // Initialize missingFiles array

  for (const [key, filePath] of Object.entries(paths)) {
    const adjustedPath = path.join('..', 'stories', 'Layouts', filePath);

    if (!fileExists(adjustedPath)) {
      console.log(`❌ Missing: ${adjustedPath}`);
      missingFiles.push(adjustedPath);

      // Automatically create the missing file with default content
      if (key === 'css') {
        writeFile(adjustedPath, createDefaultCSSTemplate(component.name.trim()));
      } else if (key === 'jsx') {
        writeFile(adjustedPath, createDefaultJSX(component.name.trim()));
      } else if (key === 'stories') {
        writeFile(adjustedPath, createDefaultStorybookTemplate(component.name.trim()));
      }
    } else {
      console.log(`✅ Exists: ${adjustedPath}`);
    }
  }

  return missingFiles;  // Return missingFiles array
}

// Main function to handle installation and verification
async function installAndVerifyLayouts(Layout) {
  const missingFilesReport = [];

  // Loop through each category (Grid, Navigation, etc.)
  for (const category of Object.keys(Layout.Layout)) {
    console.log(`\nVerifying category: ${category}`);

    // Loop through each component in the category
    for (const component of Layout.Layout[category]) {
      console.log(`\nVerifying component: ${component.name}`);

      // Verify each path for the component and get missing files
      const missingFiles = await verifyPaths(component, component.paths);

      // If files are missing, report them
      if (missingFiles.length > 0) {
        missingFilesReport.push({
          component: component.name,
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
installAndVerifyLayouts(Layout);