// src/components/CodeBlock.jsx

import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
// Import the language(s) you need
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
// Import a syntax highlighting style
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('javascript', javascript);

const CodeBlock = ({ className, children }) => {
  const language = className ? className.replace('language-', '') : 'javascript';

  return (
    <SyntaxHighlighter language={language} style={atomOneLight}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;