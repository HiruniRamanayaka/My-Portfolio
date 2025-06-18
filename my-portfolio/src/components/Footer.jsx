import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const iconStyle = {
  fontSize: 28,
  color: 'white',
  mx: 1.5,
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#00bcd4',
  },
};

const Footer = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 2, backgroundColor: '#000', py: 5 }}>
      <Box textAlign="center">
        <Typography variant="h6" gutterBottom>
          Follow me on:
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Link href="https://www.linkedin.com/in/hiruni-ramanayaka" target="_blank" rel="noopener noreferrer">
            <Box component="i" className="fab fa-linkedin" sx={iconStyle} />
          </Link>
          <Link href="https://github.com/HiruniRamanayaka" target="_blank" rel="noopener noreferrer">
            <Box component="i" className="fab fa-github" sx={iconStyle} />
          </Link>
          <Link href="https://medium.com/@hiruniramanayaka9" target="_blank" rel="noopener noreferrer">
            <Box component="i" className="fab fa-medium" sx={iconStyle} />
          </Link>
          <Link href="https://web.facebook.com/people/Hiruni-Ramanayaka/pfbid02RoWWKWxc7qqzzCGPv4iMigyr3VRj3cQXKbKCHUeQNLwV19jXPikqB2ghLPAYK4QBl/" target="_blank" rel="noopener noreferrer">
            <Box component="i" className="fab fa-facebook" sx={iconStyle} />
          </Link>
        </Box>
        <Typography variant="body2" sx={{ mt: 2 }}>
          &copy; 2025 Hiruni Ramanayaka. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;