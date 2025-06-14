import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  Box,
} from '@mui/material';

const sections = [
  'home',
  'about',
  'projects',
  'skills',
  'blogs',
  'achievements',
  'education',
  'contact',
];

const Navbar = () => {
  const [active, setActive] = useState('home'); // default to first section

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#ffffff', color: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Portfolio
          </Typography>

          <nav>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {sections.map((id) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  underline="none"
                  color="inherit"
                  onClick={() => setActive(id)}
                  sx={{
                    padding: '0.5rem',
                    fontWeight: active === id ? 'bold' : 'normal',
                    borderBottom: active === id ? '2px solid currentColor' : '2px solid transparent',
                    transition: 'border-color 0.3s ease',
                    cursor: 'pointer',
                  }}
                >
                  {id.toUpperCase()}
                </Link>
              ))}
            </Box>
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
