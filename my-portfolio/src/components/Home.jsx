import React from 'react'
import {Container, Typography, Button, Box} from '@mui/material'
import image from '../assets/me3.jpg';
import CV from '../assets/Cv.pdf';

const Home = () => {
  return (
    <>
      <Container id="home">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 10 }}>
          {/* Text Section */}
          <Box sx={{ textAlign: 'left', flex: 1, alignItems: 'center' }}>
            <Typography variant='h4' sx={{ fontWeight: 'bold', color: '#00bcd4', mt: 12 }}>
              Hi, I'm 
            </Typography>
            <Typography variant='h2' sx={{ fontWeight: 700, mb: 2 }}>
              Hiruni Ramanayaka
            </Typography>
            <Typography variant='h5' sx={{ color: 'secondary', mb: 4 }}>
              Software Engineering Undergraduate
            </Typography>
            <Box sx={{ mt: 8 }}>
              <Button variant="contained" size="large" sx={{ mr: 5 }} href="#projects">
                View My Work
              </Button>
              <Button variant="outlined" size="large" color="primary" href={CV} download>
                Download CV
              </Button>
            </Box>
          </Box>

          {/* Image Section */}
          <Box sx={{ position: 'relative' , textAlign: 'center' }}>
            <Box
              component="img"
              src={image}
              alt="Hiruni"
              sx={{
                maxWidth: '400px',
                width: '100%',
                borderRadius: '50%',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                position: 'relative',
                zIndex: 2,
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' }
              }}
            />
            <Box
              component="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 480 480"
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                zIndex: 1,
                opacity: 0.4
              }}
            >
              <path d="M120 120h120v120H120zM0 240h120v120H0zM120 360h120v120H120zM0 0h120v120H0zM360 120h120v120H360zM240 240h120v120H240zM360 360h120v120H360zM240 0h120v120H240z" fill="#000000" />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default Home