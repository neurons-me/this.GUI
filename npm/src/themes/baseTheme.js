// Shared base theme for this.GUI
// Import and spread this into lightTheme/darkTheme to avoid duplication.
export const pxToRem = (size) => `${size / 16}rem`;
export const baseTheme = {
  typography: {
    fontFamily: 'Roboto, sans-serif',
    pxToRem,
    // Compact, consistent heading scale across the app
    h1: {
      fontSize: pxToRem(55), // 2rem – smaller than MUI default hero size
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontSize: pxToRem(42),
      fontWeight: 600,
      lineHeight: 1.25,
    },
    h3: {
      fontSize: pxToRem(34),
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: pxToRem(21),
      fontWeight: 600,
      lineHeight: 1.35,
    },
    h5: {
      fontSize: pxToRem(18),
      fontWeight: 600,
      lineHeight: 1.35,
    },
    subtitle1: {
      fontSize: pxToRem(16),
      fontWeight: 600,
      lineHeight: 1.4,
    },

    body1: {
      fontSize: pxToRem(16),
      lineHeight: 1.6,
    },
    body2: {
      fontSize: pxToRem(14),
      lineHeight: 1.6,
    },

    button: {
      textTransform: 'none',
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: 'Roboto, sans-serif',
        },
      },
    },
  },
};
