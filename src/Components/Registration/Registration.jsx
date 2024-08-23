import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { signup } from '../../Redux/authSlice';
import { TextField, Button, IconButton, Box, Grid, Typography } from '@mui/material';
import { Visibility, VisibilityOff, Person, Email } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { redirectLogin } = useSelector((state) => state.contents);
  const [profile_pic, setProfile_pic] = useState(null);
  const [image, setImage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    const formdata = new FormData();
    formdata.append("first_name", data.first_name);
    formdata.append("last_name", data.last_name);
    formdata.append("email", data.email);
    formdata.append("password", data.password);
    formdata.append("profile_pic", profile_pic);
    dispatch(signup(formdata));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile_pic(file);
      setImage(file.name);
    }
  };

  const RedirectUser = () => {
    let name = localStorage.getItem("name");
    let isInRegisterPage = window.location.pathname.toLowerCase() === "/signup";
    if (name !== null && name !== undefined) {
      isInRegisterPage && navigate("/login");
    }
  };

  useEffect(() => {
    RedirectUser();
  }, [redirectLogin, navigate]);

  return (
    <Box
      sx={{
        marginTop: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundImage: `url(/images/register3.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: '#fff',
        padding: 2,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{
          mt: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          padding: 4,
          width: '100%',
          maxWidth: '500px',
          marginRight: '20px',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            fontFamily: "Verdana, Poppins, sans-serif", // Updated font family
            fontWeight: 'bold',  // Ensured boldness
            fontSize: '2rem',  // Increased font size
            color: '#333', // Updated font color to a dark shade for contrast
            mb: 3,
          }}
        >
          Register
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="First Name"
              {...register("first_name", { required: "First name is required" })}
              error={!!errors.first_name}
              helperText={errors.first_name?.message}
              InputProps={{
                startAdornment: (
                  <Person sx={{ marginRight: 1, color: '#86654B' }} />
                ),
              }}
              required
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Last Name"
              {...register("last_name", { required: "Last name is required" })}
              error={!!errors.last_name}
              helperText={errors.last_name?.message}
              InputProps={{
                startAdornment: (
                  <Person sx={{ marginRight: 1, color: '#86654B' }} />
                ),
              }}
              required
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
              helperText={errors.email?.message}
              InputProps={{
                startAdornment: (
                  <Email sx={{ marginRight: 1, color: '#86654B' }} />
                ),
              }}
              required
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password?.message}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={togglePasswordVisibility} sx={{ color: '#86654B' }}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
              required
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button component="label" sx={{ color: '#86654B', borderColor: '#86654B', '&:hover': { borderColor: '#A0522D' } }}>
              Upload Image
              <input
                type="file"
                accept='image/*'
                required
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
            </Button>
            {image && <Typography variant="caption" color="textSecondary">{image}</Typography>}
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: '#86654B',
                '&:hover': {
                  backgroundColor: '#A0522D',
                },
              }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Registration;
