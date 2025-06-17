import React, { useState } from 'react';
import {
  Container,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Box,
} from '@mui/material';
import Certificates from './Certificates';
import Badges from './Badges';

const Achievements = () => {
  const [view, setView] = useState('certificates');

  const handleViewChange = (_, newView) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  return (
    <Container id="achievements">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2,
          mb: 3,
        }}
      >
        <Typography variant="body1" sx={{ flexGrow: 1, textAlign: 'left' }}>
          Below are the certificates and badges I’ve earned through my learning journey.
        </Typography>

        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={handleViewChange}
          color="primary"
          size="small"
        >
          <ToggleButton value="certificates"
            sx={{
              color: '#f0f0f0',
              '&.Mui-selected': {
                backgroundColor: '#1976d2',
                color: '#ffffff',
                '&:hover': {
                  backgroundColor: '#1565c0',
                },
              },
            }}
          >
            Certificates
          </ToggleButton>
          <ToggleButton value="badges"
            sx={{
              color: '#f0f0f0',
              '&.Mui-selected': {
                backgroundColor: '#1976d2',
                color: '#ffffff',
                '&:hover': {
                  backgroundColor: '#1565c0',
                },
              },
            }}
          >
            Badges
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {view === 'certificates' && <Certificates />}
      {view === 'badges' && <Badges />}
    </Container>
  );
};

export default Achievements;