import React from 'react';
import { Container, Grid, Typography, Button, Box, Paper } from '@mui/material';
import '@fontsource/poppins'; // Importing Poppins font
import '@fontsource/playfair-display'; // Importing Playfair Display font
import BlogSection from './BlogSection';
import ProductCarousel from '../Products/carousel';

const Home = () => {
  return (
    <>
      <Box position="relative" mt={4}>
        <img
          //src="https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/412886940_857798872806421_9041891129793330856_n.jpg?stp=cp6_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=OutuVAq7VLEQ7kNvgG4QRlS&_nc_ht=scontent.fccu4-3.fna&oh=00_AYAYAtgWqj1dnthZW9sHGePP47EOH09S_3WN5eP68aF-dA&oe=66C4137F"
          src="/images/finalbanner.jpg"
          alt="background"
          style={{ width: '100%', height: '550px', objectFit: 'cover' }}
        />
        <Box
          position="absolute"
          textAlign="center"
          top={{ xs: '100px', md: '140px' }}
          left={{ xs: '20px', md: '100px' }}
          sx={{
            color: '#31241E',
            fontFamily: 'Playfair Display, serif',
            lineHeight: '1.5',
            textAlign: 'left',
            maxWidth: '500px',
          }}
        >
          <Typography
            variant="h3"
            component="p"
            fontWeight="bold"
            sx={{
              fontSize: { xs: '24px', md: '32px' },
              letterSpacing: '0.2em',
            }}
          >
            Clean. <br />
            Moisture. <br />
            Care.
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              mt: 2,
              color: '#333',
              fontFamily: 'Roboto, sans-serif',
              fontSize: { xs: '16px', md: '18px' },
              lineHeight: '1.5',
            }}
          >
            Experience the ultimate in skincare with our premium products. Discover how our range can enhance your daily routine and bring out your natural beauty.
          </Typography>
          <Button
            className="custom-button"
            variant="contained"
            sx={{
              mt: 4,
              backgroundColor: '#C89D7B',
              color: '#FFF',
              '&:hover': {
                backgroundColor: '#B37D61',
              },
              fontFamily: 'Roboto, sans-serif',
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>


      <ProductCarousel />

      <Box
        sx={{
          // backgroundColor: '#F9E6E6', 
          width: '100%', 
          mt: 4,
          pt: 4,
          pb: 4,
        }}
      >
        <Container maxWidth="xl" sx={{ mt: 4 }}>
          <Grid
            container
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              backgroundColor: '#F9F9F9',
              borderRadius: '16px',
              boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
              padding: '24px',
              marginTop: '40px',
              width: '100%',
            }}
          >
            <Grid item xs={12} md={6} display="flex" flexDirection="column" justifyContent="center">
              <Typography
                variant="body1"
                fontWeight="medium"
                lineHeight="1.7"
                letterSpacing="0.05em"
                textAlign="left"
                mb={2}
                style={{ fontSize: '16px', color: '#555' }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem voluptate <br /> cupiditate id assumenda labore necessitatibus
                sit obcaecati illo laborum at illum est, <br /> provident eveniet reiciendis non
                esse corrupti quibusdam consequuntur. Culpa nihil,<br />
                expedita exercitationem,
                modi animi numquam eum ullam quod eligendi repellat<br />
                cum hic odio rerum similique
                porro tempora cumque?
              </Typography>
              <Button
                variant="contained"
                className="custom-button"
                sx={{
                  backgroundColor: '#D1C8C1',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  lineHeight: '24px',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  textAlign: 'center',
                  mt: 2,
                  alignSelf: 'flex-start',
                }}
              >
                Shop Now
              </Button>
            </Grid>

            <Grid item xs={12} md={6} display="flex" justifyContent="space-between">
              <img
                src="/images/first.jpeg"
                alt="first"
                style={{
                  width: '32%',
                  borderRadius: '8px',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              />
              <img
                src="/images/second.jpeg"
                alt="second"
                style={{
                  width: '32%',
                  borderRadius: '8px',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              />
              <img
                src="/images/third.jpeg"
                alt="third"
                style={{
                  width: '32%',
                  borderRadius: '8px',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              />
            </Grid>
          </Grid>
         
          <Grid
            container
            display="flex"
            justifyContent="space-around"
            marginTop="60px"
            sx={{
              backgroundColor: '#F9F9F9', // Ensuring uniformity with the first section
              padding: '40px 20px',
              borderRadius: '12px',
              boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
              width: '100%', // Making the width full
            }}
          >
            <Box
              sx={{
                width: '468px',
                height: '485px',
                transform: 'translate(0, -54px) rotate(0deg)',
                marginLeft: '30px',
                marginRight: '20px',
                marginTop: '52px',
                boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.2)',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#fff',
              }}
            >
              <img
                src="/images/ceo1.jpg"
                alt="ceo"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>

            

            <Grid item xs={12} md={6} display="flex" flexDirection="column">
              <Typography
                variant="h6"
                fontWeight="bold"
                textAlign="left"
                color="#333333" // Darker grey for better readability
                mb={1}
              >
                CEO
              </Typography>

              <Typography
                variant="h5"
                fontWeight="bold"
                mb={2}
                textAlign="left"
                color="#212121" // Darker color for Olivia Wilson's name
              >
                Olivia Wilson
              </Typography>

              <Typography
                variant="body2"
                fontWeight="bold"
                lineHeight="1.5"
                mb={2}
                textAlign="left"
                color="#444444" // Dark grey for the description text
              >
                Olivia Wilson is a dynamic leader with over 15 years of experience in the tech industry.
                She has successfully led multiple teams to deliver innovative solutions. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Necessitatibus, unde minus? Qui autem itaque aspernatur
                tempore quidem officiis iure amet.
              </Typography>

              <Typography
                variant="body1"
                fontWeight="medium"
                lineHeight="1.7"
                letterSpacing="0.05em"
                textAlign="left"
                width="100%"
                mb={2}
                style={{ fontSize: '16px', color: '#333333' }} // Dark grey for the second paragraph for better readability
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, nostrum ratione
                recusandae perspiciatis culpa earum qui officiis voluptates eos impedit, dignissimos
                veniam nam nisi tenetur voluptatibus aut reiciendis. Exercitationem libero aliquam,
                quia repudiandae quos adipisci quibusdam deserunt eaque quod dicta voluptas eveniet
                iure saepe harum incidunt ratione earum sunt voluptates labore tenetur?
              </Typography>

              <Button
                variant="contained"
                className="custom-button"
                sx={{
                  backgroundColor: '#7B7B7B',
                  color: '#FFF',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  lineHeight: '24px',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  textAlign: 'center',
                  mt: 2,
                  alignSelf: 'flex-start',
                  '&:hover': {
                    backgroundColor: '#626262',
                  },
                }}
              >
                Read More
              </Button>
            </Grid>


          </Grid>
          <Box
            sx={{
              backgroundColor: '#F9F6F3',
              padding: '40px 20px',
              borderRadius: '8px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              margin: '40px 0',
              width: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'Playfair Display, serif',
                color: '#333',
                marginBottom: '20px',
                textAlign: 'center',
              }}
            >
              Beauty at Home
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: 'Roboto, sans-serif',
                color: '#555',
                marginBottom: '30px',
                textAlign: 'center',
              }}
            >
              A 4-week online course that brings out the beauty in you!
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Paper
                  sx={{
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    height: '100%', // Set a fixed height for consistency
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    '&:hover': {
                      boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
                      transform: 'translateY(-5px)',
                      transition: 'all 0.3s ease',
                    },
                  }}
                >
                  <img
                    src="/images/homebeauty.jpg"
                    alt="Beauty at Home"
                    style={{
                      width: '100%',
                      height: '200px', // Set a fixed height for the image
                      objectFit: 'cover',
                      borderRadius: '8px',
                      marginBottom: '15px',
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: 'Playfair Display, serif',
                      color: '#333',
                      marginBottom: '10px',
                    }}
                  >
                    Beauty at Home
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'Roboto, sans-serif',
                      color: '#666',
                      marginBottom: '15px',
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#C89D7B',
                      color: '#FFF',
                      '&:hover': {
                        backgroundColor: '#B37D61',
                      },
                      fontFamily: 'Roboto, sans-serif',
                    }}
                  >
                    Read More
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper
                  sx={{
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    height: '100%', // Set a fixed height for consistency
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    '&:hover': {
                      boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
                      transform: 'translateY(-5px)',
                      transition: 'all 0.3s ease',
                    },
                  }}
                >
                  <img
                    src="/images/cosmetology.jpg"
                    alt="Cosmetology"
                    style={{
                      width: '100%',
                      height: '200px', // Set a fixed height for the image
                      objectFit: 'cover',
                      borderRadius: '8px',
                      marginBottom: '15px',
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: 'Playfair Display, serif',
                      color: '#333',
                      marginBottom: '10px',
                    }}
                  >
                    Cosmetology
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'Roboto, sans-serif',
                      color: '#666',
                      marginBottom: '15px',
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#C89D7B',
                      color: '#FFF',
                      '&:hover': {
                        backgroundColor: '#B37D61',
                      },
                      fontFamily: 'Roboto, sans-serif',
                    }}
                  >
                    Read More
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper
                  sx={{
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    '&:hover': {
                      boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
                      transform: 'translateY(-5px)',
                      transition: 'all 0.3s ease',
                    },
                  }}
                >
                  <img
                    src="/images/personalcare.jpg"
                    alt="Personal Care"
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      marginBottom: '15px',
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: 'Playfair Display, serif',
                      color: '#333',
                      marginBottom: '10px',
                    }}
                  >
                    Personal Care
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'Roboto, sans-serif',
                      color: '#666',
                      marginBottom: '15px',
                    }}
                  >
                    Discover our personal care products designed to enhance your daily routine.
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#C89D7B',
                      color: '#FFF',
                      '&:hover': {
                        backgroundColor: '#B37D61',
                      },
                      fontFamily: 'Roboto, sans-serif',
                    }}
                  >
                    Read More
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper
                  sx={{
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    '&:hover': {
                      boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
                      transform: 'translateY(-5px)',
                      transition: 'all 0.3s ease',
                    },
                  }}
                >
                  <img
                    src="/images/skintreatment.avif"
                    alt="Skin Treatments"
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      marginBottom: '15px',
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: 'Playfair Display, serif',
                      color: '#333',
                      marginBottom: '10px',
                    }}
                  >
                    Skin Treatments
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'Roboto, sans-serif',
                      color: '#666',
                      marginBottom: '15px',
                    }}
                  >
                    Explore our range of skin treatments tailored for every skin type.
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#C89D7B',
                      color: '#FFF',
                      '&:hover': {
                        backgroundColor: '#B37D61',
                      },
                      fontFamily: 'Roboto, sans-serif',
                    }}
                  >
                    Read More
                  </Button>
                </Paper>
              </Grid>

            </Grid>
          </Box>
          <BlogSection />
        </Container>
      </Box>
    </>
  );
}

export default Home;
