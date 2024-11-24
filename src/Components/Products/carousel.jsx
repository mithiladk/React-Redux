import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import useEmblaCarousel from 'embla-carousel-react';
import './ProductCarousel.css';

const images = [
  { id: 1, src: '/images/cosmetology.jpg', title: 'Oil Soap' },
  { id: 2, src: '/products/Cosmetology1.jpg', title: 'Organic Soap' },
  { id: 3, src: '/products/Cosmetology2.avif', title: 'Glycerin Soap' },
  { id: 4, src: '/products/product9.jpg', title: 'Olive Oil Soap' },
  { id: 5, src: '/products/product10.avif', title: 'Herbal Soap' },
  { id: 6, src: '/products/oil1.jpg', title: 'Lavender Soap' },
];

const ProductCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    speed: 5,
  });

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'hidden',
        padding: '50px 0',
        marginTop: '50px', 
        backgroundColor: '#f7e7f3',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <IconButton
          onClick={scrollPrev}
          sx={{
            color: '#000',
            backgroundColor: '#ffffffb3',
            '&:hover': { backgroundColor: '#ffffff' },
            zIndex: 1,
          }}
        >
          <ArrowBackIos />
        </IconButton>

        <Box className="embla" ref={emblaRef} sx={{ flexGrow: 1, overflow: 'hidden' }}>
          <Box className="embla__container" sx={{ display: 'flex', cursor: 'grab' }}>
            {images.map((image) => (
              <Box className="embla__slide" key={image.id} sx={{ flex: '0 0 20%' }}>
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    width: '160px',
                    height: '160px',
                    margin: '0 auto',
                    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      width: '100%',
                      textAlign: 'center',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      color: '#fff',
                      padding: '10px',
                      fontFamily: 'Playfair Display, serif',
                    }}
                  >
                    {image.title}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <IconButton
          onClick={scrollNext}
          sx={{
            color: '#000',
            backgroundColor: '#ffffffb3',
            '&:hover': { backgroundColor: '#ffffff' },
            zIndex: 1,
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProductCarousel;
