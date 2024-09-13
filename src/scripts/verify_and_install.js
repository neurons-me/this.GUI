import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Atomic from '../stories/_Atomic/Atomic.js';  // Import the Atomic constant

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
  padding: 16px;
  border-radius: 8px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
}

.${componentName.toLowerCase()}--primary {
  background-color: #e3f2fd;
  border-color: #1e88e5;
}

.${componentName.toLowerCase()}--secondary {
  background-color: #fff;
  border-color: #ccc;
}

.${componentName.toLowerCase()}--small {
  padding: 8px;
}

.${componentName.toLowerCase()}--medium {
  padding: 16px;
}

.${componentName.toLowerCase()}--large {
  padding: 32px;
}
`;

// Default JSX template
const createDefaultJSX = (componentName) => `
import React from 'react';
import PropTypes from 'prop-types';
import './${componentName}.css';

/**
 * ${componentName} component for user interaction
 */
export const ${componentName} = ({ primary, size, children, ...props }) => {
  const mode = primary ? '${componentName.toLowerCase()}--primary' : '${componentName.toLowerCase()}--secondary';
  return (
    <div
      className={['${componentName.toLowerCase()}', \`${componentName.toLowerCase()}--\${size}\`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

${componentName}.propTypes = {
  /**
   * Is this the primary style for the component?
   */
  primary: PropTypes.bool,
  /**
   * Size of the component
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Content to be rendered inside the component
   */
  children: PropTypes.node.isRequired,
};

${componentName}.defaultProps = {
  primary: false,
  size: 'medium',
};

export default ${componentName};
`;
// Default Storybook template
const createDefaultStorybookTemplate = (componentName) => `
import { ${componentName} } from './${componentName}';

// Storybook configuration for ${componentName} component
export default {
  title: '_Atomic/${componentName}',
  component: ${componentName},
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Primary = {
  args: {
    primary: true,
    children: 'This is a primary ${componentName}',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary ${componentName}',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large ${componentName}',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small ${componentName}',
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
    const categoryDir = component.name.trim().replace(' ', '');
    const adjustedPath = path.join('..', 'stories', '_Atomic', categoryDir, filePath);

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
async function installAndVerifyAtomic(Atomic) {
  const missingFilesReport = [];

  // Loop through each category (Text, Interactive, etc.)
  for (const category of Object.keys(Atomic.Atomic)) {
    console.log(`\nVerifying category: ${category}`);

    // Loop through each component in the category
    for (const component of Atomic.Atomic[category]) {
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
installAndVerifyAtomic(Atomic);