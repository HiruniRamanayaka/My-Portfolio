import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from '@mui/material';
import figmaLogo from '../assets/Icons/figma.svg';
import html5Logo from '../assets/Icons/html-5.svg';
import css3Logo from '../assets/Icons/css3.svg';
import javascriptLogo from '../assets/Icons/javascript.svg';
import reactLogo from '../assets/Icons/react.svg';
import sqlLogo from '../assets/Icons/sql.svg';
import gitLogo from '../assets/Icons/git.svg';
import springbootLogo from '../assets/Icons/springboot.svg';
import kotlinLogo from '../assets/Icons/kotlin.svg';
import flutterLogo from '../assets/Icons/flutter.svg';
import expressJsLogo from '../assets/Icons/expressJs.svg';
import nodeJsLogo from '../assets/Icons/nodeJs.svg';
import mongodbLogo from '../assets/Icons/mongodb.svg';
import cLogo from '../assets/Icons/c.svg';
import javaLogo from '../assets/Icons/java.svg';
import pythonLogo from '../assets/Icons/python.svg';
import phpLogo from '../assets/Icons/php.svg';
import reactnativeLogo from '../assets/Icons/react-native.svg';
import typescriptLogo from '../assets/Icons/typescript.svg';
import photoshopLogo from '../assets/Icons/photoshop.svg';
import canvaLogo from '../assets/Icons/canva.svg';


const skillsData = [
  {
    category: 'UI/UX',
    skills: [
      { name: 'Figma', icon: figmaLogo },
    ],
  },
  {
    category: 'Languages & Frameworks',
    sections: [
      {
        title: 'Using Now',
        skills: [
          { name: 'HTML5', icon: html5Logo },
          { name: 'CSS', icon: css3Logo },
          { name: 'JavaScript', icon: javascriptLogo },
          { name: 'React', icon: reactLogo },
          { name: 'MySQL', icon: sqlLogo },
          { name: 'Git', icon: gitLogo },
        ],
      },
      {
        title: 'Learning',
        skills: [
          { name: 'Spring Boot', icon: springbootLogo },
          { name: 'Kotlin', icon: kotlinLogo },
          { name: 'Flutter', icon: flutterLogo },
          { name: 'Express.js', icon: expressJsLogo },
          { name: 'Node.js', icon: nodeJsLogo },
          { name: 'MongoDB', icon: mongodbLogo },
        ],
      },
      {
        title: 'Other Skills',
        skills: [
          { name: 'C', icon: cLogo },
          { name: 'Java', icon: javaLogo },
          { name: 'Python', icon: pythonLogo },
          { name: 'PHP', icon: phpLogo },
          { name: 'React Native', icon: reactnativeLogo },
          { name: 'TypeScript', icon: typescriptLogo },
        ],
      },
    ],
  },
  {
    category: 'Graphic Design',
    skills: [
      { name: 'Photoshop', icon: photoshopLogo },
      { name: 'Canva', icon: canvaLogo },
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
          <Grid key={index} item
            xs={12}
            sm={index === 1 ? 8 : 4}
            md={index === 1 ? 6 : 3} 
          >
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