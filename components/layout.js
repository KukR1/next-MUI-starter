import Navbar from './navbar-top';
import Content from '../pages/content';
import { Box } from '@mui/material';
import Head from 'next/head';
import dynamic from 'next/dynamic';

export default function Layout({ children }) {
  return (
    <Box>
      <Navbar />
      <Box>
        <Content />
        {children}
      </Box>
    </Box>
  );
}
