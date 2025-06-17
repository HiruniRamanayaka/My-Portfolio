import React, { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
  Link,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SchoolIcon from '@mui/icons-material/School';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

const certificateData = [
  { 
    title: 'Diploma in C Programming', 
    issuer: 'Alison', 
    date: 'Dec 2023',
    link: 'https://drive.google.com/file/d/10IDxTUTmoLVYqi1-rl9RwFfr6gBls-kb/view?usp=sharing' 
  },
  { 
    title: 'Diploma in Python Fundamentals', 
    issuer: 'Alison', 
    date: 'Dec 2023',
    link: 'https://drive.google.com/file/d/1A5mEHj82OC0OYXiOWXgcjCXUBdM18A1c/view?usp=sharing'  
  },
  { 
    title: 'Advanced Diploma in Python Programming',
    issuer: 'Alison', 
    date: 'Dec 2023',
    link: 'https://drive.google.com/file/d/1kosW9w5168qUMwpksJSjOpHBdvxJeDul/view?usp=sharing'  
  },
  { 
    title: 'Fundamentals of HTML', 
    issuer: 'Alison', 
    date: 'Apr 2024',
    link: 'https://drive.google.com/file/d/1hf4rJSqD4R3d4SZjh0maxZJlk_6m6JBA/view?usp=sharing'  
  },
  { 
    title: 'Diploma in CSS using HTML', 
    issuer: 'Alison', 
    date: 'Apr 2024',
    link: 'https://drive.google.com/file/d/1N8pPbKUnFmkC1kVYAstzqcBCFhmsUh4q/view?usp=sharing'  
  },
  { 
    title: 'Web Development Certificate', 
    issuer: 'Sololearn', 
    date: 'Dec 2024', 
    link: 'https://api2.sololearn.com/v2/certificates/CC-K2LR2JKU/image/png?t=638686623698680340' 
  },
  { 
    title: 'Coding Foundation Certificate', 
    issuer: 'Sololearn', 
    date: 'Aug 2024', 
    link: 'https://api2.sololearn.com/v2/certificates/CC-KZX3SSHR/image/png?t=638598454913323940' 
  },
  { 
    title: 'Introduction to JavaScript', 
    issuer: 'Sololearn', 
    date: 'Apr 2025', 
    link: 'https://api2.sololearn.com/v2/certificates/CC-DNQSR1ZI/image/png?t=638813639788594940' 
  },
  { 
    title: 'JavaScript Intermediate', 
    issuer: 'Sololearn', 
    date: 'May 2025', 
    link: 'https://api2.sololearn.com/v2/certificates/CC-NT5S2UNZ/image/png?t=638818794062524720' 
  },
  { 
    title: 'Introduction to SQL', 
    issuer: 'Sololearn', 
    date: 'March 2025', 
    link: 'https://api2.sololearn.com/v2/certificates/CC-WAKYHCMK/image/png?t=638785099694436920' 
  },
  {
    title: 'JavaScript (Basic) Certificate',
    issuer: 'HackerRank',
    date: '2025',
    link: 'https://www.hackerrank.com/certificates/2e9f0419e0d6',
  },
];

const Certificates = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedCertificates = showAll ? certificateData : certificateData.slice(0, 4);

  return (
    <Container id="certificates" sx={{ py: 4 }}>

      <Grid container spacing={4} alignItems="stretch">
        {displayedCertificates.map((cert, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} display="flex">
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                background: 'linear-gradient(145deg, #212121, #1a1a1a)',
                border: '1px solid #333',
                color: '#f0f0f0',
                borderRadius: 2,
                px: 2,
                py: 1,
                boxShadow: '0 0 10px rgba(0,0,0,0.3)',
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box display="flex" alignItems="center" mb={2}>
                  <SchoolIcon sx={{ mr: 1, color: '#90caf9' }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {cert.title}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                  Issued by <strong>{cert.issuer}</strong> • {cert.date}
                </Typography>
                {cert.link && (
                  <Box mt={1}>
                    <Link
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                      sx={{ color: '#90caf9', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 0.5  }}
                    >
                      <InsertLinkIcon fontSize="small"/>
                      View Certificate
                    </Link>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" mt={5}>
        <Button
          variant="text"
          onClick={() => setShowAll(!showAll)}
          endIcon={showAll ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          sx={{ color: '#90caf9', fontWeight: 500 }}
        >
          {showAll ? 'Show Less' : 'Show More'}
        </Button>
      </Box>
    </Container>
  );
};

export default Certificates;
