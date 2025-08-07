import React from 'react'
import { Card, CardMedia, Typography, Button, Box, Container, Grid } from '@mui/material';
import image1 from '../assets/projectImages/figma_.jpg'
import image2 from '../assets/projectImages/smoothies_figma.png'

const projects = [
  {
    title: 'UI/UX Design for Library Management System',
    image: image1,
    tech: 'Figma',
    description: 'A modern and user-friendly interface designs for a Library Management System, focusing on enhancing user experience for users and administrators.',
    points : [
      'Clean and organized dashboard layout',
      'User-friendly navigation for book search and borrowing',
      'Responsive design mockups for web and mobile views',
    ],
    demo: 'https://youtu.be/VNWhOhA2-oA?si=YNeaYpbDVqLITGya',
    userInterfaceLink: 'https://www.figma.com/design/AL9NglUXMEOxTPeL9Si6tb/Library-Management-System--User-Interfaces-?node-id=607-9&t=xZVMKQn832FktBIP-1',
    adminInterfaceLink: 'https://www.figma.com/design/PKAPucSpb4Tly5Q8rPiVKu/Admin-interfaces?node-id=0-1&t=cBQQ8uXNhTgsQHIO-1',
    mobileInterfaceLink: 'https://www.figma.com/design/z2yrl3HaBU8jh89xGXetvA/Alternative?node-id=0-1&t=7V8Y91h21ARiKIYz-1',
  },
  {
    title: 'UI/UX Design for E-commerce Interface for Introducing New Beverage ',
    image: image2,
    tech: 'Figma',
    description: 'An interactive and visually vibrant e-commerce interface for a smoothie brand. Users can explore different flavors, view product details, and make purchases through a clean and modern interface.',
    points : [
      'Flavor-themed UI sections (Green, Berry, Orange, Strawberry) for better product segmentation',
      'Smooth transition from landing page to individual product views with detailed pricing and cart options',
      'Add-to-cart and checkout-ready product cards with vibrant, brand-consistent color schemes'
    ],
    demo: 'https://youtu.be/BWSfruKU9RM',
    userInterfaceLink: 'https://www.figma.com/design/TMOtM9k64OeVnvPv2sXm43/beverage-mockup?node-id=0-1&t=PQWoELMGCRiAT9J7-1',
  },
]

const UiUx = () => {
  return (
    <Container id="ui-ux" sx={{ mt: 2 }} disableGutters>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              sx={{
                position: 'relative',
                height: 230,
                borderRadius: 4,
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                overflow: 'hidden',
                '&:hover .details': { opacity: 1, visibility: 'visible' },
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'translateY(-4px)' },
              }}
            >
              <CardMedia
                component="img"
                height="230"
                image={project.image}
                alt={project.title}
                sx={{
                  transition: 'transform 0.4s ease, filter 0.4s ease',
                  filter: 'brightness(100%)',
                  '&:hover': {
                    transform: 'scale(1.06)',
                    filter: 'brightness(80%)',
                  },
                }}
              />
              <Box
                className="details"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  backdropFilter: 'blur(8px)',
                  backgroundColor: 'rgba(255,255,255,0.65)',
                  opacity: 0,
                  visibility: 'hidden',
                  p: 2,
                  transition: '0.4s ease',
                  overflowY: 'auto',
                  '&::-webkit-scrollbar': { display: 'none' },
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#1e1e1e', pb: 3 }}>
                  {project.title}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" sx={{textAlign: 'left', mb: 1 }}>
                  <strong>Tech:</strong> {project.tech}
                </Typography>
                <Typography variant="body2" sx={{textAlign: 'left', mb: 1 }}>
                  {project.description}
                </Typography>
                <ul style={{ paddingLeft: 20, marginBottom: 10 }}>
                  {project.points.map((pt, i) => (
                    <li key={i}>
                      <Typography variant="caption" sx={{ display: 'block', textAlign: 'left' }}>{pt}</Typography>
                    </li>
                  ))}
                </ul>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, pt: 2 }}>
                  {project.demo && (
                    <Button
                      href={project.demo}
                      target="_blank"
                      size="small"
                      sx={{
                        backgroundColor: 'primary.main',
                        color: '#fff',
                        '&:hover': { 
                          backgroundColor: 'primary.light',
                          color: 'black',
                        },
                      }}
                    >
                      Demo
                    </Button>
                  )}
                  {project.userInterfaceLink && (
                    <Button
                      href={project.userInterfaceLink}
                      target="_blank"
                      size="small"
                      sx={{
                        backgroundColor: 'primary.main',
                        color: '#fff',
                        '&:hover': { 
                          backgroundColor: 'primary.light',
                          color: 'black', 
                        },
                      }}
                    >
                      User UI
                    </Button>
                  )}
                  {project.adminInterfaceLink && (
                    <Button
                      href={project.adminInterfaceLink}
                      target="_blank"
                      size="small"
                      sx={{
                        backgroundColor: 'primary.main',
                        color: '#fff',
                        '&:hover': { 
                          backgroundColor: 'primary.light',
                          color: 'black', 
                        },
                      }}
                    >
                      Admin UI
                    </Button>
                  )}
                  {project.mobileInterfaceLink && (
                    <Button
                      href={project.mobileInterfaceLink}
                      target="_blank"
                      size="small"
                      sx={{
                        backgroundColor: 'primary.main',
                        color: '#fff',
                        '&:hover': { 
                          backgroundColor: 'primary.light',
                          color: 'black', 
                        },
                      }}
                    >
                      Mobile UI
                    </Button>
                  )}
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UiUx;
