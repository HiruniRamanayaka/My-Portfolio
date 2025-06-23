import React from 'react'
import {Card, CardMedia, Typography, Button, Box, Container, Grid } from '@mui/material'
import imageCalendar from '../assets/projectImages/Calendar_.jpg'
import imageEMS from '../assets/projectImages/EmployeeManagement_.jpg'

const projects = [
  {
    title: 'Calendar Tool',
    image: imageCalendar,
    tech: 'Java',
    description: 'A simple Java-based Calendar Tool to view months, navigate between months, and check leap years.',
    points : [
      'View current month and year',
      'view the calendar for relevant months',
      'Check if a given year is a leap year',
    ],
    demo: 'https://youtu.be/ouXeChaPEVE',
    repository: 'https://github.com/HiruniRamanayaka/Calendar',
  },
  {
    title: 'Employee Management System',
    image: imageEMS,
    tech: 'Java, Maven, MySQL',
    description: 'A CRUD-based system that manages employee records with a connection to a MySQL database.',
    points : [
      'Create: Add new employee records',
      'Read: View employee data',
      'Update: Edit existing employee information',
      'Delete: Remove employee records',
    ],
    demo: 'https://youtu.be/O9wXSm7Rffs',
    repository: 'https://github.com/HiruniRamanayaka/Employee-Management-System',
  },
]

const Backend = () => {
  return (
    <Container id="backend">
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              sx={{
                position: 'relative',
                height: 320,
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
                height="320"
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
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Backend