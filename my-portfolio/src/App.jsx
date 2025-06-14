import React from 'react';
//import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Achievements from './components/Achievements';

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Education />
      <Blogs />
      <Contact />
      <Achievements />

    </>
  )
}

export default App
