// lightTheme.js (Refined for archetypal harmony and visual pleasure)
import { createTheme } from '@mui/material/styles';
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0a3a42', // Slightly deeper teal for a grounded, professional feel
    },
    secondary: {
      main: '#e5396f', // Softer magenta for warmth without harshness
    },
    icon: {
      main: '#5e5e5e', // Balanced neutral gray for better readability on light bg
    },
    background: {
      default: '#f8f9fa',  // Very soft gray, reduces glare, ~96% luminance (harmonic step from white)
      paper: '#ffffff',    // Pure white for content focus
      nav: '#fdfdfd',      // Almost white, slightly warmer for subtle separation
    },
    link: {
      main: 'rgb(0, 140, 125)', // Slightly muted aqua, harmonious with primary, excellent contrast
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    pxToRem: (size) => `${size / 16}rem`,
  },
  custom: {
    border: 'rgba(0, 0, 0, 0.08)', // Softer border, aligns with archetypal minimalist elegance
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'rgb(0, 140, 125)',
          '&:visited': {
            color: 'rgb(0, 110, 100)',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          a: {
            color: 'rgb(0, 140, 125)',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
            '&:visited': {
              color: 'rgb(0, 110, 100)',
            },
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: 'rgb(0, 140, 125)',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
          '&:visited': {
            color: 'rgb(0, 110, 100)',
          },
        },
      },
    },
  },
});