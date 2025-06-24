import React from 'react'
import {Card, CardMedia, Typography, Button, Box, Container, Grid } from '@mui/material'
import imagePetHug from '../assets/projectImages/pethug.jpg'
import imageFuelQuota from '../assets/projectImages/fuelquota.jpg'

const projects = [
  {
    title: 'Veterinary Hospital System',
    image: imagePetHug,
    tech: 'HTML, CSS, JS, PHP, MySQL',
    description: 'A web-based system designed to manage pet-related services including appointments, reports, and virtual consultations, with separate modules for users, doctors, and administrators.',
    points : [
      'User, admin, doctors seperate registration and login systems',
      'Manage pet profiles and medical reports',
      'Online appointment scheduling and consultations',
      'Doctor and admin dashboards for managing services',
    ],
    demo: 'https://youtu.be/_PuSGUWo7u0',
    repository: 'https://github.com/HiruniRamanayaka/PetHug-Project',
  },
  {
    title: 'Fuel Quota Management System',
    image: imageFuelQuota,
    tech: 'HTML, CSS, JS, React, Flutter, Spring Boot, MySQL',
    description: 'A comprehensive platform designed to manage fuel quotas for vehicles, fuel station operations, and efficient fuel distribution during a crisis. It includes vehicle registration, QR code generation, fuel station monitoring, and an Android mobile app for scanning and tracking fuel usage.',
    points : [
      'Vehicle registration with unique QR code generation',
      'Fuel station registration and management',
      'Fuel quota management and tracking',
      'QR code scanning for fuel usage at fuel stations',
      'Notifications sent to vehicle owners after fuel pumping (via SMS using Twilio)',
    ],
    demo: 'https://drive.google.com/file/d/1VYaZcNwHm9_HsmkjCH64vb7C4WGG4iNH/view?usp=sharing',
    repository: 'https://github.com/pubudu2003060/SENG-22212-Group-Project',
  },
]

const Group = () => {
  return (
    <Container id="group" disableGutters sx={{pt: 2}}>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box sx={{ height: '100%', alignItems: 'center' }}>
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
                  {project.repository && (
                    <Button
                      href={project.repository}
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
                      Git Hub
                    </Button>
                  )}
                </Box>
              </Box>
            </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Group