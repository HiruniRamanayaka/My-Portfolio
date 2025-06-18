import React from 'react';
//import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Box} from '@mui/material'
import Sidebar from './components/Sidebar';

function App() {

  return (
    <Box sx={{ backgroundImage: 'linear-gradient(to right,rgb(5, 5, 5),rgb(23, 30, 33), #203a43)', color: 'white' }}>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Blogs />
      <Contact />
      <Sidebar />
      <Footer />
    </Box>
  )
}

export default App
