import React from 'react';

function MdxFileList({ files, onSelect }) {
  return (
    <div className="mdx-file-list">
      <h2>Archivos MDX</h2>
      <ul>
        {files.map((file) => (
          <li key={file}>
            <button onClick={() => onSelect(file)}>{file}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MdxFileList;