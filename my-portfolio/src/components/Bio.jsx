import React from 'react'
import {Container, Box, Typography, Divider} from '@mui/material'
import { grey } from '@mui/material/colors';

const textColor = grey[300];

const Bio = () => {
  return (
    <Container id="bio">
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ textAlign: 'left', flex: 1, pr: 10 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, color: '#00bcd4' }}>
                    About Me
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: textColor, lineHeight: 1.8 }}>
                    I am Hiruni Ramanayaka, a dedicated undergraduate pursuing a Bachelor of Science (Honours) in Software Engineering at the University of Kelaniya. With a strong interest in full-stack development, I am passionate about creating user-centric, modern web applications that deliver seamless experiences.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: textColor, lineHeight: 1.8 }}>
                    I have experience working on both individual and team-based projects that demonstrate my skills. I am constantly exploring new tools and frameworks to enhance my knowledge and improve the quality of my work.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: textColor, lineHeight: 1.8 }}>
                    In addition to academics, I actively contribute to volunteer organizations and leadership initiatives, where I continue to grow as a professional and a team player. My goal is to become a versatile software engineer capable of solving real-world problems through innovative solutions.
                </Typography>
            </Box>
            <Box sx={{ textAlign: 'left', mt: 10, ml: 2}}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Contact Details
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1" sx={{ mb: 1, color: textColor }}>
                    <strong>Full Name:</strong> R.K. Hiruni Kavindhya Ramanayaka
                </Typography>
                <Typography variant="body1" sx={{ mb: 1, color: textColor }}>
                    <strong>Address:</strong> No 55, Udugoda, Ruggahawila
                </Typography>
                <Typography variant="body1" sx={{ mb: 1, color: textColor }}>
                    <strong>Phone:</strong> +94 777397226
                </Typography>
                <Typography variant="body1" sx={{ mb: 1, color: textColor }}>
                    <strong>Email:</strong> hiruniramanayaka9@gmail.com
                </Typography>
            </Box>
        </Box>
    </Container>
  )
}

export default Bio