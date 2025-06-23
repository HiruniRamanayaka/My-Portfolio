import React from 'react'
import {Card, CardMedia, Typography, Button, Box, Container, Grid } from '@mui/material'
import imageTodo from '../assets/projectImages/Todo-list.jpg'
import imageWeather from '../assets/projectImages/weather-app.jpg'
import imageRecipe from '../assets/projectImages/recipe-book.jpg'
import imageTicTacToe from '../assets/projectImages/tic-tac-toe_.jpg'

const projects = [
  {
    title: 'Calendar Tool',
    image: imageTodo,
    tech: 'HTML, CSS, JavaScript',
    description: 'A simple web application to create, update, and delete daily tasks.',
    points : [
      'Add, edit, and delete tasks',
      'Mark tasks as completed',
      'Persistent storage using localStorage',
    ],
    demo: 'https://youtu.be/EyD6oyYgqLk',
    repository: 'https://github.com/HiruniRamanayaka/Todo-List',
  },
  {
    title: 'Weather App',
    image: imageWeather,
    tech: 'HTML, CSS, JavaScript, OpenWeather API',
    description: 'An application that shows real-time weather data for any city using an external API.',
    points : [
      'Search weather by city name',
      'Displays temperature, humidity, and weather status',
      'Responsive design',
    ],
    demo: 'https://youtu.be/7Y2iiJSJ1XA',
    repository: 'https://github.com/HiruniRamanayaka/Weather-App',
  },
  {
    title: 'Recipe Book',
    image: imageRecipe,
    tech: 'HTML, CSS, JavaScript',
    description: 'A digital recipe book where users can browse and save their favorite recipes.',
    points : [
      'List of recipes with images',
      'Search and filter by category',
      '',
    ],
    demo: 'https://youtu.be/yN6cW6KFQxY',
    repository: 'https://github.com/HiruniRamanayaka/Recipe-Book',
  },
  {
    title: 'Tic-Tac-Toe',
    image: imageTicTacToe,
    tech: 'HTML, CSS, JavaScript',
    description: 'A simple two-player Tic-Tac-Toe game played in the browser.',
    points : [
      'Interactive game board',
      'Win and draw detection',
      'Restart game option',
    ],
    demo: 'https://youtu.be/796pCTaKeL4',
    repository: 'https://github.com/HiruniRamanayaka/Tic-Tac-Toe',
  },
]

const Frontend = () => {
  return (
    <Container id="frontend" disableGutters sx={{pt: 5}}>
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

export default Frontend