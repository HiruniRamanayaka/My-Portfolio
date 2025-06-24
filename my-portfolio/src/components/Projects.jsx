import React, { useState }  from 'react'
import {Container, Typography, Box, Link} from '@mui/material'
import Group from './Group.jsx'
import UiUx from './UiUx.jsx'
import Mobile from './Mobile'
import Frontend from './Frontend'
import Backend from './Backend'

const sections = [
  'all',
  'group',
  'ui/ux',
  'mobile',
  'frontend',
  'backend',
]

const Projects = () => {
  const [active, setActive] = useState("all");
  return (
    <>
      <Container id="projects" maxWidth="lg" sx={{ padding: "2rem", textAlign: "center" }}>
        <Typography variant="h1" gutterBottom sx={{ fontWeight: "bold"}}>
          PROJECTS
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

        <Box 
          sx={{ 
            mt: 2, 
            p: 6, 
            borderRadius: "10px", 
            backgroundColor: "rgba(0,0,0,0.2)", 
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease', }}
        >
          {(active === "all" || active === "group") && <Group />}
          {(active === "all" || active === "mobile") && <Mobile />}
          {(active === "all" || active === "ui/ux") && <UiUx />}
          {(active === "all" || active === "frontend") && <Frontend />}
          {(active === "all" || active === "backend") && <Backend />}
        </Box>

      </Container>
    </>
  )
}

export default Projects