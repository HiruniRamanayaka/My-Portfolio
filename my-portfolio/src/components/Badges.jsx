import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import cloud101 from '../assets/cloud-101.png';
import cloudEssentials from '../assets/cloud-essentials.png';

const badgeData = [
  {
    title: 'AWS Educate: Introduction to Cloud 101',
    issuer: 'Amazon Web Services Training and Certification',
    link: 'https://www.credly.com/badges/bd9ba1df-02f1-410d-86d4-de45852920d1/public_url', 
    image: cloud101
  },
  {
    title: 'AWS Knowledge: Cloud Essentials',
    issuer: 'Amazon Web Services Training and Certification',
    link: 'https://www.credly.com/badges/cdab868f-d6e2-4771-9f4d-cecec953ea22/public_url', 
    image: cloudEssentials
  }
];

const Badges = () => {
  return (
    <Container id="certificates">
      <Grid container spacing={3}>
        {badgeData.map((badge, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card 
                elevation={1} 
                sx={{ backgroundColor: '#1e1e1e', color: '#f5f5f5' }}
            >
                <CardMedia
                    component="img"
                    height="140"
                    image={badge.image}
                    alt={`${badge.title} badge`}
                    style={{ objectFit: 'contain', padding: '1rem', backgroundColor: '#2a2a2a' }}
                />
                <CardContent>
                    <Typography variant="subtitle" sx={{ color: '#ffffff', fontWeight: 'bold' }}>
                        {badge.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#cccccc' }}>
                        {badge.issuer}
                    </Typography>
                    <a 
                        href={badge.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: '#90caf9', textDecoration: 'none', fontSize: '0.8rem' }}
                    >
                        View Credential
                    </a>
                </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Badges;