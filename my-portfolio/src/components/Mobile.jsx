import React from 'react'
import {Card, CardMedia, Typography, Button, Box, Container, Grid} from '@mui/material'
import imageHabit from '../assets/projectImages/HabitTracker.png'
import imageTodo from '../assets/projectImages/todo.png'

const projects = [
  {
    title: 'StepWise Habit Tracker',
    image: imageHabit,
    tech: 'React Native, TypeScript, Zustand, AsyncStorage',
    description: 'A feature-rich mobile app to help users build good habits and break bad ones, fully functional offline.',
    points: [
      'User authentication (local only)',
      'Daily/weekly habits with completion tracking',
      'Progress tracking and completion animations',
      'Filtering: Today | Completed | All',
      'AsyncStorage-powered offline support',
    ],
    demo: 'https://youtu.be/ckqd--k3F0c?si=jw-_s1vLyfblDkwX', 
    repository: 'https://github.com/HiruniRamanayaka/Habit-Tracker-1',
  },
  {
    title: 'React Native To-Do List App',
    image: imageTodo,
    tech: 'React Native, TypeScript, Zustand, AsyncStorage',
    description: 'A sleek to-do list app with persistent storage, modern UI design, and essential task management features.',
    points: [
      'Add, edit, delete, and share tasks',
      'Mark tasks complete with checkbox + strikethrough',
      'Task detail viewer with sharing options',
      'Material-inspired UI using react-native-paper',
      'Data persisted via AsyncStorage',
    ],
    demo: 'https://youtube.com/shorts/U8mNfqfSnpo?si=ntBxzUYPlmWIrkAH', 
    repository: 'https://github.com/HiruniRamanayaka/SENG-31323---React-Native-To-Do-List-App',
  },
]

const Mobile = () => {
  return (
    <Container id="mobile" disableGutters sx={{pt: 5}}>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              sx={{
                position: 'relative',
                height: 500,
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
                height="500"
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

export default Mobile