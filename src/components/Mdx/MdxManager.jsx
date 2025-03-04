import React, { useState } from 'react';
import MdxFileList from './MdxFileList';
import MdxLoader from './MdxLoader';

function MdxManager() {
  const [selectedFile, setSelectedFile] = useState(null);

  const mdxFiles = ['example.mdx', 'tutorial.mdx'];

  return (
    <div className="mdx-section">
      <MdxFileList files={mdxFiles} onSelect={setSelectedFile} />
      {selectedFile && <MdxLoader selectedFile={selectedFile} />}
    </div>
  );
}

export default MdxManager;