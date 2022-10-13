import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CallIcon from '@mui/icons-material/Call';
import logo from '../public/logo.svg';
import Image from 'next/image';

const Navbar = () => {
  return (
    <>
      <AppBar
        sx={{
          background: {
            xs: `linear-gradient(to right, white 50%, #008ebc)`,
            md: `linear-gradient(to right, white 50%, #008ebc)`,
          },
        }}
        position="static"
      >
        <Container sx={{ padding: { xs: '0', md: '0' } }} maxWidth="xl">
          <Toolbar
            sx={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: '0 1rem',
            }}
            disableGutters
          >
            <Box
              sx={{
                display: 'block',
                minWidth: '9rem',
              }}
            >
              <Image src={logo} alt="Logo" layout="responsive" />
            </Box>
            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.3rem' },
                display: { xs: 'none', md: 'flex' },
                flex: 'none',
                letterSpacing: '2px',
                justifyContent: 'center',
                textAlign: { xs: 'center' },
                lineHeight: '1.4rem',
                fontFamily: 'Bebas Neue',
                fontWeight: 700,
                color: (theme) => theme.palette.primary.main,
                textDecoration: 'none',
              }}
            >
              Professional Painting
              <br /> & Decorating
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                flexDirection: 'row',
                flex: 'none',
                alignItems: 'center',
              }}
            >
              <Button
                variant="contained"
                sx={{
                  fontWeight: 'bold',
                  backgroundColor: (theme) => theme.palette.primary.main,
                  color: '#ffff',
                  fontFamily: 'Bebas Neue',
                  fontSize: { xs: '0.8rem', md: '1.2rem' },
                  letterSpacing: '1px',
                  padding: { xs: '1px 10px', md: '1px 20px' },
                }}
              >
                Email us
              </Button>
              <Typography
                sx={{
                  display: { xs: 'none', md: 'none', lg: 'flex' },
                  fontFamily: 'Bebas Neue',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                }}
              >
                020 1237 5896
              </Typography>
              <CallIcon
                fontSize="large"
                color="inherit"
                sx={{
                  display: { xs: 'flex', md: 'flex', lg: 'none' },
                  cursor: 'pointer',
                }}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Navbar;
