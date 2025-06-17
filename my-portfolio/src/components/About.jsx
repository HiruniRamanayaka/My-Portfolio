import React, { useState } from 'react'
import {Container, Link, Typography, Box} from '@mui/material'
import Bio from './Bio.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'
import Achievements from './Achievements.jsx'

const sections = [
  'bio',
  'education',
  'experience',
  'achievements',
]

const About = () => {
  const [active, setActive] = useState("bio");
  return (
    <>
      <Container id="about" maxWidth="lg" sx={{ padding: "2rem", textAlign: "center" }}>
        <Typography variant="h1" gutterBottom sx={{ fontWeight: "bold"}}>
          ABOUT
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", mb: 3 }}>
          {sections.map((id) => (
            <Link
              key={id}
              href={`#${id}`}
              underline="none"
              onClick={() => setActive(id)}
              sx={{
                padding: "0.5rem 1rem",
                fontWeight: active === id ? "bold" : "normal",
                borderRadius: "5px",
                backgroundColor: active === id ? "primary.light" : "transparent",
                color: active === id ? "black" : "primary",
                transition: "0.3s",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "white",
                },
              }}
            >
              {id.toUpperCase()}
            </Link>
          ))}
        </Box>

        <Box sx={{ mt: 2, p: 6, borderRadius: "10px", backgroundColor: "rgba(0,0,0,0.2)", boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease', }}>
          {active === "bio" && <Bio />}
          {active === "education" && <Education />}
          {active === "experience" && <Experience />}
          {active === "achievements" && <Achievements />}
        </Box>

      </Container>
    </>
  )
}

export default About