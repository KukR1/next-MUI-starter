import Container from '@mui/material/Container';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default function Footer() {
  return (
    <Paper
      sx={{
        marginTop: 'calc(10% + 60px)',
        width: '100%',
        position: 'fixed',
        bottom: 0,
      }}
      component="footer"
      square
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: 'center',
            display: 'flex',
            mb: 1,
            mt: 1,
          }}
        >
          <Typography variant="caption" color="white">
            &copy; {new Date().getFullYear()} Diti Paintings - All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
