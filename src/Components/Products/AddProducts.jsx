import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../Redux/productSlice';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';

export default function AddProducts() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append('image', image);
    dispatch(createProduct(formData)).then(() => {
      navigate("/showproduct");
    });
  };

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <Grid 
      container 
      justifyContent="flex-end" 
      style={{ 
        paddingTop: '100px', 
        marginTop:'60px',
        paddingRight:'20px',
        backgroundImage: 'url(/products/addProduct.jpg)', // Add your background image here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
         paddingBottom: '80px',
      
      }}
    >
      <Grid item xs={12} sm={8} md={4}> {/* Reduced the width and aligned right */}
        <Paper
          elevation={4}
          style={{
            padding: '30px',
            backgroundColor: '#fff0f6',
            borderRadius: '10px',
            marginTop: '50px',
          }}
        >
          <h2
            style={{
              color: '#d81b60',
              textAlign: 'center',
              marginBottom: '20px',
              fontFamily: '"Poppins", sans-serif',
              textShadow: '1px 1px 2px #d81b60',
              fontSize: '2rem', // Increased the text size of the title
            }}
          >
            Add New Product
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register('title', { required: 'Title is required' })}
              error={!!errors.title}
              helperText={errors.title ? errors.title.message : ''}
              InputLabelProps={{ style: { fontSize: '16px', color: '#d81b60', fontFamily: '"Poppins", sans-serif' } }}
              InputProps={{ style: { fontSize: '14px', color: '#555', fontFamily: '"Poppins", sans-serif' } }}
            />
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register('description', { required: 'Description is required' })}
              error={!!errors.description}
              helperText={errors.description ? errors.description.message : ''}
              InputLabelProps={{ style: { fontSize: '16px', color: '#d81b60', fontFamily: '"Poppins", sans-serif' } }}
              InputProps={{ style: { fontSize: '14px', color: '#555', fontFamily: '"Poppins", sans-serif' } }}
            />

            <Grid item xs={12}>
              <Button
                component="label"
                variant="outlined"
                fullWidth
                style={{
                  margin: '20px 0',
                  padding: '10px',
                  fontSize: '14px',
                  color: '#d81b60',
                  borderColor: '#d81b60',
                  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
                  backgroundColor: '#fff',
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                Upload Image
                <input
                  type="file"
                  accept='image/*'
                  required
                  onChange={handleImageUpload}
                />
              </Button>
            </Grid>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{
                padding: '10px',
                fontSize: '16px',
                color: '#fff',
                backgroundColor: '#d81b60',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Add Product
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}
