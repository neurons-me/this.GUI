import { Box } from '@mui/material';

// Gridme is a generic grid layout component based on MUI's Box.
// It allows you to quickly define a grid layout with customizable number of columns and spacing.
// You can also control the maximum width of each grid item via the `itemMaxWidth` prop.
// This wrapper is part of this.GUI's declarative approach to layout construction.
const Gridme = ({
  children,
  columns = 3,
  columnGap = '0.5rem',
  rowGap = '1rem',
  marginTop = '0px',
  marginBottom = '0px',
  sx = {},
}) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        columnGap: columnGap,
        rowGap: rowGap,
        width: '100%',
        alignItems: 'stretch',
        justifyItems: 'stretch',
        mt: marginTop,
        mb: marginBottom,
        '& > *': {
          width: '100%',
          height: '100%',
        },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default Gridme;

// Example usage:
// 
// import Gridme from './Gridme';
// 
// const Example = () => (
//   <Gridme columns={3} gap="1rem">
//     <Box sx={{ backgroundColor: 'red', height: 100 }} />
//     <Box sx={{ backgroundColor: 'blue', height: 100 }} />
//     <Box sx={{ backgroundColor: 'green', height: 100 }} />
//   </Gridme>
// );