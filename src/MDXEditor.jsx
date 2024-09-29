// this.GUI/src/MDXEditor.jsx
import React, { useState } from 'react';
import { MdxProvider } from './providers/MdxProvider';
import { ThemeProvider } from './providers/ThemeProvider';
import Editor from '@monaco-editor/react'; // Or any other MDX editor you prefer

const MDXEditor = () => {
  const [content, setContent] = useState('# Your MDX here');

  return (
    <ThemeProvider>
      <MdxProvider>
        <div style={{ display: 'flex', height: '100vh' }}>
          <Editor
            height="100%"
            defaultLanguage="mdx"
            value={content}
            onChange={(value) => setContent(value || '')}
          />
          <div style={{ flex: 1, padding: '20px', overflow: 'auto' }}>
            <MdxProvider>
              {/* Live preview of the MDX content */}
              {React.createElement(MdxProvider, {}, content)}
            </MdxProvider>
          </div>
        </div>
      </MdxProvider>
    </ThemeProvider>
  );
};

export default MDXEditor;
