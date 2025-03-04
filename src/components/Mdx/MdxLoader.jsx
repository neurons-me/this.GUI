import React from 'react';
import MdxViewer from './MdxViewer';
import ExampleMdx from '../../../mdx/example.mdx';

function MdxLoader({ selectedFile }) {
  const mdxComponents = {
    'example.mdx': ExampleMdx,
    // Agregar más archivos aquí
  };

  const SelectedMdx = mdxComponents[selectedFile];

  return (
    <div className="mdx-loader">
      {SelectedMdx ? (
        <MdxViewer>
          <SelectedMdx />
        </MdxViewer>
      ) : (
        <p>Selecciona un archivo MDX para ver.</p>
      )}
    </div>
  );
}

export default MdxLoader;