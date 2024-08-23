import React from 'react';
import "./product.css"
import { Grid, Card, CardActions, CardContent, CardMedia, Typography, Rating, Button } from '@mui/material';

const products = [
    {
        id: 1,
        image: '/products/spa.jpg',
        title: 'Body creams',
        description: 'A natural body cream for smoothness.',
        price: '$5.00',
        rating: 4,
    },
    {
        id: 2,
        image: '/products/beauty.jpg',
        title: 'Beauty Products',
        description: 'A wide range of products.',
        price: '$5.00',
        rating: 4,
    },
    {
        id: 3,
        image: '/products/powder.jpg',
        title: 'Matt Powder',
        description: 'Based on skin tone.',
        price: '$5.00',
        rating: 5,
    },
    {
        id: 4,
        image: '/products/product1.jpg',
        title: 'Olive Oil Soap',
        description: 'A moisturizing olive oil soap.',
        price: '$5.00',
        rating: 4,
    },
    {
      id: 5,
      image: '/products/product5.jpg',
      title: 'Olive Oil Soap',
      description: 'A moisturizing olive oil soap.',
      price: '$5.00',
      rating: 4,
  },
  {
    id: 6,
    image: '/products/asset 25.jpeg',
    title: 'Collagen',
    description: 'For good skin health',
    price: '$5.00',
    rating: 5,
},
{
  id: 7,
  image: '/products/asset 3.webp',
  title: 'Collagen',
  description: 'For good skin health',
  price: '$5.00',
  rating: 4,
},
{
  id: 8,
  image: '/products/product2.jpg',
  title: 'oil',
  description: 'For good skin health',
  price: '$5.00',
  rating: 3,
},
{
  id: 9,
  image: '/products/product4.jpg',
  title: 'Soap',
  description: 'For good skin health',
  price: '$5.00',
  rating: 5,
},
{
  id: 10,
  image: '/products/newprod.jpeg',
  title: 'Soap',
  description: 'For good skin health',
  price: '$5.00',
  rating: 5,
},
{
  id: 11,
  image: '/products/asset 9.jpeg',
  title: 'Oils',
  description: 'For good skin health',
  price: '$5.00',
  rating: 5,
},
{
  id: 12,
  image: '/products/product6.jpg',
  title: 'Oils',
  description: 'For good skin health',
  price: '$5.00',
  rating: 5,
},
];

const ShowProduct = () => {
    return (
      <div className='product'>
        <Grid container spacing={2} 
        style={{ paddingTop: '100px', paddingBottom: '80px',

          paddingLeft:'20px',
          paddingRight:'5px',
         }}
        sx={{
            // width: '100%',  // Full width
           
            boxSizing: 'border-box',  // Ensures padding doesn’t cause overflow
          
          
        }}
        
        >
            {products.map((product) => (
                <Grid item xs={12} sm={6} md={3} key={product.id}>
                    <Card
                    // style={{marginBottom:'10px'}}
                        sx={{
                            width: '100%',
                            maxWidth: 345,
                            height: '400px', 
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                            '&:hover': {
                                boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
                                transform: 'translateY(-5px)',
                                transition: 'all 0.3s ease',
                            },
                        }}
                    >
                        <CardMedia
                            component="img"
                             height='220px'
                            image={product.image}
                            alt={product.title}
                            sx={{ objectFit: 'cover' ,height:'220px'}}
                        />
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{ fontFamily: 'Playfair Display, serif', color: '#333' }}>
                                {product.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Roboto, sans-serif', color: '#666' }}>
                                {product.description}
                            </Typography>
                            <Rating value={product.rating} readOnly sx={{ marginTop: '8px' }} />
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'center', padding: '8px 16px' }}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#d81b60',
                                    color: '#fff',
                                    '&:hover': {
                                        backgroundColor: '#c2185b',
                                    },
                                }}
                            >
                                Add to Cart
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
      </div>
    );
};

export default ShowProduct;
