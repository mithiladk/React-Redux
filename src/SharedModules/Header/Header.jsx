import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/authSlice';
import { profile_Url } from '../../Helper/Helper';
import { profileDetails } from '../../Redux/authSlice';
import Logo from "../../Assets/Borcelle.png"

const navItems = [
    { name: 'Home', route: '/home' },
    { name: 'Products', route: '/products' },
    { name: 'AddProducts', route: '/addproducts' },
    { name: 'ShowProduct', route: '/showproduct' },
    // { name: 'Edit', route: '/edit' },
];

function Header() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const navigate = useNavigate();

    const { isLoggedIn, userDetails } = useSelector((state) => state.contents);

    const [isLogged, setIsLogged] = useState('');

    const storedName = localStorage.getItem('name');

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        setIsLogged(storedName);
    }, [storedName]);

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(profileDetails());
        }
    }, [dispatch, isLoggedIn]);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    const handleProfileClick = () => {
        navigate("/userdetails");
    };

    return (
        <AppBar position="fixed" style={{ background: "#F4EDE6" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'montserrat',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: '#86654B',
                            textDecoration: 'none',
                            fontSize: "23px",
                        }}
                    >
                        <img src={Logo} alt="logo"  style={{width:"80px",height:"80px"}} />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {navItems.map((item) => (
                                <NavLink 
                                    to={item.route} 
                                    key={item.name} 
                                    style={({ isActive }) => ({
                                        textDecoration: 'none',
                                        color: isActive ? '#D48A6A' : '#31241E',
                                        fontSize: '18px',
                                        fontFamily: 'poppins',
                                        padding: '8px 16px',
                                        display: 'block',
                                        fontWeight: isActive ? 'bold' : 'normal',
                                        transform: isActive ? 'scale(1.05)' : 'none',
                                        borderBottom: isActive ? '2px solid #D48A6A' : '2px solid transparent',
                                        transition: 'all 0.3s ease-in-out',
                                    })}
                                >
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{item.name}</Typography>
                                    </MenuItem>
                                </NavLink>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {navItems.map((item) => (
                            <NavLink 
                                to={item.route} 
                                key={item.name} 
                                style={({ isActive }) => ({
                                    textDecoration: 'none',
                                    color: isActive ? '#D48A6A' : '#31241E',
                                    fontSize: '18px',
                                    fontFamily: 'poppins',
                                    padding: '8px 16px',
                                    // fontWeight: isActive ? 'bold' : 'normal',
                                    fontWeight:'bold',
                                    transform: isActive ? 'scale(1.05)' : 'none',
                                    borderBottom: isActive ? '2px solid #D48A6A' : '2px solid transparent',
                                    transition: 'all 0.3s ease-in-out',
                                })}
                            >
                                <Button
                                    sx={{
                                        my: 2,
                                        color: 'inherit',
                                        display: 'block',
                                    }}
                                >
                                    {item.name}
                                </Button>
                            </NavLink>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar
                                    alt={isLogged ? "user profile" : "Guest"}
                                    src={isLoggedIn && userDetails?.profile_pic ? profile_Url(userDetails.profile_pic) : ''}
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleProfileClick}>
                                <Typography textAlign="center">Profile</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu} component={Link} to="/signup">
                                <Typography textAlign="center">Sign Up</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu} component={Link} to="/login">
                                <Typography textAlign="center">Sign In</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleLogout}>
                                <Typography textAlign="center">Logout</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
