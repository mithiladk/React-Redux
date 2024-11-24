import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts, DeleteProduct } from '../../Redux/productSlice';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';  // Import Rating component
import SweetAlert from 'react-bootstrap-sweetalert';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import { Box,Pagination } from '@mui/material';

const ShowProduct = () => {
    const dispatch = useDispatch();
    const [deleteId, setDeleteId] = useState("");
    const [isDelete, setIsDelete] = useState(false);
    const { AllProduct ,totalPages} = useSelector((state) => state.cart);
    const [totalRecords, setPage] = useState()

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    const delete_func = useCallback(() => {
        if (deleteId !== "") {
            dispatch(DeleteProduct({ id: deleteId })).then(() => {
                dispatch(listProducts());
            });
        }
        setDeleteId("");
        setIsDelete(false);
    }, [deleteId, dispatch]);

    const handelchange = (item, pageno) => {
        setPage(pageno);
        dispatch(
          listProducts({
            page: pageno,
            perPage: 10,
            item
          })
        );
      };

    return (
        <>
            <Grid container spacing={4} justifyContent="center" style={{ marginTop: '80px',paddingLeft:'20px',paddingRight:'5px',paddingBottom:'10px'}}
                sx={{
                  backgroundImage: 'url(/images/show-background1.jpg)'
                }}
            >
                {AllProduct?.map((product) => (
                    <Grid item xs={12} sm={6} md={3} key={product.id}>
                        <Card
                            sx={{
                                maxWidth: 345,
                                height: '420px', 
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
                                image={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${product?.image}`}
                                alt={product.title}
                                sx={{ objectFit: 'cover' , height:'220px'}}
                            />
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        fontFamily: 'Playfair Display, serif',
                                        color: '#333',
                                    }}
                                >
                                    {product.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        fontFamily: 'Roboto, sans-serif',
                                        color: '#666',
                                    }}
                                >
                                    {product.description}
                                </Typography>
                                <Rating
                                    name="read-only"
                                    value={4} // Set static rating for now
                                    readOnly
                                    sx={{ marginTop: '8px' }} // Add some spacing above rating
                                />
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'space-between', padding: '8px 16px' }}>
                                <Link
                                    to={`/Edit/${product?._id}`}
                                    style={{
                                        textDecoration: 'none',
                                        color: '#fff',
                                        backgroundColor: '#d81b60',
                                        padding: '6px 12px',
                                        borderRadius: '4px',
                                        fontFamily: 'Roboto, sans-serif',
                                        transition: 'background-color 0.3s ease',
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#c2185b'}
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#d81b60'}
                                >
                                    Edit
                                </Link>
                                <Link
                                    to=""
                                    onClick={() => {
                                        setDeleteId(product?._id);
                                        setIsDelete(true);
                                    }}
                                    style={{
                                        textDecoration: 'none',
                                        color: '#fff',
                                        backgroundColor: '#d81b60',
                                        padding: '6px 12px',
                                        borderRadius: '4px',
                                        fontFamily: 'Roboto, sans-serif',
                                        transition: 'background-color 0.3s ease',
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#c2185b'}
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#d81b60'}
                                >
                                    Delete
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {isDelete && (
                <SweetAlert
                    warning
                    showCancel
                    title="Are you sure?"
                    subtitle={"You will not be able to recover"}
                    cancelBtnStyle={{
                        backgroundColor: "red",
                        padding: 10,
                        textDecoration: "none",
                        color: "white",
                    }}
                    confirmBtnStyle={{
                        backgroundColor: "#024b98",
                        padding: 10,
                        textDecoration: "none",
                        color: "white",
                    }}
                    onConfirm={delete_func}
                    onCancel={() => setIsDelete(false)}
                >
                    You will not be able to recover this imaginary file!
                </SweetAlert>
            )}
            <Box display="flex" justifyContent="center"  bgcolor={'white'}
       
            >
        <Pagination
          count={totalPages}
          totalRecords={totalRecords}
          onChange={handelchange}
        />
      </Box>
        </>
    );
}

export default ShowProduct;
