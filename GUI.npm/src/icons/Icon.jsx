// src/icons/Icon.jsx
import React, { Suspense } from 'react';
import { lazyIcon } from './registry';

export default function Icon({ name, fallback = null, ...rest }) {
  const Lazy = lazyIcon(name);
  return (
    <Suspense fallback={fallback ?? <span style={{ width: 1, height: 1, display: 'inline-block' }} />}>
      <Lazy {...rest} />
    </Suspense>
  );
}