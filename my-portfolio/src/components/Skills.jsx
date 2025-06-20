import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from '@mui/material';

const skillsData = [
  {
    category: 'UI/UX',
    skills: [
      { name: 'Figma', icon: './Icons/figma.svg' },
    ],
  },
  {
    category: 'Languages & Frameworks',
    sections: [
      {
        title: 'Using Now',
        skills: [
          { name: 'HTML5', icon: './Icons/html-5.svg' },
          { name: 'CSS', icon: './Icons/css3.svg' },
          { name: 'JavaScript', icon: './Icons/javascript.svg' },
          { name: 'React', icon: './Icons/react.svg' },
          { name: 'MySQL', icon: './Icons/sql.svg' },
          { name: 'Git', icon: './Icons/git.svg' },
        ],
      },
      {
        title: 'Learning',
        skills: [
          { name: 'Spring Boot', icon: './Icons/springboot.svg' },
          { name: 'Kotlin', icon: './Icons/kotlin.svg' },
          { name: 'Flutter', icon: './Icons/flutter.svg' },
          { name: 'Express.js', icon: './Icons/expressJs.svg' },
          { name: 'Node.js', icon: './Icons/nodeJs.svg' },
          { name: 'MongoDB', icon: './Icons/mongodb.svg' },
        ],
      },
      {
        title: 'Other Skills',
        skills: [
          { name: 'C', icon: './Icons/c.svg' },
          { name: 'Java', icon: './Icons/java.svg' },
          { name: 'Python', icon: './Icons/python.svg' },
          { name: 'PHP', icon: './Icons/php.svg' },
          { name: 'React Native', icon: './Icons/react-native.svg' },
          { name: 'TypeScript', icon: './Icons/typescript.svg' },
        ],
      },
    ],
  },
  {
    category: 'Graphic Design',
    skills: [
      { name: 'Photoshop', icon: './Icons/photoshop.svg' },
      { name: 'Canva', icon: './Icons/canva.svg' },
    ],
  },
];

const SkillsCard = () => {
  return (
    <Container id="skills" maxWidth="lg" sx={{ padding: "2rem", textAlign: "center" }}>
      <Typography variant="h1" gutterBottom sx={{ fontWeight: "bold"}}>
        SKILLS
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {skillsData.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 6,
                },
                backgroundColor: 'rgba(0,0,0,0.6)',
                color: '#fff',
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom textAlign="center" sx={{fontWeight: 'bold'}}>
                  {category.category}
                </Typography>

                {/* If grouped by sections */}
                {category.sections ? (
                  category.sections.map((section, idx) => (
                    <Box key={idx} sx={{ mt: 2 }}>
                      <Typography variant="subtitle2" sx={{py: 2}}>{section.title}</Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 1 }}>
                        {section.skills.map((skill, i) => (
                          <Box key={i} sx={{ textAlign: 'center', width: 60, display:'flex', flexDirection: 'column', gap: 1 }}>
                            <img src={skill.icon} alt={skill.name} width={40} height={40} />
                            <Typography variant="caption" color="#fff">{skill.name}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  ))
                ) : (
                  // Flat list of skills
                  <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                    {category.skills.map((skill, i) => (
                      <Box key={i} sx={{ textAlign: 'center', width: 60 }}>
                        <img src={skill.icon} alt={skill.name} width={40} height={40} />
                        <Typography variant="caption" color="#fff">{skill.name}</Typography>
                      </Box>
                    ))}
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SkillsCard;