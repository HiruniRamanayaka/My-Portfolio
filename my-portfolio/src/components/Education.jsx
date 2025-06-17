import React from 'react'
import {Container, Typography, Box} from '@mui/material'

const Education = () => {
  return (
    <>
        <Container id="education">
          <Box sx={{ display: 'flex', gap: 8 }}>
            <Box sx={{ textAlign: 'left', flex: 1, borderLeft: 1, borderColor: 'grey.300', pl: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, lineHeight: 1.6, color: "primary.light"}}>Bachelor of Science (Hons) in Software Engineering</Typography>
              <Typography variant="body1" sx={{lineHeight: 1.6}}>University of Kelaniya</Typography>
              <Typography variant="body2" sx={{lineHeight: 1.6}}>2023 – Present</Typography>
            </Box>
            <Box sx={{ textAlign: 'left', flex: 1, borderLeft: 1, borderColor: 'grey.300', pl: 2}}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, lineHeight: 1.6, color: "primary.light"}}>GCE A/L (Advanced Level)</Typography>
              <Typography variant="body1" sx={{lineHeight: 1.6}}>Bandaranayake Central Collage Veyangoda</Typography>
              <Typography variant="body2" sx={{lineHeight: 1.6}}>Physical Stream</Typography>
              <Typography variant="body2" sx={{lineHeight: 1.6}}>2021</Typography>
              <Typography variant="body2" sx={{ fontStyle: 'italic', lineHeight: 1.8 }}>1A 2B's</Typography>
            </Box>
            <Box sx={{ textAlign: 'left', flex: 1, borderLeft: 1, borderColor: 'grey.300', pl: 2}}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, lineHeight: 1.6, color: "primary.light"}}>GCE O/L (Ordinary Level)</Typography>
              <Typography variant="body1" sx={{lineHeight: 1.6}}>Bandaranayake Central Collage Veyangoda</Typography>
              <Typography variant="body2" sx={{lineHeight: 1.6}}>2017</Typography>
              <Typography variant="body2" sx={{ fontStyle: 'italic', lineHeight: 1.6 }}>9A's</Typography>
            </Box>
          </Box>
        </Container>
    </>
  )
}

export default Education