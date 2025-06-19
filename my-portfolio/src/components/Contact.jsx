import React from 'react';
import { Container, Box, Typography, TextField, Button } from '@mui/material';

const inputStyle = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: '#00bcd4',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#00bcd4',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'white',
  },
  '& .MuiInputBase-input': {
    color: 'white',
  },
};

const Contact = () => {
  return (
    <Container id="contact" maxWidth="lg" sx={{ padding: '2rem', textAlign: 'center' }}>
      <Typography variant="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        Contact
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: 5 }}>
        {/* Left Section */}
        <Box sx={{ flex: 1, textAlign: 'left', pl: 5, py: 5 }}>
          <Typography variant="body1">Whether it's a collaboration, question, or just a hello,</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>I’d love to hear from you.</Typography>
          <Typography sx={{display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center', pt: 3}}>
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <strong>Email:</strong> hiruniramanayaka9@gmail.com</Typography>
          <Typography sx={{display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center', pt: 1}}>
            <i className="fa fa-phone" aria-hidden="true"></i>
            <strong>Phone:</strong> +94 777397226</Typography>
        </Box>

        {/* Right Section: Form */}
        <Box sx={{ flex: 1, py: 5 }}>
          <form action="https://formspree.io/f/myzjpldq" method="POST">
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField
                label="Your Name"
                name="name"
                required
                fullWidth
                sx={inputStyle}
              />
              <TextField
                label="Your Email"
                name="email"
                required
                fullWidth
                sx={inputStyle}
              />
              <TextField
                label="Your Message"
                name="message"
                required
                multiline
                rows={5}
                fullWidth
                sx={inputStyle}
              />
              <Button type="submit" variant="contained" sx={{ mt: 1 }}>
                Send Message
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;