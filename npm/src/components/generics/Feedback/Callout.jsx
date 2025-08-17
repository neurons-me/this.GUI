import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

const variantStyles = {
  warning: {
    light: {
      background: '#fff8e1',
      border: '#f4b400',
      color: '#f4b400',
    },
    dark: {
      background: '#2c1a00',
      border: '#f4b400',
      color: '#f4b400',
    },
  },
  info: {
    light: {
      background: '#e3f2fd',
      border: '#2196f3',
      color: '#0d47a1',
    },
    dark: {
      background: '#0d2b45',
      border: '#64b5f6',
      color: '#90caf9',
    },
  },
  success: {
    light: {
      background: '#e8f5e9',
      border: '#4caf50',
      color: '#2e7d32',
    },
    dark: {
      background: '#1b3c28',
      border: '#66bb6a',
      color: '#a5d6a7',
    },
  },
  alert: {
    light: {
      background: '#ffebee',
      border: '#f44336',
      color: '#b71c1c',
    },
    dark: {
      background: '#3d0000',
      border: '#ef5350',
      color: '#ef9a9a',
    },
  },
  neutral: {
    light: {
      background: '#f5f5f5',
      border: '#9e9e9e',
      color: '#424242',
    },
    dark: {
      background: '#2c2c2c',
      border: '#bdbdbd',
      color: '#e0e0e0',
    },
  },
};

export default function Callout({
  children = "This repository is in continuous development and may be unstable.",
  variant = "warning", // default variant
}) {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const styles = variantStyles[variant]?.[mode] || variantStyles.warning.light;

  return (
    <Box
      sx={{
        backgroundColor: styles.background,
        border: `1px solid ${styles.border}`,
        color: styles.color,
        padding: '10px 16px',
        borderRadius: '4px',
        fontWeight: 'bold',
        marginBottom: '1.5rem',
        textAlign: 'center',
        fontSize: '0.9rem',
      }}
    >
      {children}
    </Box>
  );
}