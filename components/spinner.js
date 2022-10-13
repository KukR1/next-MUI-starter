import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export const Spinner = () => (
  <Box
    sx={{
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <CircularProgress size={100} color="primary" />
  </Box>
);
