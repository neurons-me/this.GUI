import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePage = () => {
  const navigate = useNavigate();
  const [pageName, setPageName] = useState('');
  const [pageType, setPageType] = useState('json'); // Default to JSON
  const [errorMessage, setErrorMessage] = useState('');

  const handleCreatePage = () => {
    const newPage = {
      pageName,
      pageType,
      content: '', // Optional: You can pass default content here if needed
    };

    // Call API to create the page on the backend
    fetch('/api/create-page', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPage),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setErrorMessage(data.error);
        } else {
          // Navigate to the corresponding builder
          if (pageType === 'json') {
            navigate(`/site-builder/json/${pageName}`);
          } else {
            navigate(`/site-builder/mdx/${pageName}`);
          }
        }
      })
      .catch((error) => setErrorMessage(`Error: ${error.message}`));
  };

  return (
    <div>
      <h1>Create a New Page</h1>
      <input
        type="text"
        placeholder="Enter page name"
        value={pageName}
        onChange={(e) => setPageName(e.target.value)}
      />
      <select value={pageType} onChange={(e) => setPageType(e.target.value)}>
        <option value="json">JSON Format</option>
        <option value="mdx">MDX Format</option>
      </select>
      <button onClick={handleCreatePage}>Create Page</button>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default CreatePage;