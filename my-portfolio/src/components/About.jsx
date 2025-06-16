import React from 'react'
import {Container} from '@mui/material'
import Bio from './Bio.jsx'

const About = () => {
  return (
    <>
        <Container id="about">
            <h1>ABOUT</h1>
            <Bio />
        </Container>
    </>
  )
}

export default About