import React from 'react';
import { Box } from '@/gui/components/atoms';
import { useInsets } from '@/gui/hooks';
import type { ContentProps } from './Content.types';

const Content: React.FC<ContentProps> = ({ children }) => {
  const insets = useInsets();

  return (
    <Box
      id="content"
      component="main"
      sx={{
        position: 'absolute',
        top: `${insets?.top ?? 0}px`,
        left: `${insets?.left ?? 0}px`,
        right: `${insets?.right ?? 0}px`,
        bottom: `${insets?.bottom ?? 0}px`,
        overflowY: 'auto',
        overflowX: 'hidden',
        transition: 'all 0.3s ease',
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        height: `calc(100vh - ${(insets?.top ?? 0) + (insets?.bottom ?? 0)}px)`,
      }}
    >
      {children}
    </Box>
  );
};

export default Content;