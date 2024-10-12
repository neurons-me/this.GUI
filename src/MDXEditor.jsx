//this.GUI/src/MDXEditor.jsx
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MdxProvider from './MdxProvider';  // Correct

const MDXEditor = () => {
  const navigate = useNavigate();
  const { pageName } = useParams();
  const [mdxContent, setMdxContent] = useState(''); // Initial blank content

  const handleInputChange = (e) => {
    setMdxContent(e.target.value);
  };

  const handleSavePage = () => {
    console.log('Saving MDX content:', mdxContent);
    // Replace this with actual save functionality (e.g., send to a backend API)

    // Optionally navigate back to the main dashboard or SiteBuilder
    navigate(`/`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* MDX Editor */}
      <textarea
        value={mdxContent}
        onChange={handleInputChange}
        rows="15"
        cols="80"
        placeholder="Write your MDX content here..."
        style={{ padding: '10px', fontSize: '16px' }}
      />

      {/* Live Preview */}
      <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px' }}>
        <h2>Live Preview</h2>
        <MdxProvider>
          <div>{mdxContent ? mdxContent : 'Your MDX preview will appear here.'}</div>
        </MdxProvider>
      </div>

      {/* Save Button */}
      <button onClick={handleSavePage} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Save MDX Page
      </button>
    </div>
  );
};

export default MDXEditor;