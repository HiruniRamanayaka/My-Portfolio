import React from 'react'
import {Container, Typography, Box} from '@mui/material'

const Experience = () => {
  return (
    <Container id="experience" sx={{textAlign: "left"}}>
        <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold">Assistant Secretary - IEEE Student Branch, University of Kelaniya</Typography>
            <Typography variant="body1">Helped organize projects, managed communication and documentation.</Typography>
            <Typography variant="caption">2024 - Present</Typography>
        </Box>
        <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold">Member of Editorial Team - IEEE WIE Affinity group, University of Kelaniya</Typography>
            <Typography variant="body1">Designed flyers and supported content creation and review for group communications and event promotions.</Typography>
            <Typography variant="caption">2023 - 2024</Typography>
        </Box>
        <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold">Member of Software Engineering Student Association, University of Kelaniya</Typography>
            <Typography variant="caption">2023 - present</Typography>
        </Box>
        <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold">Member of Rotaract Club, University of Kelaniya</Typography>
            <Typography variant="caption">2024 - present</Typography>
        </Box>
    </Container>
  )
}

export default Experience