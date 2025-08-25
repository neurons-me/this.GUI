import { createTheme } from '@mui/material/styles';
import { baseTheme } from './baseTheme';

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    icon: {
      main: '#a8a8a8', // Refined: softer and better contrast for dark mode
    },
    background: {
      default: 'rgb(18, 18, 20)',  // Refined: optimal luminance for dark mode (~11%)
      paper: 'rgb(24, 26, 28)',    // Refined: step above default, smoother hierarchy
      nav: 'rgb(22, 24, 26)',      // Refined: balanced between default and paper
    },
    link: {
      main: 'rgb(0, 170, 150)',    // Refined: slightly brighter and less saturated
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.75)',
      tertiary: 'rgba(255, 255, 255, 0.55)',
    },
  },
  custom: {
    border: 'rgb(45, 45, 55)',     // Refined: subtle neutral border
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'rgb(0, 170, 150)',
          '&:visited': {
            color: 'rgb(0, 130, 120)',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          a: {
            color: 'rgb(0, 170, 150)',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
            '&:visited': {
              color: 'rgb(0, 130, 120)',
            },
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: 'rgb(0, 170, 150)',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
          '&:visited': {
            color: 'rgb(0, 130, 120)',
          },
        },
      },
    },
  },
});