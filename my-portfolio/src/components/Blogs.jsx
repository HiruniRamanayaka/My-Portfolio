import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Avatar,
  Button
} from '@mui/material';
import { red } from '@mui/material/colors';
import { useInView } from 'react-intersection-observer';

const blogs = [
  {
    title: 'CIA Triad in Cybersecurity',
    content: 'Explore the CIA Triad: Confidentiality, Integrity, and Availability, the core principles of cybersecurity. Learn their importance, real-world examples, and how they help protect data in today’s digital world.',
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Lq0N8kcyg1aUKl0YQnab4w.jpeg',
    link: 'https://medium.com/@hiruniramanayaka9/cia-triad-in-cyber-security-ce424030c303',
  },
  {
    title: 'Job roles in DBM',
    content: 'Explore the essential job roles in database management, from administrators to developers. Understand key responsibilities, required skills, and qualifications for each role in today’s data-driven world.',
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*_igPPW2rFqtY4N_Ase3p1w.jpeg',
    link: 'https://medium.com/@hiruniramanayaka9/a-deep-dive-into-essential-job-roles-in-database-management-5983a5827b0a',
  },
  {
    title: 'MySQL Stored Procedures',
    content: 'Learn how MySQL stored procedures can simplify complex tasks, improve performance, and boost security in your database applications. This beginner-friendly guide covers the basics, advantages, disadvantages, syntax, and real-world examples.',
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*4IGoYdIOkp-oPfLXZ5FS2w.jpeg',
    link: 'https://medium.com/@hiruniramanayaka9/exploring-the-fundamentals-of-mysql-stored-procedures-07674f5f59fc',
  },
  {
    title: 'Software Licenses',
    content: 'A beginner-friendly guide to understanding different types of software licenses, including proprietary, open-source, public domain, copyleft, and more. This article also clarifies the difference between ownership and licensing in software.',
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*AuaUvAfKn8DbDY3ZBU_XLw.jpeg',
    link: 'https://medium.com/@hiruniramanayaka9/currently-available-software-licenses-f3b9905536e7',
  },
  {
    title: 'GitHub Through VS Code',
    content: 'A step-by-step tutorial for beginners on how to manage GitHub repositories directly in Visual Studio Code, no terminal needed!',
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*D8hoCPLKjlZIVOHUxYPX2Q.png',
    link: 'https://medium.com/@hiruniramanayaka9/how-to-use-github-through-vs-code-without-using-command-prompt-a-beginners-guide-f635865175da',
  },
];


const Blogs = () => {
  return (
    <Container id="blogs" maxWidth="lg" sx={{ py: 4, textAlign: 'center' }}>
      <Typography variant="h1" fontWeight="bold" gutterBottom>
        BLOGS
      </Typography>

      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: 3,
          pb: 2,
          scrollSnapType: 'x mandatory',
          '&::-webkit-scrollbar': { display: 'none' },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        }}
      >
        {blogs.map((blog, index) => {
          const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

          return (
            <Card
              key={index}
              ref={ref}
              component="div"
              sx={{
                minWidth: 300,
                maxWidth: 320,
                flex: '0 0 auto',
                scrollSnapAlign: 'start',
                backgroundColor: "rgba(0, 0, 0, 0.5)", 
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                color: '#fff',
                fontWeight: '500',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s ease',
                '&:hover': {
                  boxShadow: 6,
                  transform: 'scale(1.03)',
                },
              }}
            >
              <CardHeader
                avatar={
                  <Avatar 
                    sx={{ bgcolor: 'rgba(50, 99, 248, 0.6)' }} aria-label="blog-avatar"
                    >
                    {blog.title.charAt(0)}
                  </Avatar>
                }
                title={
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '1rem',
                      fontFamily: 'Roboto, sans-serif',
                      color: '#fff',
                      textAlign: 'left'
                    }}
                  >
                    {blog.title}
                  </Typography>
                }
              />
              <CardMedia
                component="img"
                height="180"
                image={blog.image}
                alt={`${blog.title} blog post`}
              />
              <CardContent sx={{ color: '#fff' }}>
                <Typography variant="body2" color="#fff" textAlign={'match-parent'}>
                  {blog.content} 
                </Typography>
                <Button
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  size="small"
                  sx={{
                    mt: 2,
                    color: '#fff',
                    borderColor: '#fff',
                    '&:hover': {
                      borderColor: '#00bcd4',
                      color: '#00bcd4',
                    },
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 3}}>
        <Typography variant='caption' gutterBottom>← Scroll to explore →</Typography>
        <Button variant="contained" size="small" sx={{ mt: 1, px: 3 }} href="https://medium.com/@hiruniramanayaka9" target="_blank" rel="noopener noreferrer">View More</Button>
      </Box>
    </Container>
  );
};

export default Blogs;