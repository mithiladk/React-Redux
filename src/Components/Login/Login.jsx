import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { TextField, Button, Box, Grid, Typography, IconButton } from '@mui/material';
import { Email, Visibility, VisibilityOff } from '@mui/icons-material';
import { useForm } from "react-hook-form";


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { redirectHome } = useSelector((state) => state.contents);
    const [showPassword, setShowPassword] = useState(false);
    const form = useForm();
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;

    const onSubmit = (data) => {
        let loginDet = {
            email: data.email,
            password: data.password
        };
        dispatch(login(loginDet));
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const RedirectLog = () => {
        let token = localStorage.getItem("token");
        let issLogin = window.location.pathname.toLowerCase() === "/login";
        if (token !== null && token !== undefined && token !== "") {
            issLogin && navigate("/home");
        }
    };

    useEffect(() => {
        RedirectLog();
    }, [redirectHome, navigate]);

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                height: '100vh',
                 backgroundImage: `url(/images/login.jpg)`,
                // backgroundImage: `url(${process.env.PUBLIC_URL + '/images/login.jpg'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingRight: 4,
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    padding: 4,
                    width: '100%',
                    maxWidth: '400px',
                    marginRight: 4,
                }}
            >
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontFamily: "monospace",
                        fontWeight: 'bold',
                        color: '#86654B',
                        textAlign: 'center'
                    }}
                >
                    Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                    <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                                        <IconButton onClick={handleClickShowPassword} sx={{ color: '#86654B' }}>
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
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    mt: 1,
                                    mb: 2,
                                    backgroundColor: '#86654B',
                                    '&:hover': {
                                        backgroundColor: '#A0522D',
                                    },
                                }}
                            >
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2" align="center" sx={{ color: '#86654B' }}>
                                Not registered? <Link to="/signup" style={{ color: '#A0522D', textDecoration: 'none' }}>Signup here</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;
