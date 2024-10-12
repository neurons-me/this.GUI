// api.js (Merged API logic with Express)
const express = require('express');
const fs = require('fs');
const path = require('path');

// Express app setup
const app = express();
app.use(express.json());

const pagesDir = path.join(__dirname, './GUI/pages'); // Path to store pages

// Create page function
function createPage(pageName, pageType, content) {
  const filePath = path.join(pagesDir, `${pageName}.${pageType}`);
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        reject(`Failed to create page: ${err}`);
      } else {
        resolve(`Page created: ${filePath}`);
      }
    });
  });
}

// Read page function
function readPage(pageName, pageType) {
  const filePath = path.join(pagesDir, `${pageName}.${pageType}`);
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(`Failed to read page: ${err}`);
      } else {
        resolve(data);
      }
    });
  });
}

// API route to create a new page
app.post('/api/create-page', (req, res) => {
  const { pageName, pageType, content } = req.body;
  createPage(pageName, pageType, content)
    .then((message) => res.status(200).json({ message }))
    .catch((error) => res.status(500).json({ error }));
});

// API route to read a page
app.get('/api/read-page/:pageName/:pageType', (req, res) => {
  const { pageName, pageType } = req.params;
  readPage(pageName, pageType)
    .then((data) => res.status(200).json({ data }))
    .catch((error) => res.status(500).json({ error }));
});

// Start the server
app.listen(3001, () => {
  console.log('API running on port 3001');
});