import React from 'react';
import { Box, Link } from '@mui/material';

const iconWrapperStyle = {
  borderRadius: '50%',
  p: 1.2,
  mb: 2,
  border: '1px solid white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.3s ease, transform 0.3s ease',
  '&:hover': {
    borderColor: '#00bcd4',
    transform: 'scale(1.1)',
  },
  '&:hover i': {
    color: '#00bcd4',
  },

};

const iconStyle = {
  fontSize: 24,
  color: 'white',
  transition: 'color 0.3s ease',
};

const Sidebar = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: '35%',
        left: '16px',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1300,
      }}
    >
      <Link href="https://www.linkedin.com/in/hiruni-ramanayaka" target="_blank" rel="noopener noreferrer" underline="none">
        <Box sx={iconWrapperStyle}>
          <Box component="i" className="fab fa-linkedin" sx={iconStyle} />
        </Box>
      </Link>
      <Link href="https://github.com/HiruniRamanayaka" target="_blank" rel="noopener noreferrer" underline="none">
        <Box sx={iconWrapperStyle}>
          <Box component="i" className="fab fa-github" sx={iconStyle} />
        </Box>
      </Link>
      <Link href="https://medium.com/@hiruniramanayaka9" target="_blank" rel="noopener noreferrer" underline="none">
        <Box sx={iconWrapperStyle}>
          <Box component="i" className="fab fa-medium" sx={iconStyle} />
        </Box>
      </Link>
      <Link href="https://web.facebook.com/people/Hiruni-Ramanayaka/pfbid02RoWWKWxc7qqzzCGPv4iMigyr3VRj3cQXKbKCHUeQNLwV19jXPikqB2ghLPAYK4QBl/" target="_blank" rel="noopener noreferrer" underline="none">
        <Box sx={iconWrapperStyle}>
          <Box component="i" className="fab fa-facebook" sx={iconStyle} />
        </Box>
      </Link>
    </Box>
  );
};

export default Sidebar;