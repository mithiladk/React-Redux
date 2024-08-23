import { Box, Grid, Typography, Button } from '@mui/material';

const BlogSection = () => {
  return (
    <Box
      sx={{
        padding: '40px 20px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        marginTop: '40px',
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: '100%',
              height: '300px',
              backgroundImage: 'url(/images/blog.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            }}
          ></Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Roboto, sans-serif',
              color: '#333',
              marginBottom: '20px',
            }}
          >
            Beauty and Cosmetology Insights
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Roboto, sans-serif',
              color: '#555',
              marginBottom: '20px',
              textAlign: 'left',
            }}
          >
            Explore the latest trends, tips, and techniques in beauty and cosmetology. Stay updated with our blog for expert advice and insights that will help you enhance your skills and knowledge in the industry.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis recusandae omnis iure quae amet non distinctio repudiandae exercitationem similique doloribus.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#C89D7B',
              color: '#FFF',
              borderRadius: '20px',
              padding: '10px 20px',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              fontFamily: 'Roboto, sans-serif',
              '&:hover': {
                backgroundColor: '#B37D61',
              },
            }}
          >
            Read More
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BlogSection;
