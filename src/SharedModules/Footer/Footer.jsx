import React from 'react';
import { Box, Typography, Link, Container, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#C89D7B',
        padding: '40px 20px',
        borderTop: '2px solid #B37D61',
        color: '#FFF',
        // paddingTop: '40px',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Playfair Display, serif',
                color: '#FFF',
                marginBottom: '20px',
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'Roboto, sans-serif',
                color: '#FFF',
                marginBottom: '20px',
              }}
            >
              We offer a variety of online beauty courses designed to enhance your skills and bring out the best in you. Join us and transform your passion into expertise!
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Playfair Display, serif',
                color: '#FFF',
                marginBottom: '20px',
              }}
            >
              Quick Links
            </Typography>
            <Box>
              <Link
                href="#"
                sx={{
                  display: 'block',
                  fontFamily: 'Roboto, sans-serif',
                  color: '#FFF',
                  textDecoration: 'none',
                  marginBottom: '10px',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Home
              </Link>
              <Link
                href="#"
                sx={{
                  display: 'block',
                  fontFamily: 'Roboto, sans-serif',
                  color: '#FFF',
                  textDecoration: 'none',
                  marginBottom: '10px',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Courses
              </Link>
              <Link
                href="#"
                sx={{
                  display: 'block',
                  fontFamily: 'Roboto, sans-serif',
                  color: '#FFF',
                  textDecoration: 'none',
                  marginBottom: '10px',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Pricing
              </Link>
              <Link
                href="#"
                sx={{
                  display: 'block',
                  fontFamily: 'Roboto, sans-serif',
                  color: '#FFF',
                  textDecoration: 'none',
                  marginBottom: '10px',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Contact
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Playfair Display, serif',
                color: '#FFF',
                marginBottom: '20px',
              }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'Roboto, sans-serif',
                color: '#FFF',
                marginBottom: '10px',
              }}
            >
              Email: <a href="mailto:info@beautyathome.com" style={{ color: '#FFF', textDecoration: 'underline' }}>info@beautyathome.com</a>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'Roboto, sans-serif',
                color: '#FFF',
              }}
            >
              Phone: +1 (234) 567-890
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            borderTop: '1px solid #FFF',
            marginTop: '40px',
            paddingTop: '20px',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'Roboto, sans-serif',
              color: '#FFF',
            }}
          >
            &copy; {new Date().getFullYear()} Beauty at Home. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
