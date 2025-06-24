import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';

const sections = [
  'home',
  'about',
  'skills',
  'projects',
  'blogs',
  'contact',
];

const Navbar = () => {
  const [active, setActive] = useState('home'); 
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // 60% of the section must be visible to trigger
      }
    );

    sections.forEach((id) => {
      // // attaching the observer to each element with an ID
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // removing the observer when the component unmounts
    return () => {                  
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <AppBar 
      position="sticky" 
      elevation={4} 
      sx={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(12px)',
        color: '#fff',
        boxShadow: '0 2px 4px rgba(255, 255, 255, 0.1)',
        transition: 'background-color 0.3s ease',
        py: 1.5,
      }}
      >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            My Portfolio
          </Typography>

          {isMobile ? (
              <>
                <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: '#fff' }}>
                  <MenuIcon />
                </IconButton>
                <Drawer 
                  anchor="right" 
                  open={drawerOpen} 
                  onClose={() => setDrawerOpen(false)}  
                >
                  <Box 
                    sx={{
                      width: 250,
                      p: 2,
                      height: '100%',
                      backgroundColor: 'rgba(0,0,0,0.9)',
                      backdropFilter: 'blur(6px)',
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                      <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'white' }}>
                        <CloseIcon />
                      </IconButton>
                    </Box>
                    <List>
                      {sections.map((id) => (
                        <ListItem
                          button
                          key={id}
                          onClick={() => {
                            setActive(id);
                            setDrawerOpen(false);
                          }}
                          component="a"
                          href={`#${id}`}
                          sx={{
                            borderBottom: active === id ? '2px solid white' : '2px solid transparent',
                            transition: 'border-color 0.3s ease',
                          }}
                        >
                          <Typography
                            sx={{
                              fontWeight: active === id ? 'bold' : 'normal',
                              color: active === id ? 'white' : 'white',
                            }}
                          >
                            {id.toUpperCase()}
                          </Typography>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Drawer>
              </>
            ) : (
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
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
