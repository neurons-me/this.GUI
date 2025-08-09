import { Box, Typography } from '@mui/material';
import * as Icons from 'react-feather';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LilBox = ({
  icon,
  featherIcon,
  label,
  href,
  aspectRatio = '5 / 4',
}) => {
  const FeatherIcon = featherIcon && Icons[featherIcon] ? Icons[featherIcon] : null;

  return (
    <Box
      component={href ? Link : 'div'}
      to={href}
      sx={{
        width: '100%',
        aspectRatio,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, 0.05)'
            : 'rgba(0, 0, 0, 0.03)',
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, 0.1)'
            : 'rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: (theme) => theme.palette.text.primary,
        fontSize: '1rem',
        fontWeight: 300,
        transition: 'transform 0.2s ease',
        textDecoration: 'none',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <Box sx={{ fontSize: '1.5rem', mb: 0.5 }}>
        {icon ? icon : FeatherIcon ? <FeatherIcon size={24} /> : null}
      </Box>
      <Typography variant="body2" align="center">
        {label}
      </Typography>
    </Box>
  );
};

LilBox.propTypes = {
  icon: PropTypes.node,
  featherIcon: PropTypes.string,
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  aspectRatio: PropTypes.string,
};

export default LilBox;