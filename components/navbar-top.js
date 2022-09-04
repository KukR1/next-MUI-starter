import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CallIcon from '@mui/icons-material/Call';
import logo from '../public/logo.png';
import Image from 'next/image';
import EmailIcon from '@mui/icons-material/Email';

const Navbar = () => {
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container sx={{padding: { xs: '0', md: '10px'}}} maxWidth="xl">
        <Toolbar sx={{ minHeight:{xs: '15vh'},flexDirection: { xs: 'none', md: 'row'}, gap: {xs:'0', md:'1rem'}}}  disableGutters>
        <Typography
            sx={{
              fontSize: '1rem',
              display: { xs: 'flex', md: 'none' },
              flex: { xs: 1},
              letterSpacing: '2px',
              justifyContent: 'center',
              textAlign: {xs: 'center'},
              lineHeight: '1.4rem',
              fontFamily: "Bebas Neue",
              fontWeight: 700,
              color: '#f26527',
              textDecoration: 'none',
            }}
          >
             Professional Painting<br/> & Decorating
          </Typography>
      <Image style={{textAlign: {xs: 'center'}}}src={logo} width={100} height={100} layout='intrinsic' />
      <Box sx={{display: 'flex', justifyContent: 'center', gap: '1rem', flex: { xs: 1}, textAlign: {xs: 'right'}}}>
      <EmailIcon sx={{display: { xs: 'flex', md: 'none' },}} fontSize="large" color='primary' />
      <CallIcon sx={{display: { xs: 'flex', md: 'none' },}} fontSize="large" color='success' />
      </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              fontSize: '1rem',
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: '#fbefcc',
              textDecoration: 'none',
            }}
          >
             Professional Painting<br/> & Decorating
          </Typography>
          <Box
            sx={{
              alignItems: 'center',
              justifyContent: 'flex-end',
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <CallIcon color="success" />
            <Typography sx={{ padding: '0 0.3rem' }}>
              Call us for decorating services on
              <a href="tel:+447487600432"> 074 8760 0432</a>
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
