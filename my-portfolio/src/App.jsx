import React from 'react';
//import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Achievements from './components/Achievements';
import {Box} from '@mui/material'

function App() {

  return (
    <Box sx={{ backgroundImage: 'linear-gradient(to right,rgb(5, 5, 5),rgb(23, 30, 33), #203a43)', color: 'white' }}>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Blogs />
      <Contact />
      <Achievements />

    </Box>
  )
}

export default App
