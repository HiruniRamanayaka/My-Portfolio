import React from 'react'
import {Container} from '@mui/material'
import Certificates from './Certificates'

const Achievements = () => {
  return (
    <>
        <Container id="achievements">
            <div>Achievements</div>
            <Certificates />
        </Container>
    </>
  )
}

export default Achievements