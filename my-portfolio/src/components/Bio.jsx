import React from 'react'
import {Container, Box, Typography, Divider} from '@mui/material'
import { grey } from '@mui/material/colors';

const textColor = grey[300];

const Bio = () => {
  return (
    <Container id="bio" sx={{ py: 6 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: 4 }}>
            {/* left section */}
            <Box sx={{ textAlign: 'left', flex: 1, pr: { md: 6 } }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, color: '#00bcd4' }}>
                    About Me
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: textColor, lineHeight: 1.6 }}>
                    I am Hiruni Ramanayaka, a dedicated undergraduate pursuing a Bachelor of Science (Honours) in Software Engineering at the University of Kelaniya. With a strong interest in full-stack development, I am passionate about creating user-centric, modern web applications that deliver seamless experiences.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: textColor, lineHeight: 1.6 }}>
                    I have experience working on both individual and team-based projects that demonstrate my skills. I am constantly exploring new tools and frameworks to enhance my knowledge and improve the quality of my work.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: textColor, lineHeight: 1.6 }}>
                    In addition to academics, I actively contribute to volunteer organizations and leadership initiatives, where I continue to grow as a professional and a team player. My goal is to become a versatile software engineer capable of solving real-world problems through innovative solutions.
                </Typography>
            </Box>

            {/* right section */}
            <Box sx={{ textAlign: 'left', mt: { xs: 4, md: 10 }, minWidth: '250px'}}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: textColor }}>
                    Contact Details
                </Typography>
                <Divider sx={{ mb: 2, borderColor: grey[700] }} />
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