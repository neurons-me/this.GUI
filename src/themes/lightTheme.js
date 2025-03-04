import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0c343d' },
    secondary: { main: '#f50057' },
    icon: { main: '#6d6d6d' },
    background: {
      default: '#f4f6f8',
      paper: '#ffffff',
      nav: '#ffffff'
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    pxToRem: (size) => `${size / 16}rem`,
  },
});

export default lightTheme;