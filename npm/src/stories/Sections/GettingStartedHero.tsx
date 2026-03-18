import React, { useEffect } from 'react';
import Icon from '@/gui/Theme/Icon/Icon';
import { Box, Button, Link, Stack, Typography } from '@/gui/atoms';

export function EnsureMaterialSymbols() {
  useEffect(() => {
    const existing = document.querySelector('link[data-gui-material-symbols="1"]');
    if (existing) return;

    const link = document.createElement('link');
    link.setAttribute('data-gui-material-symbols', '1');
    link.rel = 'stylesheet';
    link.href = `${import.meta.env.BASE_URL}material-symbols.css`;
    document.head.appendChild(link);
  }, []);

  return null;
}

export default function GettingStartedHero() {
  return (
    <>
      <EnsureMaterialSymbols />
      <Box sx={{ color: 'text.primary' }}>
        <img
          src="GUI.png"
          alt="This.GUI"
          style={{ width: '320px', height: 'auto', imageRendering: 'auto', marginBottom: '14px' }}
        />
        <Typography variant="h2" sx={{ fontWeight: 700, letterSpacing: '-0.04em', mb: 1, color: 'text.primary' }}>
          .GUI
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 500, opacity: 1, mb: 2, color: 'text.primary' }}>
          Composable, Declarative and Imperative.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Icon name="widgets" />}
            component={Link}
            href="/GUI"
          >
            window.GUI
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            component={Link}
            href="/"
            startIcon={(
              <img
                src="https://res.cloudinary.com/dkwnxf6gm/image/upload/v1760629056/neurons-grey_hxjcom.png"
                alt="neurons.me"
                width={32}
                height={34}
                style={{ opacity: 0.9, filter: 'grayscale(1)' }}
              />
            )}
          >
            neurons.me
          </Button>
        </Stack>
      </Box>
    </>
  );
}
