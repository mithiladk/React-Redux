import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { profileDetails } from '../../Redux/authSlice';
import { Typography, Grid, Box, TextField, Container, CircularProgress } from '@mui/material';
import { profile_Url } from '../../Helper/Helper';
import "./Profile.css"

const Profile = () => {
  const dispatch = useDispatch();
  const { userDetails, upload_status } = useSelector((state) => state.contents);

  useEffect(() => {
    dispatch(profileDetails());
  }, [dispatch]);

  if (upload_status === 'loading') {
    return (
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundImage: 'url(/products/profile1.jpg)', // Background image
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          marginTop: '0', // Ensure no margin affects the container
          padding: '0', // Ensure no padding affects the container
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  if (upload_status === 'failed' || !userDetails) {
    return (
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundImage: 'url(/products/profile1.jpg)', // Background image
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          marginTop: '0', // Ensure no margin affects the container
          padding: '0', // Ensure no padding affects the container
        }}
      >
        <Typography variant="h6" color="error">
          Failed to load user details
        </Typography>
      </Container>
    );
  }

  const profilePicUrl = profile_Url(userDetails?.profile_pic);

  return (
    <div className='profile'>

   
    <Container
      sx={{
        minHeight: '100vh', // Full viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0',
        //backgroundImage: 'url(/products/profile1.jpg)', // Background image
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          padding: '2rem',
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // Light background for form
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Box shadow
          maxWidth: '600px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Center the content horizontally
        }}
      >
        <Typography variant="h4" gutterBottom align="center" sx={{ marginBottom: '1rem' }}>Profile</Typography>

        {userDetails.profile_pic && (
          <Box
            sx={{
              marginBottom: '1.5rem', // Space between the profile pic and form fields
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src={profilePicUrl}
              alt="Profile"
              width="140"
              height="130"
              style={{
                borderRadius: '50%',
                border: '3px solid #fff', // Border for profile pic
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect
                transition: 'transform 0.3s ease-in-out',
                transform: 'scale(1.05)', // Zoom effect
              }}
            />
          </Box>
        )}

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="First Name"
              value={userDetails.first_name}
              InputProps={{ readOnly: true }}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
                '& .MuiFormLabel-root': {
                  color: 'black',
                  '&.Mui-focused': {
                    color: 'black',
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Last Name"
              value={userDetails.last_name}
              InputProps={{ readOnly: true }}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
                '& .MuiFormLabel-root': {
                  color: 'black',
                  '&.Mui-focused': {
                    color: 'black',
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              value={userDetails.email}
              InputProps={{ readOnly: true }}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
                '& .MuiFormLabel-root': {
                  color: 'black',
                  '&.Mui-focused': {
                    color: 'black',
                  },
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
    </div>
  );
};

export default Profile;
